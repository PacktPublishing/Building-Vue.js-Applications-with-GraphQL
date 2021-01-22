import { graphqlOperation } from 'aws-amplify';
import {
  getUserAndConversations,
  createConversation,
  createConversationLink,
  createMessage,
  getConversation,
} from 'src/graphql/fragments';
import {
  getCurrentAuthUser,
} from 'src/driver/auth';
import { uid } from 'quasar';
import { AuthAPI } from 'src/driver/appsync';
import MT from './types';

async function newConversation(_vuex, { authorId, otherUserId }) {
  try {
    const members = [authorId, otherUserId];

    const conversationName = members.join(' and ');

    const {
      data: {
        createConversation: {
          id: conversationLinkConversationId,
        },
      },
    } = await AuthAPI.graphql(
      graphqlOperation(createConversation,
        {
          name: conversationName,
          members,
        }),
    );

    const relation = { conversationLinkConversationId };

    await Promise.all([
      AuthAPI.graphql(
        graphqlOperation(createConversationLink, {
          ...relation,
          conversationLinkUserId: authorId,
        }),
      ),
      AuthAPI.graphql(
        graphqlOperation(createConversationLink, {
          ...relation,
          conversationLinkUserId: otherUserId,
        }),
      )]);

    return Promise.resolve({
      id: conversationLinkConversationId,
      name: conversationName,
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

async function newMessage({ commit }, { message, conversationId }) {
  try {
    commit(MT.LOADING);

    const { username } = await getCurrentAuthUser();

    return AuthAPI.graphql(graphqlOperation(
      createMessage,
      {
        id: uid(),
        authorId: username,
        content: message,
        messageConversationId: conversationId,
        createdAt: Date.now(),
      },
    ));
  } catch (e) {
    return Promise.reject(e);
  } finally {
    commit(MT.LOADING);
  }
}

async function getMessages({ commit }) {
  try {
    commit(MT.LOADING);

    const { id } = await getCurrentAuthUser();

    const {
      data: {
        getUser: {
          conversations,
        },
      },
    } = await AuthAPI.graphql(graphqlOperation(
      getUserAndConversations,
      {
        id,
      },
    ));

    commit(MT.SET_CONVERSATIONS, conversations);

    return Promise.resolve(conversations);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

async function fetchNewMessages({ commit }, { conversationId }) {
  try {
    commit(MT.LOADING);

    const { data } = await AuthAPI.graphql(graphqlOperation(
      getConversation,
      {
        id: conversationId,
      },
    ));

    commit(MT.SET_MESSAGES, data.getConversation);

    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
}

export default {
  newConversation,
  newMessage,
  getMessages,
  fetchNewMessages,
};
