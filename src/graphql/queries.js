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
      name
      email
      profilePicture
      taskCompletionList
      userStats {
        id
        user {
          id
          name
          email
          profilePicture
          taskCompletionList
          currentProgram
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        mindfulMinutes
        meditationStreak
        workoutsCompleted
        points
        email
        achievementProgresses {
          nextToken
          __typename
        }
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
          userExerciseExerciseLogsId
          __typename
        }
        nextToken
        __typename
      }
      currentProgram
      userPrograms {
        items {
          id
          author
          image
          title
          introVideo
          description
          createdAt
          updatedAt
          userUserProgramsId
          programUserProgramsId
          __typename
        }
        nextToken
        __typename
      }
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
        name
        email
        profilePicture
        taskCompletionList
        userStats {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          points
          email
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
        userPrograms {
          nextToken
          __typename
        }
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
        name
        email
        profilePicture
        taskCompletionList
        userStats {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          points
          email
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
        userPrograms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userUserStatsId
        __typename
      }
      mindfulMinutes
      meditationStreak
      workoutsCompleted
      points
      email
      achievementProgresses {
        items {
          id
          title
          progress
          createdAt
          updatedAt
          userStatsAchievementProgressesId
          __typename
        }
        nextToken
        __typename
      }
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
          name
          email
          profilePicture
          taskCompletionList
          currentProgram
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        mindfulMinutes
        meditationStreak
        workoutsCompleted
        points
        email
        achievementProgresses {
          nextToken
          __typename
        }
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
export const getAchievementProgress = /* GraphQL */ `
  query GetAchievementProgress($id: ID!) {
    getAchievementProgress(id: $id) {
      id
      userStats {
        id
        user {
          id
          name
          email
          profilePicture
          taskCompletionList
          currentProgram
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        mindfulMinutes
        meditationStreak
        workoutsCompleted
        points
        email
        achievementProgresses {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userStatsUserId
        __typename
      }
      title
      progress
      createdAt
      updatedAt
      userStatsAchievementProgressesId
      __typename
    }
  }
`;
export const listAchievementProgresses = /* GraphQL */ `
  query ListAchievementProgresses(
    $filter: ModelAchievementProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAchievementProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userStats {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          points
          email
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        title
        progress
        createdAt
        updatedAt
        userStatsAchievementProgressesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAchievement = /* GraphQL */ `
  query GetAchievement($id: ID!) {
    getAchievement(id: $id) {
      id
      title
      description
      goal
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAchievements = /* GraphQL */ `
  query ListAchievements(
    $filter: ModelAchievementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAchievements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        goal
        createdAt
        updatedAt
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
        name
        email
        profilePicture
        taskCompletionList
        userStats {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          points
          email
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
        userPrograms {
          nextToken
          __typename
        }
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
      userExerciseExerciseLogsId
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
          name
          email
          profilePicture
          taskCompletionList
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
        userExerciseExerciseLogsId
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
          programID
          weekNumber
          workoutLabels
          createdAt
          updatedAt
          __typename
        }
        programWeekWorkoutsId
        workoutNumber
        title
        status
        exercises {
          nextToken
          __typename
        }
        exerciseLabels
        userWorkouts {
          nextToken
          __typename
        }
        notes
        createdAt
        updatedAt
        __typename
      }
      workoutID
      name
      sets
      RIR
      restMinutes
      repRange
      exerciseNum
      exerciseInfo {
        id
        name
        muscleWorked
        workoutType
        exercises {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      exerciseInfoID
      UserExercises {
        items {
          id
          reps
          sets
          restMinutes
          RIR
          completed
          createdAt
          updatedAt
          exerciseUserExercisesId
          userWorkoutUserExercisesId
          __typename
        }
        nextToken
        __typename
      }
      notes
      createdAt
      updatedAt
      workoutBankExercisesId
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
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          notes
          createdAt
          updatedAt
          __typename
        }
        workoutID
        name
        sets
        RIR
        restMinutes
        repRange
        exerciseNum
        exerciseInfo {
          id
          name
          muscleWorked
          workoutType
          createdAt
          updatedAt
          __typename
        }
        exerciseInfoID
        UserExercises {
          nextToken
          __typename
        }
        notes
        createdAt
        updatedAt
        workoutBankExercisesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExerciseInfo = /* GraphQL */ `
  query GetExerciseInfo($id: ID!) {
    getExerciseInfo(id: $id) {
      id
      name
      muscleWorked
      workoutType
      exercises {
        items {
          id
          workoutID
          name
          sets
          RIR
          restMinutes
          repRange
          exerciseNum
          exerciseInfoID
          notes
          createdAt
          updatedAt
          workoutBankExercisesId
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
export const listExerciseInfos = /* GraphQL */ `
  query ListExerciseInfos(
    $filter: ModelExerciseInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExerciseInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        muscleWorked
        workoutType
        exercises {
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
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
      id
      programWeek {
        id
        programID
        program {
          id
          author
          image
          title
          introVideo
          description
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
        UserProgramWeeks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      programWeekWorkoutsId
      workoutNumber
      title
      status
      exercises {
        items {
          id
          workoutID
          name
          sets
          RIR
          restMinutes
          repRange
          exerciseNum
          exerciseInfoID
          notes
          createdAt
          updatedAt
          workoutBankExercisesId
          __typename
        }
        nextToken
        __typename
      }
      exerciseLabels
      userWorkouts {
        items {
          id
          title
          notes
          createdAt
          updatedAt
          workoutUserWorkoutsId
          userProgramWeeksUserWorkoutsId
          __typename
        }
        nextToken
        __typename
      }
      notes
      createdAt
      updatedAt
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
          programID
          weekNumber
          workoutLabels
          createdAt
          updatedAt
          __typename
        }
        programWeekWorkoutsId
        workoutNumber
        title
        status
        exercises {
          nextToken
          __typename
        }
        exerciseLabels
        userWorkouts {
          nextToken
          __typename
        }
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWorkoutBank = /* GraphQL */ `
  query GetWorkoutBank($id: ID!) {
    getWorkoutBank(id: $id) {
      id
      title
      notes
      exercises {
        items {
          id
          workoutID
          name
          sets
          RIR
          restMinutes
          repRange
          exerciseNum
          exerciseInfoID
          notes
          createdAt
          updatedAt
          workoutBankExercisesId
          __typename
        }
        nextToken
        __typename
      }
      exerciseLabels
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listWorkoutBanks = /* GraphQL */ `
  query ListWorkoutBanks(
    $filter: ModelWorkoutBankFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutBanks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        notes
        exercises {
          nextToken
          __typename
        }
        exerciseLabels
        createdAt
        updatedAt
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
      programID
      program {
        id
        author
        image
        title
        introVideo
        description
        weeks {
          nextToken
          __typename
        }
        userPrograms {
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
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          notes
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workoutLabels
      UserProgramWeeks {
        items {
          id
          weekNumber
          createdAt
          updatedAt
          programWeekUserProgramWeeksId
          userProgramUserProgramWeeksId
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
export const listProgramWeeks = /* GraphQL */ `
  query ListProgramWeeks(
    $filter: ModelProgramWeekFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgramWeeks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        programID
        program {
          id
          author
          image
          title
          introVideo
          description
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
        UserProgramWeeks {
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
export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
    getProgram(id: $id) {
      id
      author
      image
      title
      introVideo
      description
      weeks {
        items {
          id
          programID
          weekNumber
          workoutLabels
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      userPrograms {
        items {
          id
          author
          image
          title
          introVideo
          description
          createdAt
          updatedAt
          userUserProgramsId
          programUserProgramsId
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
        description
        weeks {
          nextToken
          __typename
        }
        userPrograms {
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
export const getUserProgram = /* GraphQL */ `
  query GetUserProgram($id: ID!) {
    getUserProgram(id: $id) {
      id
      author
      image
      title
      introVideo
      description
      program {
        id
        author
        image
        title
        introVideo
        description
        weeks {
          nextToken
          __typename
        }
        userPrograms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        name
        email
        profilePicture
        taskCompletionList
        userStats {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          points
          email
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
        userPrograms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userUserStatsId
        __typename
      }
      UserProgramWeeks {
        items {
          id
          weekNumber
          createdAt
          updatedAt
          programWeekUserProgramWeeksId
          userProgramUserProgramWeeksId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userUserProgramsId
      programUserProgramsId
      __typename
    }
  }
`;
export const listUserPrograms = /* GraphQL */ `
  query ListUserPrograms(
    $filter: ModelUserProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        image
        title
        introVideo
        description
        program {
          id
          author
          image
          title
          introVideo
          description
          createdAt
          updatedAt
          __typename
        }
        user {
          id
          name
          email
          profilePicture
          taskCompletionList
          currentProgram
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        UserProgramWeeks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userUserProgramsId
        programUserProgramsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserProgramWeeks = /* GraphQL */ `
  query GetUserProgramWeeks($id: ID!) {
    getUserProgramWeeks(id: $id) {
      id
      weekNumber
      programWeek {
        id
        programID
        program {
          id
          author
          image
          title
          introVideo
          description
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
        UserProgramWeeks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userProgram {
        id
        author
        image
        title
        introVideo
        description
        program {
          id
          author
          image
          title
          introVideo
          description
          createdAt
          updatedAt
          __typename
        }
        user {
          id
          name
          email
          profilePicture
          taskCompletionList
          currentProgram
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        UserProgramWeeks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userUserProgramsId
        programUserProgramsId
        __typename
      }
      userWorkouts {
        items {
          id
          title
          notes
          createdAt
          updatedAt
          workoutUserWorkoutsId
          userProgramWeeksUserWorkoutsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      programWeekUserProgramWeeksId
      userProgramUserProgramWeeksId
      __typename
    }
  }
`;
export const listUserProgramWeeks = /* GraphQL */ `
  query ListUserProgramWeeks(
    $filter: ModelUserProgramWeeksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProgramWeeks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        weekNumber
        programWeek {
          id
          programID
          weekNumber
          workoutLabels
          createdAt
          updatedAt
          __typename
        }
        userProgram {
          id
          author
          image
          title
          introVideo
          description
          createdAt
          updatedAt
          userUserProgramsId
          programUserProgramsId
          __typename
        }
        userWorkouts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        programWeekUserProgramWeeksId
        userProgramUserProgramWeeksId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserWorkout = /* GraphQL */ `
  query GetUserWorkout($id: ID!) {
    getUserWorkout(id: $id) {
      id
      title
      workout {
        id
        programWeek {
          id
          programID
          weekNumber
          workoutLabels
          createdAt
          updatedAt
          __typename
        }
        programWeekWorkoutsId
        workoutNumber
        title
        status
        exercises {
          nextToken
          __typename
        }
        exerciseLabels
        userWorkouts {
          nextToken
          __typename
        }
        notes
        createdAt
        updatedAt
        __typename
      }
      notes
      userProgramWeek {
        id
        weekNumber
        programWeek {
          id
          programID
          weekNumber
          workoutLabels
          createdAt
          updatedAt
          __typename
        }
        userProgram {
          id
          author
          image
          title
          introVideo
          description
          createdAt
          updatedAt
          userUserProgramsId
          programUserProgramsId
          __typename
        }
        userWorkouts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        programWeekUserProgramWeeksId
        userProgramUserProgramWeeksId
        __typename
      }
      userExercises {
        items {
          id
          reps
          sets
          restMinutes
          RIR
          completed
          createdAt
          updatedAt
          exerciseUserExercisesId
          userWorkoutUserExercisesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      workoutUserWorkoutsId
      userProgramWeeksUserWorkoutsId
      __typename
    }
  }
`;
export const listUserWorkouts = /* GraphQL */ `
  query ListUserWorkouts(
    $filter: ModelUserWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        workout {
          id
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          notes
          createdAt
          updatedAt
          __typename
        }
        notes
        userProgramWeek {
          id
          weekNumber
          createdAt
          updatedAt
          programWeekUserProgramWeeksId
          userProgramUserProgramWeeksId
          __typename
        }
        userExercises {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        workoutUserWorkoutsId
        userProgramWeeksUserWorkoutsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserExercise = /* GraphQL */ `
  query GetUserExercise($id: ID!) {
    getUserExercise(id: $id) {
      id
      exercise {
        id
        workout {
          id
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          notes
          createdAt
          updatedAt
          __typename
        }
        workoutID
        name
        sets
        RIR
        restMinutes
        repRange
        exerciseNum
        exerciseInfo {
          id
          name
          muscleWorked
          workoutType
          createdAt
          updatedAt
          __typename
        }
        exerciseInfoID
        UserExercises {
          nextToken
          __typename
        }
        notes
        createdAt
        updatedAt
        workoutBankExercisesId
        __typename
      }
      userWorkout {
        id
        title
        workout {
          id
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          notes
          createdAt
          updatedAt
          __typename
        }
        notes
        userProgramWeek {
          id
          weekNumber
          createdAt
          updatedAt
          programWeekUserProgramWeeksId
          userProgramUserProgramWeeksId
          __typename
        }
        userExercises {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        workoutUserWorkoutsId
        userProgramWeeksUserWorkoutsId
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
          userExerciseExerciseLogsId
          __typename
        }
        nextToken
        __typename
      }
      reps
      sets
      restMinutes
      RIR
      completed
      createdAt
      updatedAt
      exerciseUserExercisesId
      userWorkoutUserExercisesId
      __typename
    }
  }
`;
export const listUserExercises = /* GraphQL */ `
  query ListUserExercises(
    $filter: ModelUserExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        exercise {
          id
          workoutID
          name
          sets
          RIR
          restMinutes
          repRange
          exerciseNum
          exerciseInfoID
          notes
          createdAt
          updatedAt
          workoutBankExercisesId
          __typename
        }
        userWorkout {
          id
          title
          notes
          createdAt
          updatedAt
          workoutUserWorkoutsId
          userProgramWeeksUserWorkoutsId
          __typename
        }
        exerciseLogs {
          nextToken
          __typename
        }
        reps
        sets
        restMinutes
        RIR
        completed
        createdAt
        updatedAt
        exerciseUserExercisesId
        userWorkoutUserExercisesId
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
export const exercisesByWorkoutID = /* GraphQL */ `
  query ExercisesByWorkoutID(
    $workoutID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    exercisesByWorkoutID(
      workoutID: $workoutID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        workout {
          id
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          notes
          createdAt
          updatedAt
          __typename
        }
        workoutID
        name
        sets
        RIR
        restMinutes
        repRange
        exerciseNum
        exerciseInfo {
          id
          name
          muscleWorked
          workoutType
          createdAt
          updatedAt
          __typename
        }
        exerciseInfoID
        UserExercises {
          nextToken
          __typename
        }
        notes
        createdAt
        updatedAt
        workoutBankExercisesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const exercisesByExerciseInfoID = /* GraphQL */ `
  query ExercisesByExerciseInfoID(
    $exerciseInfoID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    exercisesByExerciseInfoID(
      exerciseInfoID: $exerciseInfoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        workout {
          id
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          notes
          createdAt
          updatedAt
          __typename
        }
        workoutID
        name
        sets
        RIR
        restMinutes
        repRange
        exerciseNum
        exerciseInfo {
          id
          name
          muscleWorked
          workoutType
          createdAt
          updatedAt
          __typename
        }
        exerciseInfoID
        UserExercises {
          nextToken
          __typename
        }
        notes
        createdAt
        updatedAt
        workoutBankExercisesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const workoutsByProgramWeekWorkoutsId = /* GraphQL */ `
  query WorkoutsByProgramWeekWorkoutsId(
    $programWeekWorkoutsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    workoutsByProgramWeekWorkoutsId(
      programWeekWorkoutsId: $programWeekWorkoutsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        programWeek {
          id
          programID
          weekNumber
          workoutLabels
          createdAt
          updatedAt
          __typename
        }
        programWeekWorkoutsId
        workoutNumber
        title
        status
        exercises {
          nextToken
          __typename
        }
        exerciseLabels
        userWorkouts {
          nextToken
          __typename
        }
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const programWeeksByProgramID = /* GraphQL */ `
  query ProgramWeeksByProgramID(
    $programID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProgramWeekFilterInput
    $limit: Int
    $nextToken: String
  ) {
    programWeeksByProgramID(
      programID: $programID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        programID
        program {
          id
          author
          image
          title
          introVideo
          description
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
        UserProgramWeeks {
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
