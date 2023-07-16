/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogPostsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogPostsId
        __typename
      }
      content
      createdAt
      updatedAt
      postCommentsId
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          createdAt
          updatedAt
          blogPostsId
          __typename
        }
        content
        createdAt
        updatedAt
        postCommentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMeditationSection = /* GraphQL */ `
  query GetMeditationSection($id: ID!) {
    getMeditationSection(id: $id) {
      id
      meditation {
        id
        meditationList {
          id
          createdAt
          updatedAt
          __typename
        }
        video
        author
        image
        sections {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        meditationListMeditationEntriesId
        __typename
      }
      title
      description
      time
      createdAt
      updatedAt
      meditationEntrySectionsId
      __typename
    }
  }
`;
export const listMeditationSections = /* GraphQL */ `
  query ListMeditationSections(
    $filter: ModelMeditationSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeditationSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        meditation {
          id
          video
          author
          image
          createdAt
          updatedAt
          meditationListMeditationEntriesId
          __typename
        }
        title
        description
        time
        createdAt
        updatedAt
        meditationEntrySectionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMeditationEntry = /* GraphQL */ `
  query GetMeditationEntry($id: ID!) {
    getMeditationEntry(id: $id) {
      id
      meditationList {
        id
        meditationEntries {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      video
      author
      image
      sections {
        items {
          id
          title
          description
          time
          createdAt
          updatedAt
          meditationEntrySectionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      meditationListMeditationEntriesId
      __typename
    }
  }
`;
export const listMeditationEntries = /* GraphQL */ `
  query ListMeditationEntries(
    $filter: ModelMeditationEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeditationEntries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        meditationList {
          id
          createdAt
          updatedAt
          __typename
        }
        video
        author
        image
        sections {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        meditationListMeditationEntriesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMeditationList = /* GraphQL */ `
  query GetMeditationList($id: ID!) {
    getMeditationList(id: $id) {
      id
      meditationEntries {
        items {
          id
          video
          author
          image
          createdAt
          updatedAt
          meditationListMeditationEntriesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMeditationLists = /* GraphQL */ `
  query ListMeditationLists(
    $filter: ModelMeditationListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeditationLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        meditationEntries {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDailyTask = /* GraphQL */ `
  query GetDailyTask($id: ID!) {
    getDailyTask(id: $id) {
      id
      label
      screen
      icon
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDailyTasks = /* GraphQL */ `
  query ListDailyTasks(
    $filter: ModelDailyTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDailyTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        screen
        icon
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      password
      profilePicture
      dailyTasks {
        id
        label
        screen
        icon
        createdAt
        updatedAt
        __typename
      }
      meditationStats {
        id
        mindfulMinutes
        meditationStreak
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        password
        profilePicture
        dailyTasks {
          id
          label
          screen
          icon
          createdAt
          updatedAt
          __typename
        }
        meditationStats {
          id
          mindfulMinutes
          meditationStreak
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserList = /* GraphQL */ `
  query GetUserList($id: ID!) {
    getUserList(id: $id) {
      id
      users {
        id
        firstName
        lastName
        email
        password
        profilePicture
        dailyTasks {
          id
          label
          screen
          icon
          createdAt
          updatedAt
          __typename
        }
        meditationStats {
          id
          mindfulMinutes
          meditationStreak
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserLists = /* GraphQL */ `
  query ListUserLists(
    $filter: ModelUserListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        users {
          id
          firstName
          lastName
          email
          password
          profilePicture
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserMeditationStats = /* GraphQL */ `
  query GetUserMeditationStats($id: ID!) {
    getUserMeditationStats(id: $id) {
      id
      mindfulMinutes
      meditationStreak
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserMeditationStats = /* GraphQL */ `
  query ListUserMeditationStats(
    $filter: ModelUserMeditationStatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMeditationStats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mindfulMinutes
        meditationStreak
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
