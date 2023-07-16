/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateMeditationSection = /* GraphQL */ `
  subscription OnCreateMeditationSection(
    $filter: ModelSubscriptionMeditationSectionFilterInput
  ) {
    onCreateMeditationSection(filter: $filter) {
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
export const onUpdateMeditationSection = /* GraphQL */ `
  subscription OnUpdateMeditationSection(
    $filter: ModelSubscriptionMeditationSectionFilterInput
  ) {
    onUpdateMeditationSection(filter: $filter) {
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
export const onDeleteMeditationSection = /* GraphQL */ `
  subscription OnDeleteMeditationSection(
    $filter: ModelSubscriptionMeditationSectionFilterInput
  ) {
    onDeleteMeditationSection(filter: $filter) {
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
export const onCreateMeditationEntry = /* GraphQL */ `
  subscription OnCreateMeditationEntry(
    $filter: ModelSubscriptionMeditationEntryFilterInput
  ) {
    onCreateMeditationEntry(filter: $filter) {
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
export const onUpdateMeditationEntry = /* GraphQL */ `
  subscription OnUpdateMeditationEntry(
    $filter: ModelSubscriptionMeditationEntryFilterInput
  ) {
    onUpdateMeditationEntry(filter: $filter) {
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
export const onDeleteMeditationEntry = /* GraphQL */ `
  subscription OnDeleteMeditationEntry(
    $filter: ModelSubscriptionMeditationEntryFilterInput
  ) {
    onDeleteMeditationEntry(filter: $filter) {
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
export const onCreateMeditationList = /* GraphQL */ `
  subscription OnCreateMeditationList(
    $filter: ModelSubscriptionMeditationListFilterInput
  ) {
    onCreateMeditationList(filter: $filter) {
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
export const onUpdateMeditationList = /* GraphQL */ `
  subscription OnUpdateMeditationList(
    $filter: ModelSubscriptionMeditationListFilterInput
  ) {
    onUpdateMeditationList(filter: $filter) {
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
export const onDeleteMeditationList = /* GraphQL */ `
  subscription OnDeleteMeditationList(
    $filter: ModelSubscriptionMeditationListFilterInput
  ) {
    onDeleteMeditationList(filter: $filter) {
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
export const onCreateDailyTask = /* GraphQL */ `
  subscription OnCreateDailyTask(
    $filter: ModelSubscriptionDailyTaskFilterInput
  ) {
    onCreateDailyTask(filter: $filter) {
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
export const onUpdateDailyTask = /* GraphQL */ `
  subscription OnUpdateDailyTask(
    $filter: ModelSubscriptionDailyTaskFilterInput
  ) {
    onUpdateDailyTask(filter: $filter) {
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
export const onDeleteDailyTask = /* GraphQL */ `
  subscription OnDeleteDailyTask(
    $filter: ModelSubscriptionDailyTaskFilterInput
  ) {
    onDeleteDailyTask(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateUserList = /* GraphQL */ `
  subscription OnCreateUserList($filter: ModelSubscriptionUserListFilterInput) {
    onCreateUserList(filter: $filter) {
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
export const onUpdateUserList = /* GraphQL */ `
  subscription OnUpdateUserList($filter: ModelSubscriptionUserListFilterInput) {
    onUpdateUserList(filter: $filter) {
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
export const onDeleteUserList = /* GraphQL */ `
  subscription OnDeleteUserList($filter: ModelSubscriptionUserListFilterInput) {
    onDeleteUserList(filter: $filter) {
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
export const onCreateUserMeditationStats = /* GraphQL */ `
  subscription OnCreateUserMeditationStats(
    $filter: ModelSubscriptionUserMeditationStatsFilterInput
  ) {
    onCreateUserMeditationStats(filter: $filter) {
      id
      mindfulMinutes
      meditationStreak
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserMeditationStats = /* GraphQL */ `
  subscription OnUpdateUserMeditationStats(
    $filter: ModelSubscriptionUserMeditationStatsFilterInput
  ) {
    onUpdateUserMeditationStats(filter: $filter) {
      id
      mindfulMinutes
      meditationStreak
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserMeditationStats = /* GraphQL */ `
  subscription OnDeleteUserMeditationStats(
    $filter: ModelSubscriptionUserMeditationStatsFilterInput
  ) {
    onDeleteUserMeditationStats(filter: $filter) {
      id
      mindfulMinutes
      meditationStreak
      createdAt
      updatedAt
      __typename
    }
  }
`;
