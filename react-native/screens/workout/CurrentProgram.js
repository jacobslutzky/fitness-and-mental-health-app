import { StyleSheet, TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { useState, React, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import WorkoutPreviewPopUp from '../../components/WorkoutPreviewPopUp';


const Workout = (props) => {
    const togglePopup = props.togglePopup
    const workout = { ...props.workout }

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
export function CurrentProgramNavigator({ navigation, route }) {

    return <CurrentProgram navigation={navigation} currProgram={route.params.program} programInput={route.params.programInput} />
}

export function CurrentProgram({ navigation, currProgram, programInput, taskCompletionList, taskCompletionListIndex }) {
    const colors = useTheme().colors;
    const [workoutBeingPreviewed, setWorkoutBeingPreviewed] = useState(null);
    const [program, setProgram] = useState(programInput)
    const [currentWeek, setCurrentWeek] = useState(null)
    const [currentWorkout, setCurrentWorkout] = useState(null)


    useEffect(() => {
        if (currProgram != null && programInput == null) {
            const userProgram = currProgram
            const sortedUserProgramWeeks = [...userProgram.userProgramWeeks.items];
            sortedUserProgramWeeks.sort((a, b) => a.weekNumber - b.weekNumber);
            const sortedProgram = {
                ...userProgram,
                userProgramWeeks: {
                    items: sortedUserProgramWeeks.map((week) => ({
                        ...week,
                        userWorkouts: {
                            items: week.userWorkouts.items.slice().sort((a, b) => a.workoutNumber - b.workoutNumber)
                                .map((workout) => ({
                                    ...workout,
                                    userExercises: {
                                        items: workout.userExercises.items.slice().sort((a, b) => a.exerciseNum - b.exerciseNum),
                                    },
                                })),
                        },
                    })),
                },
            };

            setProgram(sortedProgram);
            setWorkoutToCurrent(sortedProgram)
        }
    }, [currProgram]);



    const navigateToSelectProgram = () => {
        navigation.navigate("SelectWorkoutProgram", { selectingProgram: true })
    }

    const navigatedToWorkout = () => {
        navigation.navigate("DuringWorkout", { workout: currentWorkout, onWorkoutComplete: onWorkoutComplete, taskCompletionList: taskCompletionList, taskCompletionListIndex: taskCompletionListIndex, currentProgram: program })
    }

    const navigateToLogbook = () => {
        navigation.navigate("Logbook", { screen: 'Logbook' })
    }

    const setWorkoutToCurrent = (program) => {
        for (const week of program.userProgramWeeks.items) {
            const incompleteWorkout = week.userWorkouts.items.find((workout) => workout.status === "incomplete");

            if (incompleteWorkout) {
                setCurrentWorkout(incompleteWorkout)
                setCurrentWeek(week);
                break
            }
        }
    }

    const [isModalVisible, setModalVisible] = useState(false);

    const togglePopup = (workout) => {
        setModalVisible(!isModalVisible)
        const newWorkout = { ...workout }

        newWorkout.userExercises.items = workout.userExercises.items.slice().sort((a, b) => a.exerciseNum - b.exerciseNum);

        setWorkoutBeingPreviewed(newWorkout)
    };

    const onWorkoutComplete = (completedWorkout) => {
        completedWorkout.status = "complete";
        setWorkoutToCurrent(program)
    };

    return (
        <View style={styles.container}>
            <View style={{marginLeft: 20 }}>
                <Text style={styles.programHeader}>{program != null ? (program.title) : "loading"}</Text>
            </View>
            {/* Header */}
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
                <ScrollView horizontal={true} style={{width: '90%'}}>
                    <View style={styles.buttonsContainerBugged}>
                        {
                            program != null ? (program.userProgramWeeks.items.map((week, index) => (
                                <TouchableOpacity style={[styles.weekButton, { backgroundColor: currentWeek != null && currentWeek.weekNumber == index + 1 ? colors.primary : "#4c4c4c" }]} key={index} onPress={() => setCurrentWeek(week)} >
                                    <Text style={styles.buttonText}> Week {index + 1}</Text>
                                </TouchableOpacity>

                            )))
                                : (<View></View>)
                        }
                    </View>
                </ScrollView>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', height: 400}}>
                <ScrollView style={{ width: "90%" }}>

                    <View style={{ height: 300 }}>
                        <View style={{ flexDirection: "column", }}>
                            {
                                currentWeek != null ? currentWeek.userWorkouts.items.map((workout, index) => (
                                    <Workout key={index} workout={workout} currentWeek={currentWeek.userWorkouts.items} togglePopup={togglePopup} workoutBeingPreviewed={workoutBeingPreviewed} index={index + 1}></Workout>
                                ))
                                    : <Text style={{height: 500}}>Loading</Text>
                            }
                        </View>
                    </View>

                </ScrollView>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", paddingTop: 20 }}>
                <TouchableOpacity style={styles.bottomButton} onPress={() => navigatedToWorkout()} >
                    <Text style={styles.buttonText} >Start Workout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton} onPress={() => navigateToSelectProgram()}>
                    <Text style={styles.buttonText}>Change Program</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton} onPress={() => navigateToLogbook()}>
                    <Text style={styles.buttonText}>Logbook</Text>
                </TouchableOpacity>
            </View>

            {program ? <WorkoutPreviewPopUp isVisible={isModalVisible} workout={workoutBeingPreviewed} togglePopup={togglePopup} />
                : <View></View>}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginBottom: 50,
    },

    buttonsContainerBugged: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "row",
        marginBottom: 20,
    },
    buttonsContainer: {
        justifyContent: 'flex-start',
        flexDirection: "row",
    },
    programHeader:
    {
        fontSize: 25,
        fontWeight: 'bold',
        color: "white",
        marginTop: 60
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
        marginRight: 20,
    },
    bottomButton: {

        width: "25%",
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