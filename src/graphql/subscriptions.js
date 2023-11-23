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
        createdAt
        updatedAt
        userStatsUserId
        __typename
      }
      exerciseLogs {
        items {
          id
          userID
          userExerciseID
          exerciseInfoID
          entryLabels
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      currentProgram {
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
      completedPrograms {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
        createdAt
        updatedAt
        userStatsUserId
        __typename
      }
      exerciseLogs {
        items {
          id
          userID
          userExerciseID
          exerciseInfoID
          entryLabels
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      currentProgram {
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
      completedPrograms {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
        createdAt
        updatedAt
        userStatsUserId
        __typename
      }
      exerciseLogs {
        items {
          id
          userID
          userExerciseID
          exerciseInfoID
          entryLabels
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      currentProgram {
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
      completedPrograms {
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
export const onCreateUserStats = /* GraphQL */ `
  subscription OnCreateUserStats(
    $filter: ModelSubscriptionUserStatsFilterInput
  ) {
    onCreateUserStats(filter: $filter) {
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
        completedPrograms {
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
        completedPrograms {
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
        completedPrograms {
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
      createdAt
      updatedAt
      userStatsUserId
      __typename
    }
  }
`;
export const onCreateAchievementProgress = /* GraphQL */ `
  subscription OnCreateAchievementProgress(
    $filter: ModelSubscriptionAchievementProgressFilterInput
  ) {
    onCreateAchievementProgress(filter: $filter) {
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
export const onUpdateAchievementProgress = /* GraphQL */ `
  subscription OnUpdateAchievementProgress(
    $filter: ModelSubscriptionAchievementProgressFilterInput
  ) {
    onUpdateAchievementProgress(filter: $filter) {
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
export const onDeleteAchievementProgress = /* GraphQL */ `
  subscription OnDeleteAchievementProgress(
    $filter: ModelSubscriptionAchievementProgressFilterInput
  ) {
    onDeleteAchievementProgress(filter: $filter) {
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
export const onCreateAchievement = /* GraphQL */ `
  subscription OnCreateAchievement(
    $filter: ModelSubscriptionAchievementFilterInput
  ) {
    onCreateAchievement(filter: $filter) {
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
export const onUpdateAchievement = /* GraphQL */ `
  subscription OnUpdateAchievement(
    $filter: ModelSubscriptionAchievementFilterInput
  ) {
    onUpdateAchievement(filter: $filter) {
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
export const onDeleteAchievement = /* GraphQL */ `
  subscription OnDeleteAchievement(
    $filter: ModelSubscriptionAchievementFilterInput
  ) {
    onDeleteAchievement(filter: $filter) {
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
        completedPrograms {
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
        exerciseLogs {
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
export const onUpdateExerciseLog = /* GraphQL */ `
  subscription OnUpdateExerciseLog(
    $filter: ModelSubscriptionExerciseLogFilterInput
  ) {
    onUpdateExerciseLog(filter: $filter) {
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
        completedPrograms {
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
        exerciseLogs {
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
export const onDeleteExerciseLog = /* GraphQL */ `
  subscription OnDeleteExerciseLog(
    $filter: ModelSubscriptionExerciseLogFilterInput
  ) {
    onDeleteExerciseLog(filter: $filter) {
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
        completedPrograms {
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
        exerciseLogs {
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
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
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
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
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
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
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
export const onCreateExerciseInfo = /* GraphQL */ `
  subscription OnCreateExerciseInfo(
    $filter: ModelSubscriptionExerciseInfoFilterInput
  ) {
    onCreateExerciseInfo(filter: $filter) {
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
export const onUpdateExerciseInfo = /* GraphQL */ `
  subscription OnUpdateExerciseInfo(
    $filter: ModelSubscriptionExerciseInfoFilterInput
  ) {
    onUpdateExerciseInfo(filter: $filter) {
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
export const onDeleteExerciseInfo = /* GraphQL */ `
  subscription OnDeleteExerciseInfo(
    $filter: ModelSubscriptionExerciseInfoFilterInput
  ) {
    onDeleteExerciseInfo(filter: $filter) {
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
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onCreateWorkout(filter: $filter) {
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
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
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
        completedPrograms {
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
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onUpdateWorkout(filter: $filter) {
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
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
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
        completedPrograms {
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
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onDeleteWorkout(filter: $filter) {
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
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
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
        completedPrograms {
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
export const onCreateWorkoutBank = /* GraphQL */ `
  subscription OnCreateWorkoutBank(
    $filter: ModelSubscriptionWorkoutBankFilterInput
  ) {
    onCreateWorkoutBank(filter: $filter) {
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
export const onUpdateWorkoutBank = /* GraphQL */ `
  subscription OnUpdateWorkoutBank(
    $filter: ModelSubscriptionWorkoutBankFilterInput
  ) {
    onUpdateWorkoutBank(filter: $filter) {
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
export const onDeleteWorkoutBank = /* GraphQL */ `
  subscription OnDeleteWorkoutBank(
    $filter: ModelSubscriptionWorkoutBankFilterInput
  ) {
    onDeleteWorkoutBank(filter: $filter) {
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
export const onCreateProgramWeek = /* GraphQL */ `
  subscription OnCreateProgramWeek(
    $filter: ModelSubscriptionProgramWeekFilterInput
  ) {
    onCreateProgramWeek(filter: $filter) {
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
export const onUpdateProgramWeek = /* GraphQL */ `
  subscription OnUpdateProgramWeek(
    $filter: ModelSubscriptionProgramWeekFilterInput
  ) {
    onUpdateProgramWeek(filter: $filter) {
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
export const onDeleteProgramWeek = /* GraphQL */ `
  subscription OnDeleteProgramWeek(
    $filter: ModelSubscriptionProgramWeekFilterInput
  ) {
    onDeleteProgramWeek(filter: $filter) {
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
export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onCreateProgram(filter: $filter) {
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
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
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
        completedPrograms {
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
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onUpdateProgram(filter: $filter) {
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
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
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
        completedPrograms {
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
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram($filter: ModelSubscriptionProgramFilterInput) {
    onDeleteProgram(filter: $filter) {
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
          createdAt
          updatedAt
          userStatsUserId
          __typename
        }
        exerciseLogs {
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
        completedPrograms {
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
export const onCreateUserProgram = /* GraphQL */ `
  subscription OnCreateUserProgram(
    $filter: ModelSubscriptionUserProgramFilterInput
  ) {
    onCreateUserProgram(filter: $filter) {
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
        completedPrograms {
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
export const onUpdateUserProgram = /* GraphQL */ `
  subscription OnUpdateUserProgram(
    $filter: ModelSubscriptionUserProgramFilterInput
  ) {
    onUpdateUserProgram(filter: $filter) {
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
        completedPrograms {
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
export const onDeleteUserProgram = /* GraphQL */ `
  subscription OnDeleteUserProgram(
    $filter: ModelSubscriptionUserProgramFilterInput
  ) {
    onDeleteUserProgram(filter: $filter) {
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
        completedPrograms {
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
export const onCreateUserProgramWeeks = /* GraphQL */ `
  subscription OnCreateUserProgramWeeks(
    $filter: ModelSubscriptionUserProgramWeeksFilterInput
  ) {
    onCreateUserProgramWeeks(filter: $filter) {
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
export const onUpdateUserProgramWeeks = /* GraphQL */ `
  subscription OnUpdateUserProgramWeeks(
    $filter: ModelSubscriptionUserProgramWeeksFilterInput
  ) {
    onUpdateUserProgramWeeks(filter: $filter) {
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
export const onDeleteUserProgramWeeks = /* GraphQL */ `
  subscription OnDeleteUserProgramWeeks(
    $filter: ModelSubscriptionUserProgramWeeksFilterInput
  ) {
    onDeleteUserProgramWeeks(filter: $filter) {
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
export const onCreateUserProgWeek = /* GraphQL */ `
  subscription OnCreateUserProgWeek(
    $filter: ModelSubscriptionUserProgWeekFilterInput
  ) {
    onCreateUserProgWeek(filter: $filter) {
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
export const onUpdateUserProgWeek = /* GraphQL */ `
  subscription OnUpdateUserProgWeek(
    $filter: ModelSubscriptionUserProgWeekFilterInput
  ) {
    onUpdateUserProgWeek(filter: $filter) {
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
export const onDeleteUserProgWeek = /* GraphQL */ `
  subscription OnDeleteUserProgWeek(
    $filter: ModelSubscriptionUserProgWeekFilterInput
  ) {
    onDeleteUserProgWeek(filter: $filter) {
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
export const onCreateUserWorkout = /* GraphQL */ `
  subscription OnCreateUserWorkout(
    $filter: ModelSubscriptionUserWorkoutFilterInput
  ) {
    onCreateUserWorkout(filter: $filter) {
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
export const onUpdateUserWorkout = /* GraphQL */ `
  subscription OnUpdateUserWorkout(
    $filter: ModelSubscriptionUserWorkoutFilterInput
  ) {
    onUpdateUserWorkout(filter: $filter) {
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
export const onDeleteUserWorkout = /* GraphQL */ `
  subscription OnDeleteUserWorkout(
    $filter: ModelSubscriptionUserWorkoutFilterInput
  ) {
    onDeleteUserWorkout(filter: $filter) {
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
export const onCreateUserExercise = /* GraphQL */ `
  subscription OnCreateUserExercise(
    $filter: ModelSubscriptionUserExerciseFilterInput
  ) {
    onCreateUserExercise(filter: $filter) {
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
      exerciseLogs {
        items {
          id
          userID
          userExerciseID
          exerciseInfoID
          entryLabels
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
export const onUpdateUserExercise = /* GraphQL */ `
  subscription OnUpdateUserExercise(
    $filter: ModelSubscriptionUserExerciseFilterInput
  ) {
    onUpdateUserExercise(filter: $filter) {
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
      exerciseLogs {
        items {
          id
          userID
          userExerciseID
          exerciseInfoID
          entryLabels
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
export const onDeleteUserExercise = /* GraphQL */ `
  subscription OnDeleteUserExercise(
    $filter: ModelSubscriptionUserExerciseFilterInput
  ) {
    onDeleteUserExercise(filter: $filter) {
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
      exerciseLogs {
        items {
          id
          userID
          userExerciseID
          exerciseInfoID
          entryLabels
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
