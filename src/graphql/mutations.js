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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserStats = /* GraphQL */ `
  mutation CreateUserStats(
    $input: CreateUserStatsInput!
    $condition: ModelUserStatsConditionInput
  ) {
    createUserStats(input: $input, condition: $condition) {
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
export const updateUserStats = /* GraphQL */ `
  mutation UpdateUserStats(
    $input: UpdateUserStatsInput!
    $condition: ModelUserStatsConditionInput
  ) {
    updateUserStats(input: $input, condition: $condition) {
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
export const deleteUserStats = /* GraphQL */ `
  mutation DeleteUserStats(
    $input: DeleteUserStatsInput!
    $condition: ModelUserStatsConditionInput
  ) {
    deleteUserStats(input: $input, condition: $condition) {
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
export const createAchievementProgress = /* GraphQL */ `
  mutation CreateAchievementProgress(
    $input: CreateAchievementProgressInput!
    $condition: ModelAchievementProgressConditionInput
  ) {
    createAchievementProgress(input: $input, condition: $condition) {
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
export const updateAchievementProgress = /* GraphQL */ `
  mutation UpdateAchievementProgress(
    $input: UpdateAchievementProgressInput!
    $condition: ModelAchievementProgressConditionInput
  ) {
    updateAchievementProgress(input: $input, condition: $condition) {
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
export const deleteAchievementProgress = /* GraphQL */ `
  mutation DeleteAchievementProgress(
    $input: DeleteAchievementProgressInput!
    $condition: ModelAchievementProgressConditionInput
  ) {
    deleteAchievementProgress(input: $input, condition: $condition) {
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
export const createAchievement = /* GraphQL */ `
  mutation CreateAchievement(
    $input: CreateAchievementInput!
    $condition: ModelAchievementConditionInput
  ) {
    createAchievement(input: $input, condition: $condition) {
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
export const updateAchievement = /* GraphQL */ `
  mutation UpdateAchievement(
    $input: UpdateAchievementInput!
    $condition: ModelAchievementConditionInput
  ) {
    updateAchievement(input: $input, condition: $condition) {
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
export const deleteAchievement = /* GraphQL */ `
  mutation DeleteAchievement(
    $input: DeleteAchievementInput!
    $condition: ModelAchievementConditionInput
  ) {
    deleteAchievement(input: $input, condition: $condition) {
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
export const createExerciseLog = /* GraphQL */ `
  mutation CreateExerciseLog(
    $input: CreateExerciseLogInput!
    $condition: ModelExerciseLogConditionInput
  ) {
    createExerciseLog(input: $input, condition: $condition) {
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
export const updateExerciseLog = /* GraphQL */ `
  mutation UpdateExerciseLog(
    $input: UpdateExerciseLogInput!
    $condition: ModelExerciseLogConditionInput
  ) {
    updateExerciseLog(input: $input, condition: $condition) {
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
export const deleteExerciseLog = /* GraphQL */ `
  mutation DeleteExerciseLog(
    $input: DeleteExerciseLogInput!
    $condition: ModelExerciseLogConditionInput
  ) {
    deleteExerciseLog(input: $input, condition: $condition) {
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
export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
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
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
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
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
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
export const createExerciseInfo = /* GraphQL */ `
  mutation CreateExerciseInfo(
    $input: CreateExerciseInfoInput!
    $condition: ModelExerciseInfoConditionInput
  ) {
    createExerciseInfo(input: $input, condition: $condition) {
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
export const updateExerciseInfo = /* GraphQL */ `
  mutation UpdateExerciseInfo(
    $input: UpdateExerciseInfoInput!
    $condition: ModelExerciseInfoConditionInput
  ) {
    updateExerciseInfo(input: $input, condition: $condition) {
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
export const deleteExerciseInfo = /* GraphQL */ `
  mutation DeleteExerciseInfo(
    $input: DeleteExerciseInfoInput!
    $condition: ModelExerciseInfoConditionInput
  ) {
    deleteExerciseInfo(input: $input, condition: $condition) {
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
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
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
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
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
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
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
export const createWorkoutBank = /* GraphQL */ `
  mutation CreateWorkoutBank(
    $input: CreateWorkoutBankInput!
    $condition: ModelWorkoutBankConditionInput
  ) {
    createWorkoutBank(input: $input, condition: $condition) {
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
export const updateWorkoutBank = /* GraphQL */ `
  mutation UpdateWorkoutBank(
    $input: UpdateWorkoutBankInput!
    $condition: ModelWorkoutBankConditionInput
  ) {
    updateWorkoutBank(input: $input, condition: $condition) {
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
export const deleteWorkoutBank = /* GraphQL */ `
  mutation DeleteWorkoutBank(
    $input: DeleteWorkoutBankInput!
    $condition: ModelWorkoutBankConditionInput
  ) {
    deleteWorkoutBank(input: $input, condition: $condition) {
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
export const createProgramWeek = /* GraphQL */ `
  mutation CreateProgramWeek(
    $input: CreateProgramWeekInput!
    $condition: ModelProgramWeekConditionInput
  ) {
    createProgramWeek(input: $input, condition: $condition) {
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
export const updateProgramWeek = /* GraphQL */ `
  mutation UpdateProgramWeek(
    $input: UpdateProgramWeekInput!
    $condition: ModelProgramWeekConditionInput
  ) {
    updateProgramWeek(input: $input, condition: $condition) {
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
export const deleteProgramWeek = /* GraphQL */ `
  mutation DeleteProgramWeek(
    $input: DeleteProgramWeekInput!
    $condition: ModelProgramWeekConditionInput
  ) {
    deleteProgramWeek(input: $input, condition: $condition) {
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
export const createProgram = /* GraphQL */ `
  mutation CreateProgram(
    $input: CreateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    createProgram(input: $input, condition: $condition) {
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
export const updateProgram = /* GraphQL */ `
  mutation UpdateProgram(
    $input: UpdateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    updateProgram(input: $input, condition: $condition) {
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
export const deleteProgram = /* GraphQL */ `
  mutation DeleteProgram(
    $input: DeleteProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    deleteProgram(input: $input, condition: $condition) {
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
export const createUserProgram = /* GraphQL */ `
  mutation CreateUserProgram(
    $input: CreateUserProgramInput!
    $condition: ModelUserProgramConditionInput
  ) {
    createUserProgram(input: $input, condition: $condition) {
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
export const updateUserProgram = /* GraphQL */ `
  mutation UpdateUserProgram(
    $input: UpdateUserProgramInput!
    $condition: ModelUserProgramConditionInput
  ) {
    updateUserProgram(input: $input, condition: $condition) {
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
export const deleteUserProgram = /* GraphQL */ `
  mutation DeleteUserProgram(
    $input: DeleteUserProgramInput!
    $condition: ModelUserProgramConditionInput
  ) {
    deleteUserProgram(input: $input, condition: $condition) {
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
export const createUserProgramWeeks = /* GraphQL */ `
  mutation CreateUserProgramWeeks(
    $input: CreateUserProgramWeeksInput!
    $condition: ModelUserProgramWeeksConditionInput
  ) {
    createUserProgramWeeks(input: $input, condition: $condition) {
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
export const updateUserProgramWeeks = /* GraphQL */ `
  mutation UpdateUserProgramWeeks(
    $input: UpdateUserProgramWeeksInput!
    $condition: ModelUserProgramWeeksConditionInput
  ) {
    updateUserProgramWeeks(input: $input, condition: $condition) {
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
export const deleteUserProgramWeeks = /* GraphQL */ `
  mutation DeleteUserProgramWeeks(
    $input: DeleteUserProgramWeeksInput!
    $condition: ModelUserProgramWeeksConditionInput
  ) {
    deleteUserProgramWeeks(input: $input, condition: $condition) {
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
export const createUserProgWeek = /* GraphQL */ `
  mutation CreateUserProgWeek(
    $input: CreateUserProgWeekInput!
    $condition: ModelUserProgWeekConditionInput
  ) {
    createUserProgWeek(input: $input, condition: $condition) {
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
export const updateUserProgWeek = /* GraphQL */ `
  mutation UpdateUserProgWeek(
    $input: UpdateUserProgWeekInput!
    $condition: ModelUserProgWeekConditionInput
  ) {
    updateUserProgWeek(input: $input, condition: $condition) {
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
export const deleteUserProgWeek = /* GraphQL */ `
  mutation DeleteUserProgWeek(
    $input: DeleteUserProgWeekInput!
    $condition: ModelUserProgWeekConditionInput
  ) {
    deleteUserProgWeek(input: $input, condition: $condition) {
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
export const createUserWorkout = /* GraphQL */ `
  mutation CreateUserWorkout(
    $input: CreateUserWorkoutInput!
    $condition: ModelUserWorkoutConditionInput
  ) {
    createUserWorkout(input: $input, condition: $condition) {
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
export const updateUserWorkout = /* GraphQL */ `
  mutation UpdateUserWorkout(
    $input: UpdateUserWorkoutInput!
    $condition: ModelUserWorkoutConditionInput
  ) {
    updateUserWorkout(input: $input, condition: $condition) {
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
export const deleteUserWorkout = /* GraphQL */ `
  mutation DeleteUserWorkout(
    $input: DeleteUserWorkoutInput!
    $condition: ModelUserWorkoutConditionInput
  ) {
    deleteUserWorkout(input: $input, condition: $condition) {
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
export const createUserExercise = /* GraphQL */ `
  mutation CreateUserExercise(
    $input: CreateUserExerciseInput!
    $condition: ModelUserExerciseConditionInput
  ) {
    createUserExercise(input: $input, condition: $condition) {
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
export const updateUserExercise = /* GraphQL */ `
  mutation UpdateUserExercise(
    $input: UpdateUserExerciseInput!
    $condition: ModelUserExerciseConditionInput
  ) {
    updateUserExercise(input: $input, condition: $condition) {
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
export const deleteUserExercise = /* GraphQL */ `
  mutation DeleteUserExercise(
    $input: DeleteUserExerciseInput!
    $condition: ModelUserExerciseConditionInput
  ) {
    deleteUserExercise(input: $input, condition: $condition) {
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
