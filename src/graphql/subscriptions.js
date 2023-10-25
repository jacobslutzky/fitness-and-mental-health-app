/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
  }
`;
export const onCreateMeditationEntry = /* GraphQL */ `
  subscription OnCreateMeditationEntry(
    $filter: ModelSubscriptionMeditationEntryFilterInput
  ) {
    onCreateMeditationEntry(filter: $filter) {
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
  }
`;
export const onUpdateMeditationEntry = /* GraphQL */ `
  subscription OnUpdateMeditationEntry(
    $filter: ModelSubscriptionMeditationEntryFilterInput
  ) {
    onUpdateMeditationEntry(filter: $filter) {
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
  }
`;
export const onDeleteMeditationEntry = /* GraphQL */ `
  subscription OnDeleteMeditationEntry(
    $filter: ModelSubscriptionMeditationEntryFilterInput
  ) {
    onDeleteMeditationEntry(filter: $filter) {
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
      userDailyTasksId
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
      userDailyTasksId
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
      userDailyTasksId
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
  }
`;
export const onCreateUserStats = /* GraphQL */ `
  subscription OnCreateUserStats(
    $filter: ModelSubscriptionUserStatsFilterInput
  ) {
    onCreateUserStats(filter: $filter) {
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
  }
`;
export const onUpdateUserStats = /* GraphQL */ `
  subscription OnUpdateUserStats(
    $filter: ModelSubscriptionUserStatsFilterInput
  ) {
    onUpdateUserStats(filter: $filter) {
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
  }
`;
export const onDeleteUserStats = /* GraphQL */ `
  subscription OnDeleteUserStats(
    $filter: ModelSubscriptionUserStatsFilterInput
  ) {
    onDeleteUserStats(filter: $filter) {
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
  }
`;
export const onCreateExerciseEntry = /* GraphQL */ `
  subscription OnCreateExerciseEntry(
    $filter: ModelSubscriptionExerciseEntryFilterInput
  ) {
    onCreateExerciseEntry(filter: $filter) {
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
export const onUpdateExerciseEntry = /* GraphQL */ `
  subscription OnUpdateExerciseEntry(
    $filter: ModelSubscriptionExerciseEntryFilterInput
  ) {
    onUpdateExerciseEntry(filter: $filter) {
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
export const onDeleteExerciseEntry = /* GraphQL */ `
  subscription OnDeleteExerciseEntry(
    $filter: ModelSubscriptionExerciseEntryFilterInput
  ) {
    onDeleteExerciseEntry(filter: $filter) {
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
export const onCreateExerciseLog = /* GraphQL */ `
  subscription OnCreateExerciseLog(
    $filter: ModelSubscriptionExerciseLogFilterInput
  ) {
    onCreateExerciseLog(filter: $filter) {
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
  }
`;
export const onUpdateExerciseLog = /* GraphQL */ `
  subscription OnUpdateExerciseLog(
    $filter: ModelSubscriptionExerciseLogFilterInput
  ) {
    onUpdateExerciseLog(filter: $filter) {
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
  }
`;
export const onDeleteExerciseLog = /* GraphQL */ `
  subscription OnDeleteExerciseLog(
    $filter: ModelSubscriptionExerciseLogFilterInput
  ) {
    onDeleteExerciseLog(filter: $filter) {
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
  }
`;
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
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
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
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
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
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
  }
`;
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onCreateWorkout(filter: $filter) {
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
  }
`;
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onUpdateWorkout(filter: $filter) {
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
  }
`;
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onDeleteWorkout(filter: $filter) {
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
  }
`;
export const onCreateProgramWeek = /* GraphQL */ `
  subscription OnCreateProgramWeek(
    $filter: ModelSubscriptionProgramWeekFilterInput
  ) {
    onCreateProgramWeek(filter: $filter) {
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
  }
`;
export const onUpdateProgramWeek = /* GraphQL */ `
  subscription OnUpdateProgramWeek(
    $filter: ModelSubscriptionProgramWeekFilterInput
  ) {
    onUpdateProgramWeek(filter: $filter) {
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
  }
`;
export const onDeleteProgramWeek = /* GraphQL */ `
  subscription OnDeleteProgramWeek(
    $filter: ModelSubscriptionProgramWeekFilterInput
  ) {
    onDeleteProgramWeek(filter: $filter) {
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
  }
`;
export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onCreateProgram(filter: $filter) {
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
  }
`;
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onUpdateProgram(filter: $filter) {
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
  }
`;
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram($filter: ModelSubscriptionProgramFilterInput) {
    onDeleteProgram(filter: $filter) {
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
  }
`;
export const onCreateGeneralStats = /* GraphQL */ `
  subscription OnCreateGeneralStats(
    $filter: ModelSubscriptionGeneralStatsFilterInput
  ) {
    onCreateGeneralStats(filter: $filter) {
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
export const onUpdateGeneralStats = /* GraphQL */ `
  subscription OnUpdateGeneralStats(
    $filter: ModelSubscriptionGeneralStatsFilterInput
  ) {
    onUpdateGeneralStats(filter: $filter) {
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
export const onDeleteGeneralStats = /* GraphQL */ `
  subscription OnDeleteGeneralStats(
    $filter: ModelSubscriptionGeneralStatsFilterInput
  ) {
    onDeleteGeneralStats(filter: $filter) {
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
