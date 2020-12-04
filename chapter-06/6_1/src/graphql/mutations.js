/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
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
      associated {
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
      name
      members
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createConversationLink = /* GraphQL */ `
  mutation CreateConversationLink(
    $input: CreateConversationLinkInput!
    $condition: ModelConversationLinkConditionInput
  ) {
    createConversationLink(input: $input, condition: $condition) {
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
export const updateConversationLink = /* GraphQL */ `
  mutation UpdateConversationLink(
    $input: UpdateConversationLinkInput!
    $condition: ModelConversationLinkConditionInput
  ) {
    updateConversationLink(input: $input, condition: $condition) {
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
