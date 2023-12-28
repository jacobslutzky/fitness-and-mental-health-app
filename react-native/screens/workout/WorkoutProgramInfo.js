import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as mutations from "../../../src/graphql/mutations";
import { useState, useEffect } from 'react';
import uuid from 'react-native-uuid';


export default function WorkoutProgramInfo({ route, navigation }) {
  const programID = route.params.program.id

  const [createUserProgram] = useMutation(gql`${mutations.createUserProgram}`);
  const [createUserProgramWeeks] = useMutation(gql`${mutations.createUserProgWeek}`);
  const [createUserWorkout] = useMutation(gql`${mutations.createUserWorkout}`);
  const [createUserExercise] = useMutation(gql`${mutations.createUserExercise}`);
  const [updateUserStats] = useMutation(gql`${mutations.updateUserStats}`);
  const [program, setProgram] = useState(null)

  const getProgram = /* GraphQL */ `
    query GetProgram($id: ID!) {
      getProgram(id: $id) {
        id
        title
        introVideo
        image
        description
        weeks {
          items {
            id
            weekNumber
            workouts {
              items {
                id
                workoutNumber
                title
                notes
                exercises {
                  items {
                    id
                    sets
                    RIR
                    restMinutes
                    repRange
                    exerciseNum
                    exerciseInfoID
                    exerciseInfo {
                        id
                        name
                        muscleWorked
                        workoutType
                        createdAt
                        updatedAt
                        __typename
                      }
                    notes
                  }
                }
              }
            }
          }
        }
        
      }
    }
  `;

  const { data, loading, error, refetch } = useQuery(gql`${getProgram}`, {
    variables: { id: programID }
  });

  useEffect(() => {
    if (!loading) {
      setProgram(data.getProgram)
    }
  }, [data]);



  const navigateToPreviewSplit = () => {
    navigation.navigate("PreviewSplit", { program: program, navigateToProgram: navigateToProgram, taskCompletionList: route.params ? route.params.taskCompletionList : null, taskCompletionListIndex: route.params ? route.params.taskCompletionListIndex : null })
  }

  const navigateToProgram = () => {

    program.programID = program.id
    program.id = uuid.v4()
    program.userID = global.userId
    const programWeeks = program.weeks.items
    delete program.weeks
    delete program.__typename
    createUserProgram({ variables: { input: program } });
    const newProgram = { ...program }
    newProgram.userProgramWeeks = { items: [] };

    for (const programWeek of programWeeks) {
      programWeek.programWeekID = programWeek.id
      programWeek.id = uuid.v4()
      programWeek.weekNumber = Number(programWeek.weekNumber)
      programWeek.userProgramID = newProgram.id

      const workouts = programWeek.workouts.items
      delete programWeek.workouts
      delete programWeek.__typename

      createUserProgramWeeks({ variables: { input: programWeek } });
      const newProgramWeek = { ...programWeek }
      newProgram.userProgramWeeks.items.push(newProgramWeek)
      newProgramWeek.userWorkouts = { items: [] };

      for (const workout of workouts) {
        workout.workoutID = workout.id
        workout.id = uuid.v4()
        workout.userProgramWeekID = programWeek.id
        workout.status = "incomplete"
        const exercises = workout.exercises.items
        delete workout.exercises
        delete workout.__typename
        createUserWorkout({ variables: { input: workout } })
        const newWorkout = { ...workout }
        newProgramWeek.userWorkouts.items.push(newWorkout)
        newWorkout.userExercises = { items: [] };

        for (const exercise of exercises) {
          exercise.exerciseID = exercise.id
          exercise.id = uuid.v4()
          exercise.userWorkoutID = workout.id
          exercise.completed = false
          const exerciseInfo = { ...exercise.exerciseInfo }
          delete exercise.exerciseInfo
          delete exercise.__typename

          createUserExercise({ variables: { input: exercise } })
          const newExercise = { ...exercise }
          newExercise.exerciseInfo = exerciseInfo
          newWorkout.userExercises.items.push(newExercise)
        }

      }
    }

    const statsInput = {
      id: `stats-${global.userId}`,
      currentProgramID: program.id
    }
    updateUserStats({ variables: { input: statsInput } })

    navigation.navigate("CurrentProgramNavigator", { program: newProgram, taskCompletionList: route.params ? route.params.taskCompletionList : null, taskCompletionListIndex: route.params ? route.params.taskCompletionListIndex : null })
  }

  return (
    <ScrollView style={{ height: '100%' }}>
      <View style={styles.titleContainer}>
        <Text style={styles.programName}>{program != null ? program.title.toUpperCase() : "loading"}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{program != null ? program.description : "loading"}</Text>
      </View>
      <View style={{ marginHorizontal: 20, paddingTop: 50 }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigateToPreviewSplit()} >
            <Text style={styles.buttonText}>PREVIEW SPLIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigateToProgram()}>
            <Text style={styles.buttonText}>SELECT PROGRAM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    height: '100%',
    width: '100%'
  },
  programName: {
    color: "white",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  description: {
    color: "white",
    fontSize: 18,
    marginTop: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
  },
  button: {
    width: "45%", // Adjust the width for better alignment
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 15,
    alignSelf: "center",
    fontWeight: 'bold'
  },
  descriptionContainer: {
    marginHorizontal: 20,
    marginTop: 100,
  },
  titleContainer: {
    width: '100%',
    backgroundColor: '#101214',
    paddingVertical: 30,
    marginTop: 100
  }
});