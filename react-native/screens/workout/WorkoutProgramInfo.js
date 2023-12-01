import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { useQuery, gql,useMutation } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";
import * as mutations from "../../../src/graphql/mutations";
import { useState, useEffect } from 'react';

import { AntDesign } from '@expo/vector-icons';
import uuid from 'react-native-uuid';


export default function WorkoutProgramInfo({ route, navigation }) {
    const programID = route.params.program.id
 
    const [createUserProgram] = useMutation(gql`${mutations.createUserProgram}`);
    const [createUserProgramWeeks] = useMutation(gql`${mutations.createUserProgWeek}`);
    const [createUserWorkout] = useMutation(gql`${mutations.createUserWorkout}`);
    const [createUserExercise] = useMutation(gql`${mutations.createUserExercise}`);
    const [updateUserStats] = useMutation(gql`${mutations.updateUserStats}`);
    const [program,setProgram] = useState(null)

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
        variables: { id: programID}
    });

    useEffect(() => {
        if(!loading){
        setProgram(data.getProgram)
        }
    }, [data]);



    const navigateToPreviewSplit = () => {
        navigation.navigate("PreviewSplit", {program: program, navigateToProgram:navigateToProgram, taskCompletionList: route.params ? route.params.taskCompletionList : null,  taskCompletionListIndex: route.params ? route.params.taskCompletionListIndex : null })
    }

    const navigateToProgram = () => {
        
        program.programID = program.id
        program.id = uuid.v4()
        program.userID = global.userId
        const programWeeks = program.weeks.items
        delete program.weeks
        delete program.__typename
        createUserProgram({ variables: { input: program } });
        const newProgram = {...program}
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
          const newProgramWeek = {...programWeek}
          newProgram.userProgramWeeks.items.push(newProgramWeek)
          newProgramWeek.userWorkouts = { items: [] };

          for (const workout of workouts){
                workout.workoutID = workout.id
                workout.id = uuid.v4()
                workout.userProgramWeekID = programWeek.id
                workout.status = "incomplete"
                const exercises = workout.exercises.items
                delete workout.exercises
                delete workout.__typename
            createUserWorkout({ variables: { input: workout } })
              const newWorkout = {...workout}
              newProgramWeek.userWorkouts.items.push(newWorkout)
              newWorkout.userExercises = { items: [] };

              for (const exercise of exercises){
                    exercise.exerciseID = exercise.id
                    exercise.id = uuid.v4()
                    exercise.userWorkoutID = workout.id
                    exercise.completed=false
                    const exerciseInfo = {... exercise.exerciseInfo}
                    delete exercise.exerciseInfo
                    delete exercise.__typename
                    
                  createUserExercise({variables: { input: exercise }})
                    const newExercise = {...exercise}
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

       navigation.navigate("CurrentProgramNavigator", { program: newProgram,  taskCompletionList: route.params ? route.params.taskCompletionList : null,  taskCompletionListIndex: route.params ? route.params.taskCompletionListIndex : null })
    }

    return (
        <ScrollView>
            <ImageBackground resizeMode={'cover'} style={styles.container} source={require('../../../assets/boulderWeightRoom.webp')} imageStyle={{ opacity: .2 }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.programName}>{program!=null?program.title.toUpperCase():"loading"}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ImageBackground source={'../../../assets/affirmationTherapy.jpeg'} style={styles.imageContainer}>
                        <AntDesign name="playcircleo" size={40} color="white" />
                    </ImageBackground>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{program!=null?program.description:"loading"}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigateToPreviewSplit()} >
                        <Text style={styles.buttonText}>PREVIEW SPLIT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigateToProgram()}>
                        <Text style={styles.buttonText}>SELECT PROGRAM</Text>
                    </TouchableOpacity>
                </View>
                <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
                    <Defs>
                        <LinearGradient id="grad" x1="0%" y1="40%" x2="0%" y2="100%">
                            <Stop offset="0" stopOpacity="0.2" stopColor={'black'} />
                            <Stop offset="1" stopOpacity="1" stopColor={"black"} />
                        </LinearGradient>
                    </Defs>
                    <Rect width="100%" height="100%" fill="url(#grad)" />
                </Svg>
            </ImageBackground>
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
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 200,
        borderRadius: 15,
        borderColor: Colors.primary,
        borderWidth: 1,
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
        marginTop: 30,
        zIndex: 100,
        marginHorizontal: 20
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
        zIndex: 20
    },
    titleContainer: {
        width: '100%',
        backgroundColor: '#101214',
        paddingVertical: 30
    }
});