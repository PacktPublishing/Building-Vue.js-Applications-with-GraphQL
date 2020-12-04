/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversationLink = /* GraphQL */ `
  subscription OnCreateConversationLink($conversationLinkUserId: ID!) {
    onCreateConversationLink(conversationLinkUserId: $conversationLinkUserId) {
      id
      user {
        id
        email
        username
        avatar {
          bucket
          region
          key
        }
        name
        conversations {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      conversationLinkUserId
      conversation {
        id
        messages {
          nextToken
          startedAt
        }
        associated {
          nextToken
          startedAt
        }
        name
        members
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      conversationLinkConversationId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($messageConversationId: ID!) {
    onCreateMessage(messageConversationId: $messageConversationId) {
      id
      author {
        id
        email
        username
        avatar {
          bucket
          region
          key
        }
        name
        conversations {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      authorId
      content
      conversation {
        id
        messages {
          nextToken
          startedAt
        }
        associated {
          nextToken
          startedAt
        }
        name
        members
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      messageConversationId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      email
      username
      avatar {
        bucket
        region
        key
      }
      name
      conversations {
        items {
          id
          conversationLinkUserId
          conversationLinkConversationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          authorId
          content
          messageConversationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      email
      username
      avatar {
        bucket
        region
        key
      }
      name
      conversations {
        items {
          id
          conversationLinkUserId
          conversationLinkConversationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          authorId
          content
          messageConversationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      email
      username
      avatar {
        bucket
        region
        key
      }
      name
      conversations {
        items {
          id
          conversationLinkUserId
          conversationLinkConversationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          authorId
          content
          messageConversationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
