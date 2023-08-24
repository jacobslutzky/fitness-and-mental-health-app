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
        video
        author
        image
        sections {
          nextToken
          __typename
        }
        createdAt
        updatedAt
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
        video
        author
        image
        sections {
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
      userDailyTasksId
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
        userDailyTasksId
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
        items {
          id
          label
          screen
          icon
          createdAt
          updatedAt
          userDailyTasksId
          __typename
        }
        nextToken
        __typename
      }
      userStats {
        id
        user {
          id
          firstName
          lastName
          email
          password
          profilePicture
          currentProgram
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        mindfulMinutes
        meditationStreak
        workoutsCompleted
        createdAt
        updatedAt
        userStatsUserId
        __typename
      }
      exerciseLogs {
        items {
          id
          exercise
          entryLabels
          createdAt
          updatedAt
          userExerciseLogsId
          __typename
        }
        nextToken
        __typename
      }
      currentProgram
      createdAt
      updatedAt
      userUserStatsId
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
          nextToken
          __typename
        }
        userStats {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
          nextToken
          __typename
        }
        currentProgram
        createdAt
        updatedAt
        userUserStatsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserStats = /* GraphQL */ `
  query GetUserStats($id: ID!) {
    getUserStats(id: $id) {
      id
      user {
        id
        firstName
        lastName
        email
        password
        profilePicture
        dailyTasks {
          nextToken
          __typename
        }
        userStats {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
          nextToken
          __typename
        }
        currentProgram
        createdAt
        updatedAt
        userUserStatsId
        __typename
      }
      mindfulMinutes
      meditationStreak
      workoutsCompleted
      createdAt
      updatedAt
      userStatsUserId
      __typename
    }
  }
`;
export const listUserStats = /* GraphQL */ `
  query ListUserStats(
    $filter: ModelUserStatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          firstName
          lastName
          email
          password
          profilePicture
          currentProgram
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        mindfulMinutes
        meditationStreak
        workoutsCompleted
        createdAt
        updatedAt
        userStatsUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExerciseEntry = /* GraphQL */ `
  query GetExerciseEntry($id: ID!) {
    getExerciseEntry(id: $id) {
      id
      repsCompleted
      weight
      dateCompleted
      workout
      programWeek
      program
      createdAt
      updatedAt
      exerciseLogEntriesId
      __typename
    }
  }
`;
export const listExerciseEntries = /* GraphQL */ `
  query ListExerciseEntries(
    $filter: ModelExerciseEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExerciseEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        repsCompleted
        weight
        dateCompleted
        workout
        programWeek
        program
        createdAt
        updatedAt
        exerciseLogEntriesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExerciseLog = /* GraphQL */ `
  query GetExerciseLog($id: ID!) {
    getExerciseLog(id: $id) {
      id
      user {
        id
        firstName
        lastName
        email
        password
        profilePicture
        dailyTasks {
          nextToken
          __typename
        }
        userStats {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
          nextToken
          __typename
        }
        currentProgram
        createdAt
        updatedAt
        userUserStatsId
        __typename
      }
      exercise
      entries {
        items {
          id
          repsCompleted
          weight
          dateCompleted
          workout
          programWeek
          program
          createdAt
          updatedAt
          exerciseLogEntriesId
          __typename
        }
        nextToken
        __typename
      }
      entryLabels
      createdAt
      updatedAt
      userExerciseLogsId
      __typename
    }
  }
`;
export const listExerciseLogs = /* GraphQL */ `
  query ListExerciseLogs(
    $filter: ModelExerciseLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExerciseLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          firstName
          lastName
          email
          password
          profilePicture
          currentProgram
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        exercise
        entries {
          nextToken
          __typename
        }
        entryLabels
        createdAt
        updatedAt
        userExerciseLogsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
      id
      workout {
        id
        programWeek {
          id
          weekNumber
          workoutLabels
          createdAt
          updatedAt
          programWeeksId
          __typename
        }
        workoutNumber
        title
        status
        exercises {
          nextToken
          __typename
        }
        exerciseLabels
        createdAt
        updatedAt
        programWeekWorkoutsId
        __typename
      }
      name
      sets
      RIR
      restMinutes
      repRange
      exerciseNum
      createdAt
      updatedAt
      workoutExercisesId
      __typename
    }
  }
`;
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        workout {
          id
          workoutNumber
          title
          status
          exerciseLabels
          createdAt
          updatedAt
          programWeekWorkoutsId
          __typename
        }
        name
        sets
        RIR
        restMinutes
        repRange
        exerciseNum
        createdAt
        updatedAt
        workoutExercisesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
      id
      programWeek {
        id
        program {
          id
          author
          image
          title
          introVideo
          createdAt
          updatedAt
          __typename
        }
        weekNumber
        workouts {
          nextToken
          __typename
        }
        workoutLabels
        createdAt
        updatedAt
        programWeeksId
        __typename
      }
      workoutNumber
      title
      status
      exercises {
        items {
          id
          name
          sets
          RIR
          restMinutes
          repRange
          exerciseNum
          createdAt
          updatedAt
          workoutExercisesId
          __typename
        }
        nextToken
        __typename
      }
      exerciseLabels
      createdAt
      updatedAt
      programWeekWorkoutsId
      __typename
    }
  }
`;
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        programWeek {
          id
          weekNumber
          workoutLabels
          createdAt
          updatedAt
          programWeeksId
          __typename
        }
        workoutNumber
        title
        status
        exercises {
          nextToken
          __typename
        }
        exerciseLabels
        createdAt
        updatedAt
        programWeekWorkoutsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProgramWeek = /* GraphQL */ `
  query GetProgramWeek($id: ID!) {
    getProgramWeek(id: $id) {
      id
      program {
        id
        author
        image
        title
        introVideo
        weeks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      weekNumber
      workouts {
        items {
          id
          workoutNumber
          title
          status
          exerciseLabels
          createdAt
          updatedAt
          programWeekWorkoutsId
          __typename
        }
        nextToken
        __typename
      }
      workoutLabels
      createdAt
      updatedAt
      programWeeksId
      __typename
    }
  }
`;
export const listProgramWeeks = /* GraphQL */ `
  query ListProgramWeeks(
    $filter: ModelProgramWeekFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgramWeeks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        program {
          id
          author
          image
          title
          introVideo
          createdAt
          updatedAt
          __typename
        }
        weekNumber
        workouts {
          nextToken
          __typename
        }
        workoutLabels
        createdAt
        updatedAt
        programWeeksId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
    getProgram(id: $id) {
      id
      author
      image
      title
      introVideo
      weeks {
        items {
          id
          weekNumber
          workoutLabels
          createdAt
          updatedAt
          programWeeksId
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
export const listPrograms = /* GraphQL */ `
  query ListPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        image
        title
        introVideo
        weeks {
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
export const getGeneralStats = /* GraphQL */ `
  query GetGeneralStats($id: ID!) {
    getGeneralStats(id: $id) {
      id
      usersMeditating
      timesMeditating
      meditationEntryListenMinutes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGeneralStats = /* GraphQL */ `
  query ListGeneralStats(
    $filter: ModelGeneralStatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeneralStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usersMeditating
        timesMeditating
        meditationEntryListenMinutes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
