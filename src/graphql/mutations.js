/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createMeditationSection = /* GraphQL */ `
  mutation CreateMeditationSection(
    $input: CreateMeditationSectionInput!
    $condition: ModelMeditationSectionConditionInput
  ) {
    createMeditationSection(input: $input, condition: $condition) {
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
export const updateMeditationSection = /* GraphQL */ `
  mutation UpdateMeditationSection(
    $input: UpdateMeditationSectionInput!
    $condition: ModelMeditationSectionConditionInput
  ) {
    updateMeditationSection(input: $input, condition: $condition) {
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
export const deleteMeditationSection = /* GraphQL */ `
  mutation DeleteMeditationSection(
    $input: DeleteMeditationSectionInput!
    $condition: ModelMeditationSectionConditionInput
  ) {
    deleteMeditationSection(input: $input, condition: $condition) {
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
export const createMeditationEntry = /* GraphQL */ `
  mutation CreateMeditationEntry(
    $input: CreateMeditationEntryInput!
    $condition: ModelMeditationEntryConditionInput
  ) {
    createMeditationEntry(input: $input, condition: $condition) {
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
export const updateMeditationEntry = /* GraphQL */ `
  mutation UpdateMeditationEntry(
    $input: UpdateMeditationEntryInput!
    $condition: ModelMeditationEntryConditionInput
  ) {
    updateMeditationEntry(input: $input, condition: $condition) {
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
export const deleteMeditationEntry = /* GraphQL */ `
  mutation DeleteMeditationEntry(
    $input: DeleteMeditationEntryInput!
    $condition: ModelMeditationEntryConditionInput
  ) {
    deleteMeditationEntry(input: $input, condition: $condition) {
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
export const createMeditationList = /* GraphQL */ `
  mutation CreateMeditationList(
    $input: CreateMeditationListInput!
    $condition: ModelMeditationListConditionInput
  ) {
    createMeditationList(input: $input, condition: $condition) {
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
export const updateMeditationList = /* GraphQL */ `
  mutation UpdateMeditationList(
    $input: UpdateMeditationListInput!
    $condition: ModelMeditationListConditionInput
  ) {
    updateMeditationList(input: $input, condition: $condition) {
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
export const deleteMeditationList = /* GraphQL */ `
  mutation DeleteMeditationList(
    $input: DeleteMeditationListInput!
    $condition: ModelMeditationListConditionInput
  ) {
    deleteMeditationList(input: $input, condition: $condition) {
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
export const createDailyTask = /* GraphQL */ `
  mutation CreateDailyTask(
    $input: CreateDailyTaskInput!
    $condition: ModelDailyTaskConditionInput
  ) {
    createDailyTask(input: $input, condition: $condition) {
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
export const updateDailyTask = /* GraphQL */ `
  mutation UpdateDailyTask(
    $input: UpdateDailyTaskInput!
    $condition: ModelDailyTaskConditionInput
  ) {
    updateDailyTask(input: $input, condition: $condition) {
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
export const deleteDailyTask = /* GraphQL */ `
  mutation DeleteDailyTask(
    $input: DeleteDailyTaskInput!
    $condition: ModelDailyTaskConditionInput
  ) {
    deleteDailyTask(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserList = /* GraphQL */ `
  mutation CreateUserList(
    $input: CreateUserListInput!
    $condition: ModelUserListConditionInput
  ) {
    createUserList(input: $input, condition: $condition) {
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
export const updateUserList = /* GraphQL */ `
  mutation UpdateUserList(
    $input: UpdateUserListInput!
    $condition: ModelUserListConditionInput
  ) {
    updateUserList(input: $input, condition: $condition) {
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
export const deleteUserList = /* GraphQL */ `
  mutation DeleteUserList(
    $input: DeleteUserListInput!
    $condition: ModelUserListConditionInput
  ) {
    deleteUserList(input: $input, condition: $condition) {
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
export const createUserMeditationStats = /* GraphQL */ `
  mutation CreateUserMeditationStats(
    $input: CreateUserMeditationStatsInput!
    $condition: ModelUserMeditationStatsConditionInput
  ) {
    createUserMeditationStats(input: $input, condition: $condition) {
      id
      mindfulMinutes
      meditationStreak
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserMeditationStats = /* GraphQL */ `
  mutation UpdateUserMeditationStats(
    $input: UpdateUserMeditationStatsInput!
    $condition: ModelUserMeditationStatsConditionInput
  ) {
    updateUserMeditationStats(input: $input, condition: $condition) {
      id
      mindfulMinutes
      meditationStreak
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserMeditationStats = /* GraphQL */ `
  mutation DeleteUserMeditationStats(
    $input: DeleteUserMeditationStatsInput!
    $condition: ModelUserMeditationStatsConditionInput
  ) {
    deleteUserMeditationStats(input: $input, condition: $condition) {
      id
      mindfulMinutes
      meditationStreak
      createdAt
      updatedAt
      __typename
    }
  }
`;
