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
export const updateMeditationSection = /* GraphQL */ `
  mutation UpdateMeditationSection(
    $input: UpdateMeditationSectionInput!
    $condition: ModelMeditationSectionConditionInput
  ) {
    updateMeditationSection(input: $input, condition: $condition) {
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
export const deleteMeditationSection = /* GraphQL */ `
  mutation DeleteMeditationSection(
    $input: DeleteMeditationSectionInput!
    $condition: ModelMeditationSectionConditionInput
  ) {
    deleteMeditationSection(input: $input, condition: $condition) {
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
export const createMeditationEntry = /* GraphQL */ `
  mutation CreateMeditationEntry(
    $input: CreateMeditationEntryInput!
    $condition: ModelMeditationEntryConditionInput
  ) {
    createMeditationEntry(input: $input, condition: $condition) {
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
export const updateMeditationEntry = /* GraphQL */ `
  mutation UpdateMeditationEntry(
    $input: UpdateMeditationEntryInput!
    $condition: ModelMeditationEntryConditionInput
  ) {
    updateMeditationEntry(input: $input, condition: $condition) {
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
export const deleteMeditationEntry = /* GraphQL */ `
  mutation DeleteMeditationEntry(
    $input: DeleteMeditationEntryInput!
    $condition: ModelMeditationEntryConditionInput
  ) {
    deleteMeditationEntry(input: $input, condition: $condition) {
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
      userDailyTasksId
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
      userDailyTasksId
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
      userDailyTasksId
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
export const createUserStats = /* GraphQL */ `
  mutation CreateUserStats(
    $input: CreateUserStatsInput!
    $condition: ModelUserStatsConditionInput
  ) {
    createUserStats(input: $input, condition: $condition) {
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
export const updateUserStats = /* GraphQL */ `
  mutation UpdateUserStats(
    $input: UpdateUserStatsInput!
    $condition: ModelUserStatsConditionInput
  ) {
    updateUserStats(input: $input, condition: $condition) {
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
export const deleteUserStats = /* GraphQL */ `
  mutation DeleteUserStats(
    $input: DeleteUserStatsInput!
    $condition: ModelUserStatsConditionInput
  ) {
    deleteUserStats(input: $input, condition: $condition) {
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
export const createExerciseEntry = /* GraphQL */ `
  mutation CreateExerciseEntry(
    $input: CreateExerciseEntryInput!
    $condition: ModelExerciseEntryConditionInput
  ) {
    createExerciseEntry(input: $input, condition: $condition) {
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
export const updateExerciseEntry = /* GraphQL */ `
  mutation UpdateExerciseEntry(
    $input: UpdateExerciseEntryInput!
    $condition: ModelExerciseEntryConditionInput
  ) {
    updateExerciseEntry(input: $input, condition: $condition) {
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
export const deleteExerciseEntry = /* GraphQL */ `
  mutation DeleteExerciseEntry(
    $input: DeleteExerciseEntryInput!
    $condition: ModelExerciseEntryConditionInput
  ) {
    deleteExerciseEntry(input: $input, condition: $condition) {
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
export const createExerciseLog = /* GraphQL */ `
  mutation CreateExerciseLog(
    $input: CreateExerciseLogInput!
    $condition: ModelExerciseLogConditionInput
  ) {
    createExerciseLog(input: $input, condition: $condition) {
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
export const updateExerciseLog = /* GraphQL */ `
  mutation UpdateExerciseLog(
    $input: UpdateExerciseLogInput!
    $condition: ModelExerciseLogConditionInput
  ) {
    updateExerciseLog(input: $input, condition: $condition) {
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
export const deleteExerciseLog = /* GraphQL */ `
  mutation DeleteExerciseLog(
    $input: DeleteExerciseLogInput!
    $condition: ModelExerciseLogConditionInput
  ) {
    deleteExerciseLog(input: $input, condition: $condition) {
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
export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
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
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
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
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
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
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
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
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
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
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
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
export const createProgramWeek = /* GraphQL */ `
  mutation CreateProgramWeek(
    $input: CreateProgramWeekInput!
    $condition: ModelProgramWeekConditionInput
  ) {
    createProgramWeek(input: $input, condition: $condition) {
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
export const updateProgramWeek = /* GraphQL */ `
  mutation UpdateProgramWeek(
    $input: UpdateProgramWeekInput!
    $condition: ModelProgramWeekConditionInput
  ) {
    updateProgramWeek(input: $input, condition: $condition) {
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
export const deleteProgramWeek = /* GraphQL */ `
  mutation DeleteProgramWeek(
    $input: DeleteProgramWeekInput!
    $condition: ModelProgramWeekConditionInput
  ) {
    deleteProgramWeek(input: $input, condition: $condition) {
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
export const createProgram = /* GraphQL */ `
  mutation CreateProgram(
    $input: CreateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    createProgram(input: $input, condition: $condition) {
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
export const updateProgram = /* GraphQL */ `
  mutation UpdateProgram(
    $input: UpdateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    updateProgram(input: $input, condition: $condition) {
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
export const deleteProgram = /* GraphQL */ `
  mutation DeleteProgram(
    $input: DeleteProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    deleteProgram(input: $input, condition: $condition) {
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
export const createGeneralStats = /* GraphQL */ `
  mutation CreateGeneralStats(
    $input: CreateGeneralStatsInput!
    $condition: ModelGeneralStatsConditionInput
  ) {
    createGeneralStats(input: $input, condition: $condition) {
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
export const updateGeneralStats = /* GraphQL */ `
  mutation UpdateGeneralStats(
    $input: UpdateGeneralStatsInput!
    $condition: ModelGeneralStatsConditionInput
  ) {
    updateGeneralStats(input: $input, condition: $condition) {
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
export const deleteGeneralStats = /* GraphQL */ `
  mutation DeleteGeneralStats(
    $input: DeleteGeneralStatsInput!
    $condition: ModelGeneralStatsConditionInput
  ) {
    deleteGeneralStats(input: $input, condition: $condition) {
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
