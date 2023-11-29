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
        currentProgram {
          id
          userID
          image
          title
          introVideo
          description
          programID
          createdAt
          updatedAt
          __typename
        }
        currentProgramID
        createdAt
        updatedAt
        userStatsUserId
        __typename
      }
      exerciseLogs {
        items {
          id
          userID
          exerciseInfoID
          entryLabels
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdPrograms {
        items {
          id
          authorID
          image
          title
          introVideo
          description
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdWorkouts {
        items {
          id
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          authorID
          notes
          createdAt
          updatedAt
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
          currentProgramID
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
          nextToken
          __typename
        }
        createdPrograms {
          nextToken
          __typename
        }
        createdWorkouts {
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
          currentProgramID
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
          nextToken
          __typename
        }
        createdPrograms {
          nextToken
          __typename
        }
        createdWorkouts {
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
      currentProgram {
        id
        user {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          points
          email
          currentProgramID
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        userID
        image
        title
        introVideo
        description
        programID
        program {
          id
          authorID
          image
          title
          introVideo
          description
          createdAt
          updatedAt
          __typename
        }
        userProgramWeeks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      currentProgramID
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
        currentProgram {
          id
          userID
          image
          title
          introVideo
          description
          programID
          createdAt
          updatedAt
          __typename
        }
        currentProgramID
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
        currentProgram {
          id
          userID
          image
          title
          introVideo
          description
          programID
          createdAt
          updatedAt
          __typename
        }
        currentProgramID
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
          currentProgramID
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
      setNumber
      exerciseLog {
        id
        user {
          id
          name
          email
          profilePicture
          taskCompletionList
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        userID
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
        entries {
          nextToken
          __typename
        }
        entryLabels
        createdAt
        updatedAt
        __typename
      }
      exerciseLogID
      userExercise {
        id
        exercise {
          id
          workoutID
          name
          sets
          RIR
          restMinutes
          exercise
          repRange
          exerciseNum
          exerciseInfoID
          notes
          createdAt
          updatedAt
          workoutBankExercisesId
          __typename
        }
        exerciseID
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
        userWorkout {
          id
          title
          status
          workoutID
          workoutNumber
          notes
          userProgramWeekID
          createdAt
          updatedAt
          __typename
        }
        userWorkoutID
        entries {
          nextToken
          __typename
        }
        exerciseNum
        repRange
        sets
        restMinutes
        RIR
        completed
        notes
        createdAt
        updatedAt
        __typename
      }
      userExerciseID
      createdAt
      updatedAt
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
        setNumber
        exerciseLog {
          id
          userID
          exerciseInfoID
          entryLabels
          createdAt
          updatedAt
          __typename
        }
        exerciseLogID
        userExercise {
          id
          exerciseID
          exerciseInfoID
          userWorkoutID
          exerciseNum
          repRange
          sets
          restMinutes
          RIR
          completed
          notes
          createdAt
          updatedAt
          __typename
        }
        userExerciseID
        createdAt
        updatedAt
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
          currentProgramID
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
          nextToken
          __typename
        }
        createdPrograms {
          nextToken
          __typename
        }
        createdWorkouts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userUserStatsId
        __typename
      }
      userID
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
      entries {
        items {
          id
          repsCompleted
          weight
          dateCompleted
          workout
          programWeek
          program
          setNumber
          exerciseLogID
          userExerciseID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      entryLabels
      createdAt
      updatedAt
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
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        userID
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
        entries {
          nextToken
          __typename
        }
        entryLabels
        createdAt
        updatedAt
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
        author {
          id
          name
          email
          profilePicture
          taskCompletionList
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        authorID
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
      exercise
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
          exerciseID
          exerciseInfoID
          userWorkoutID
          exerciseNum
          repRange
          sets
          restMinutes
          RIR
          completed
          notes
          createdAt
          updatedAt
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
          authorID
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
        exercise
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
          exercise
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
          authorID
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
        userProgramWeeks {
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
          exercise
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
          status
          workoutID
          workoutNumber
          notes
          userProgramWeekID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      author {
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
          currentProgramID
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
          nextToken
          __typename
        }
        createdPrograms {
          nextToken
          __typename
        }
        createdWorkouts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userUserStatsId
        __typename
      }
      authorID
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
        author {
          id
          name
          email
          profilePicture
          taskCompletionList
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        authorID
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
          exercise
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
        author {
          id
          name
          email
          profilePicture
          taskCompletionList
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        authorID
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
          authorID
          notes
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workoutLabels
      userProgramWeeks {
        items {
          id
          weekNumber
          programWeekID
          userProgramID
          createdAt
          updatedAt
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
          authorID
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
        userProgramWeeks {
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
      author {
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
          currentProgramID
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
          nextToken
          __typename
        }
        createdPrograms {
          nextToken
          __typename
        }
        createdWorkouts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userUserStatsId
        __typename
      }
      authorID
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
          userID
          image
          title
          introVideo
          description
          programID
          createdAt
          updatedAt
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
        author {
          id
          name
          email
          profilePicture
          taskCompletionList
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        authorID
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
      user {
        id
        user {
          id
          name
          email
          profilePicture
          taskCompletionList
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
        currentProgram {
          id
          userID
          image
          title
          introVideo
          description
          programID
          createdAt
          updatedAt
          __typename
        }
        currentProgramID
        createdAt
        updatedAt
        userStatsUserId
        __typename
      }
      userID
      image
      title
      introVideo
      description
      programID
      program {
        id
        author {
          id
          name
          email
          profilePicture
          taskCompletionList
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        authorID
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
      userProgramWeeks {
        items {
          id
          weekNumber
          programWeekID
          userProgramID
          createdAt
          updatedAt
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
export const listUserPrograms = /* GraphQL */ `
  query ListUserPrograms(
    $filter: ModelUserProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          points
          email
          currentProgramID
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        userID
        image
        title
        introVideo
        description
        programID
        program {
          id
          authorID
          image
          title
          introVideo
          description
          createdAt
          updatedAt
          __typename
        }
        userProgramWeeks {
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
          authorID
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
        userProgramWeeks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      programWeekID
      userProgram {
        id
        user {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          points
          email
          currentProgramID
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        userID
        image
        title
        introVideo
        description
        programID
        program {
          id
          authorID
          image
          title
          introVideo
          description
          createdAt
          updatedAt
          __typename
        }
        userProgramWeeks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userProgramID
      userWorkouts {
        id
        title
        status
        workout {
          id
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          authorID
          notes
          createdAt
          updatedAt
          __typename
        }
        workoutID
        workoutNumber
        notes
        userProgramWeek {
          id
          weekNumber
          programWeekID
          userProgramID
          createdAt
          updatedAt
          __typename
        }
        userProgramWeekID
        userExercises {
          nextToken
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
        programWeekID
        userProgram {
          id
          userID
          image
          title
          introVideo
          description
          programID
          createdAt
          updatedAt
          __typename
        }
        userProgramID
        userWorkouts {
          id
          title
          status
          workoutID
          workoutNumber
          notes
          userProgramWeekID
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
export const getUserProgWeek = /* GraphQL */ `
  query GetUserProgWeek($id: ID!) {
    getUserProgWeek(id: $id) {
      id
      weekNumber
      programWeek {
        id
        programID
        program {
          id
          authorID
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
        userProgramWeeks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      programWeekID
      userProgram {
        id
        user {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          points
          email
          currentProgramID
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        userID
        image
        title
        introVideo
        description
        programID
        program {
          id
          authorID
          image
          title
          introVideo
          description
          createdAt
          updatedAt
          __typename
        }
        userProgramWeeks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userProgramID
      userWorkouts {
        items {
          id
          title
          status
          workoutID
          workoutNumber
          notes
          userProgramWeekID
          createdAt
          updatedAt
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
export const listUserProgWeeks = /* GraphQL */ `
  query ListUserProgWeeks(
    $filter: ModelUserProgWeekFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProgWeeks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        programWeekID
        userProgram {
          id
          userID
          image
          title
          introVideo
          description
          programID
          createdAt
          updatedAt
          __typename
        }
        userProgramID
        userWorkouts {
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
export const getUserWorkout = /* GraphQL */ `
  query GetUserWorkout($id: ID!) {
    getUserWorkout(id: $id) {
      id
      title
      status
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
        author {
          id
          name
          email
          profilePicture
          taskCompletionList
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        authorID
        notes
        createdAt
        updatedAt
        __typename
      }
      workoutID
      workoutNumber
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
        programWeekID
        userProgram {
          id
          userID
          image
          title
          introVideo
          description
          programID
          createdAt
          updatedAt
          __typename
        }
        userProgramID
        userWorkouts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userProgramWeekID
      userExercises {
        items {
          id
          exerciseID
          exerciseInfoID
          userWorkoutID
          exerciseNum
          repRange
          sets
          restMinutes
          RIR
          completed
          notes
          createdAt
          updatedAt
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
        status
        workout {
          id
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          authorID
          notes
          createdAt
          updatedAt
          __typename
        }
        workoutID
        workoutNumber
        notes
        userProgramWeek {
          id
          weekNumber
          programWeekID
          userProgramID
          createdAt
          updatedAt
          __typename
        }
        userProgramWeekID
        userExercises {
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
          authorID
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
        exercise
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
      exerciseID
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
      userWorkout {
        id
        title
        status
        workout {
          id
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          authorID
          notes
          createdAt
          updatedAt
          __typename
        }
        workoutID
        workoutNumber
        notes
        userProgramWeek {
          id
          weekNumber
          programWeekID
          userProgramID
          createdAt
          updatedAt
          __typename
        }
        userProgramWeekID
        userExercises {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userWorkoutID
      entries {
        items {
          id
          repsCompleted
          weight
          dateCompleted
          workout
          programWeek
          program
          setNumber
          exerciseLogID
          userExerciseID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      exerciseNum
      repRange
      sets
      restMinutes
      RIR
      completed
      notes
      createdAt
      updatedAt
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
          exercise
          repRange
          exerciseNum
          exerciseInfoID
          notes
          createdAt
          updatedAt
          workoutBankExercisesId
          __typename
        }
        exerciseID
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
        userWorkout {
          id
          title
          status
          workoutID
          workoutNumber
          notes
          userProgramWeekID
          createdAt
          updatedAt
          __typename
        }
        userWorkoutID
        entries {
          nextToken
          __typename
        }
        exerciseNum
        repRange
        sets
        restMinutes
        RIR
        completed
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
export const exerciseEntriesByExerciseLogID = /* GraphQL */ `
  query ExerciseEntriesByExerciseLogID(
    $exerciseLogID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelExerciseEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    exerciseEntriesByExerciseLogID(
      exerciseLogID: $exerciseLogID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        repsCompleted
        weight
        dateCompleted
        workout
        programWeek
        program
        setNumber
        exerciseLog {
          id
          userID
          exerciseInfoID
          entryLabels
          createdAt
          updatedAt
          __typename
        }
        exerciseLogID
        userExercise {
          id
          exerciseID
          exerciseInfoID
          userWorkoutID
          exerciseNum
          repRange
          sets
          restMinutes
          RIR
          completed
          notes
          createdAt
          updatedAt
          __typename
        }
        userExerciseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const exerciseEntriesByUserExerciseID = /* GraphQL */ `
  query ExerciseEntriesByUserExerciseID(
    $userExerciseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelExerciseEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    exerciseEntriesByUserExerciseID(
      userExerciseID: $userExerciseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        repsCompleted
        weight
        dateCompleted
        workout
        programWeek
        program
        setNumber
        exerciseLog {
          id
          userID
          exerciseInfoID
          entryLabels
          createdAt
          updatedAt
          __typename
        }
        exerciseLogID
        userExercise {
          id
          exerciseID
          exerciseInfoID
          userWorkoutID
          exerciseNum
          repRange
          sets
          restMinutes
          RIR
          completed
          notes
          createdAt
          updatedAt
          __typename
        }
        userExerciseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const exerciseLogsByUserID = /* GraphQL */ `
  query ExerciseLogsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelExerciseLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    exerciseLogsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user {
          id
          name
          email
          profilePicture
          taskCompletionList
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        userID
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
        entries {
          nextToken
          __typename
        }
        entryLabels
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
          authorID
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
        exercise
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
          authorID
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
        exercise
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
        author {
          id
          name
          email
          profilePicture
          taskCompletionList
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        authorID
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
export const workoutsByAuthorID = /* GraphQL */ `
  query WorkoutsByAuthorID(
    $authorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    workoutsByAuthorID(
      authorID: $authorID
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
        author {
          id
          name
          email
          profilePicture
          taskCompletionList
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        authorID
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
          authorID
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
        userProgramWeeks {
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
export const programsByAuthorID = /* GraphQL */ `
  query ProgramsByAuthorID(
    $authorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    programsByAuthorID(
      authorID: $authorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author {
          id
          name
          email
          profilePicture
          taskCompletionList
          createdAt
          updatedAt
          userUserStatsId
          __typename
        }
        authorID
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
export const userProgramsByProgramID = /* GraphQL */ `
  query UserProgramsByProgramID(
    $programID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProgramsByProgramID(
      programID: $programID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user {
          id
          mindfulMinutes
          meditationStreak
          workoutsCompleted
          points
          email
          currentProgramID
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        userID
        image
        title
        introVideo
        description
        programID
        program {
          id
          authorID
          image
          title
          introVideo
          description
          createdAt
          updatedAt
          __typename
        }
        userProgramWeeks {
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
export const userProgWeeksByProgramWeekID = /* GraphQL */ `
  query UserProgWeeksByProgramWeekID(
    $programWeekID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProgWeekFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProgWeeksByProgramWeekID(
      programWeekID: $programWeekID
      sortDirection: $sortDirection
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
        programWeekID
        userProgram {
          id
          userID
          image
          title
          introVideo
          description
          programID
          createdAt
          updatedAt
          __typename
        }
        userProgramID
        userWorkouts {
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
export const userProgWeeksByUserProgramID = /* GraphQL */ `
  query UserProgWeeksByUserProgramID(
    $userProgramID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProgWeekFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProgWeeksByUserProgramID(
      userProgramID: $userProgramID
      sortDirection: $sortDirection
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
        programWeekID
        userProgram {
          id
          userID
          image
          title
          introVideo
          description
          programID
          createdAt
          updatedAt
          __typename
        }
        userProgramID
        userWorkouts {
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
export const userWorkoutsByWorkoutID = /* GraphQL */ `
  query UserWorkoutsByWorkoutID(
    $workoutID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userWorkoutsByWorkoutID(
      workoutID: $workoutID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        status
        workout {
          id
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          authorID
          notes
          createdAt
          updatedAt
          __typename
        }
        workoutID
        workoutNumber
        notes
        userProgramWeek {
          id
          weekNumber
          programWeekID
          userProgramID
          createdAt
          updatedAt
          __typename
        }
        userProgramWeekID
        userExercises {
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
export const userWorkoutsByUserProgramWeekID = /* GraphQL */ `
  query UserWorkoutsByUserProgramWeekID(
    $userProgramWeekID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userWorkoutsByUserProgramWeekID(
      userProgramWeekID: $userProgramWeekID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        status
        workout {
          id
          programWeekWorkoutsId
          workoutNumber
          title
          status
          exerciseLabels
          authorID
          notes
          createdAt
          updatedAt
          __typename
        }
        workoutID
        workoutNumber
        notes
        userProgramWeek {
          id
          weekNumber
          programWeekID
          userProgramID
          createdAt
          updatedAt
          __typename
        }
        userProgramWeekID
        userExercises {
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
export const userExercisesByExerciseID = /* GraphQL */ `
  query UserExercisesByExerciseID(
    $exerciseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userExercisesByExerciseID(
      exerciseID: $exerciseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exercise {
          id
          workoutID
          name
          sets
          RIR
          restMinutes
          exercise
          repRange
          exerciseNum
          exerciseInfoID
          notes
          createdAt
          updatedAt
          workoutBankExercisesId
          __typename
        }
        exerciseID
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
        userWorkout {
          id
          title
          status
          workoutID
          workoutNumber
          notes
          userProgramWeekID
          createdAt
          updatedAt
          __typename
        }
        userWorkoutID
        entries {
          nextToken
          __typename
        }
        exerciseNum
        repRange
        sets
        restMinutes
        RIR
        completed
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
export const userExercisesByUserWorkoutID = /* GraphQL */ `
  query UserExercisesByUserWorkoutID(
    $userWorkoutID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userExercisesByUserWorkoutID(
      userWorkoutID: $userWorkoutID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exercise {
          id
          workoutID
          name
          sets
          RIR
          restMinutes
          exercise
          repRange
          exerciseNum
          exerciseInfoID
          notes
          createdAt
          updatedAt
          workoutBankExercisesId
          __typename
        }
        exerciseID
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
        userWorkout {
          id
          title
          status
          workoutID
          workoutNumber
          notes
          userProgramWeekID
          createdAt
          updatedAt
          __typename
        }
        userWorkoutID
        entries {
          nextToken
          __typename
        }
        exerciseNum
        repRange
        sets
        restMinutes
        RIR
        completed
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
