import { StyleSheet, TouchableOpacity, ScrollView, Text, View, Image } from 'react-native';
import { useState, React, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import { useQuery, gql } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";
import { useApolloClient } from '@apollo/client';
import WorkoutPreviewPopUp from '../../components/WorkoutPreviewPopUp';


const Workout = (props) => {
    // const dataR = props.dataR
    // const title = props.title
    const togglePopup = props.togglePopup
   

    // const { data, loading, error, refetch } = useQuery(gql`${queries.getWorkout}`, {
    //     variables: { id: `${props.workout}-week1-${title}` },
    //     variables: { id: title != "womenintermediate4xweek" ? `${title}::1::${props.workout}` : `${props.workout}-week1-${title}` },
    //     enabled: dataR
    // });

    const workout = {...props.workout  }
    
    workout.userExercises.items = props.workout.userExercises.items.slice().sort((a, b) => a.exerciseNum - b.exerciseNum);

    return (
        <View key={workout} style={styles.card}>
            <View style={styles.cardNumber}>
                <Text style={{ fontWeight: 'bold' }}>{props.index}</Text>
            </View>
            <View style={styles.cardInnerContent}>
                <View style={styles.cardHeader}>
                    <Text style={styles.header}>{workout.title}</Text>
                    <Text style={styles.workoutStatus}>{workout.status}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.overviewButton} onPress={() => togglePopup(workout)}>
                <Text style={styles.buttonText}>Preview</Text>
            </TouchableOpacity>
        </View>
    )
}


export default function CurrentProgram({ navigation, route }) {
    console.log(route.params)
    const colors = useTheme().colors;
    const title = route.params.title
    const titleToNameMap = route.params.titleToNameMap
    const [workoutBeingPreviewed, setWorkoutBeingPreviewed] = useState(null);
    const [program, setProgram] = useState(null)
    const [currentWeek, setCurrentWeek] = useState(null)
    const [currentWorkout, setCurrentWorkout] = useState(null)
    

    useEffect(() => {
        const userProgram = route.params.program
        const sortedUserProgramWeeks = [...userProgram.userProgramWeeks.items];
        sortedUserProgramWeeks.sort((a, b) => a.weekNumber - b.weekNumber);
        setProgram({ ...userProgram, userProgramWeeks: { items: sortedUserProgramWeeks } });
        handleWeekClick(sortedUserProgramWeeks[0])
    }, []);
   


    const navigateToSelectProgram = () => {
        navigation.navigate("SelectWorkoutProgram")
    }
    const navigatedToWorkout = () => {
         navigation.navigate("DuringWorkout", { workout: currentWorkout, title: title, taskCompletionList: route.params ? route.params.taskCompletionList : null,  taskCompletionListIndex: route.params ? route.params.taskCompletionListIndex : null })
    }


const handleWeekClick = (week) => {
        const newWeek = {...week }
        newWeek.userWorkouts.items =week.userWorkouts.items.slice().sort((a, b) => a.workoutNumber - b.workoutNumber);
       
        setCurrentWeek(week)

        const earliestIncompleteWorkout = week.userWorkouts.items.find(workout => workout.status === "incomplete");
        
        setCurrentWorkout(earliestIncompleteWorkout)
    }

    const [isModalVisible, setModalVisible] = useState(false);

   
    const togglePopup = (workout) => {
        setModalVisible(!isModalVisible)
        const newWorkout = {...workout  }
    
        newWorkout.userExercises.items = workout.userExercises.items.slice().sort((a, b) => a.exerciseNum - b.exerciseNum);
        setWorkoutBeingPreviewed(newWorkout)
    };


    return (
        <View style={styles.container}>
        <ScrollView>
            {/* Header */}
            <ScrollView horizontal={true}>
            
                <View style={ styles.buttonsContainerBugged }>
                    {
                      program!=null?(program.userProgramWeeks.items.map((week, index) => (
                            <TouchableOpacity style={[styles.weekButton, { backgroundColor: currentWeek!=null && currentWeek.weekNumber == index + 1 ? colors.primary : "#4c4c4c" }]} key={index} onPress={() => handleWeekClick(week)} >
                                <Text style={styles.buttonText}> Week {index + 1}</Text>
                            </TouchableOpacity>

                        )))
                            : (<View></View>)
                    }
                </View>
            </ScrollView>
            <View style={{ marginTop: 40, height: "70%" }}>
                <Text style={styles.programHeader}> {program!=null?(program.title):"loading"}</Text>
                <View style={{ flexDirection: "column",  }}>
                    {
                        currentWeek!=null ? currentWeek.userWorkouts.items.map((workout, index) => (
                            <Workout key={index} workout={workout} togglePopup={togglePopup} workoutBeingPreviewed={workoutBeingPreviewed} index={index + 1}></Workout>
                        ))
                            : <View></View>
                    }
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 40, }}>
                <TouchableOpacity style={styles.bottomButton} onPress={() => navigatedToWorkout()} >
                    <Text style={styles.buttonText} >Start Workout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton} onPress={() => navigateToSelectProgram()}>
                    <Text style={styles.buttonText}>Change Program</Text>
                </TouchableOpacity>
            </View>

            {program ? <WorkoutPreviewPopUp isVisible={isModalVisible} workout={workoutBeingPreviewed} togglePopup={togglePopup} title={title} />
                : <View></View>}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginTop: 40,
        alignItems:"center",
        justifyContent: "center"
    },

    buttonsContainerBugged: {
        //   alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "row",
        marginTop: 20,
        height: 150
    },
    buttonsContainer: {
        //   alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "row",
        marginTop: 20,
    },
    programHeader:
    {
        fontSize: 30,
        fontWeight: 'bold',
        color: "white",
        marginHorizontal: 20,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "white",
        textAlign: "left",

    },
    workoutStatus: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "grey",
        textAlign: "left",
    },
    cardsContainer: {
        marginTop: 40,
    },
    weekButton: {
        width: 80,
        height: 40,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 10
    },
    bottomButton: {

        width: "40%",
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
    },
    overviewButton: {
        width: 120,
        height: 40,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
        marginVertical: 5,
    },
    buttonText: {
        fontSize: 13,
        alignSelf: "center",
        fontWeight: 'bold'
    },
    image: {
        width: 150,
        height: 100,
    },
    cardHeader: {
        justifyContent: 'center'
    },
    card: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#191B1C",
        borderRadius: 20,
        marginVertical: 20
    },
    cardNumber: {
        height: 40,
        width: 40,
        borderRadius: 30,
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        marginLeft: 5
    },
    cardInnerContent: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
        marginLeft: 20
    }
});

