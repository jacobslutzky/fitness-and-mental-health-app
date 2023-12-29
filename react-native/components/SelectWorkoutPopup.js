import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, View, ScrollView, ImageBackground, TextInput } from "react-native";
import Modal from "react-native-modal";
import { Colors } from '../constants/Colors';
import { useQuery, gql } from "@apollo/client";
import * as queries from "../../src/graphql/queries";
import { Ionicons, Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';


const Workout = (props) => {

    const { data, loading, error } = useQuery(gql`${queries.getWorkout}`, {
        variables: { id: props.workout.id }
    });

    const cardPress = async () => {
        selectedWorkout = data.getWorkout
        const exercises = selectedWorkout.exercises.items ? selectedWorkout.exercises.items.sort((a, b) => a.exerciseNum - b.exerciseNum) : selectedWorkout.exercises.items
        const workoutInput = {
            id: uuid.v4(),
            title: selectedWorkout.title,
            programWeekWorkoutsId: props.weekID,
            exercises: exercises,
            notes: selectedWorkout.notes,
            status: "incomplete"
        }
        props.togglePopup()

        props.setWorkout(props.weekID, workoutInput)
    }

    return (
        <TouchableOpacity style={styles.weekContainer} onPress={() => !loading ? (cardPress()) : undefined}>
            {/* Week Card */}
            <ImageBackground source={require("../../assets/workoutBackground.png")} style={styles.weekCard} resizeMode="cover" imageStyle={{ width: '100%', height: '100%', borderRadius: 15, opacity: 0.7 }}>
                <View style={styles.cardHeader}>

                </View>
                <View style={{ height: '40%' }}></View>
                <View style={styles.cardFooter}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>{loading ? "loading" : props.workout.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

function SelectWorkoutPopup({ isVisible, setWorkout, togglePopup, title, weekToChange, navigation }) {
    const [workouts, setWorkouts] = useState([])
    const [filteredWorkouts, setFilteredWorkouts] = useState([])
    const [search, setSearch] = useState("")
    
    const { data, loading, error, refetch } = useQuery(gql`${queries.listWorkouts}`,
        {
            variables: {
                filter: {
                    programWeekWorkoutsId: { attributeExists: false }
                },
                limit: 1000,
            }
        })

    useEffect(() => {
        if (isVisible) {
            refetch()
            if (loading == false) {
                setWorkouts(data.listWorkouts.items)
                setFilteredWorkouts(data.listWorkouts.items)

            }
        }
    }, [isVisible])

    const updateSearch = (text) => {

        const updatedData = workouts.filter((item) => {
            const item_data = `${item.title.toLowerCase()})`;
            const text_data = text.toLowerCase();
            return item_data.indexOf(text_data) > -1;
        });

        setFilteredWorkouts(updatedData)

        setSearch(text)
    };

    const handleCreateWorkoutButtonPressed = () => {
        const workoutInput = {
            id: uuid.v4(),
            title: "NAME YOUR WORKOUT",
            programWeekWorkoutsId: weekToChange,
            exercises: []
        }
        togglePopup()

        navigation.navigate("ViewWorkout", {
            workout: workoutInput,
            saveWorkout: setWorkout,
            isNewWorkout: true,
            index: weekToChange
        })
    }

    return (
        <Modal isVisible={isVisible}>
            <View style={styles.outerContainer}>
                <View style={{ width: '100%' }}>
                    <TouchableOpacity onPress={() => { togglePopup(); setSearch("") }}>
                        <Feather name="x-circle" size={17} color={"white"} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.headerOne}>WORKOUT CREATION</Text>
                <View style={[styles.innerContainer]}>
                    {/* <View style={styles.bottomButton}> */}
                    <View style={styles.searchBarContainer}>
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor={"white"}
                            onChangeText={updateSearch}
                            style={styles.searchBarInput}
                            value={search}
                            autoCapitalize='none'
                        // round={true}
                        />
                        <Ionicons name="search" size={15} color="white" style={{ marginRight: 10 }} />
                    </View>

                    <ScrollView persistentScrollbar={true}>
                        <View style={styles.weeksContainer}>
                            {
                                filteredWorkouts.map((item, index) => (
                                    <Workout workout={item} weekID={weekToChange} key={item.id} index={index} togglePopup={togglePopup} setWorkout={setWorkout} />
                                ))
                            }
                        </View>
                    </ScrollView>

                </View>
                <TouchableOpacity style={styles.bottomButton} onPress={() => handleCreateWorkoutButtonPressed()}>
                    <Text style={styles.bottomButtonText}>Create New Workout</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#383838",
        height: "80%",
        width: "90%",
        borderRadius: 15,
        alignSelf: "center",
        padding: 10
    },
    innerContainer: {
        backgroundColor: "#595555",
        borderRadius: 10,
        height: "85%",
        width: "90%",
        paddingHorizontal: 10,
        paddingTop: 10

    },
    headerOne:
    {
        alignSelf: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
        marginBottom: 10
    },
    title: {
        color: "white",
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold"
    },
    //   exerciseList: {
    //     flexDirection: "column",
    //     marginBottom:20,
    //     maxHeight: "90%",
    //     borderTopColor: "grey",
    //     borderTopWidth: 2
    //   },
    //   exerciseNumberBox: {
    //     width: 24,
    //     height: 24,
    //     backgroundColor: Colors.primary,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginRight: 10,
    //     borderRadius: 4,
    //     marginVertical:10
    //   },
    exercise: {
        flexDirection: "row",
        justifyContent: "flex-start",
        borderBottomWidth: 2,
        borderBottomColor: "grey"
    },
    exerciseNumber: {
        color: Colors.background,
        fontSize: 12,
        alignSelf: "center",
        padding: 5,
        fontWeight: "bold",

    },
    exerciseDetails: {
        flexDirection: "column",
        marginVertical: 10
    },
    exerciseName: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    },
    exerciseStats: {
        flexDirection: "row",

    },
    exerciseStat: {
        color: "white",
        fontSize: 12,
        marginRight: 10,
    },
    closeButton: {
        width: "60%",
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 6,
        justifyContent: 'center',
        alignSelf: "center",
    },
    closeButtonText: {
        textAlign: "center",
        verticalAlign: "center",
        color: 'white'
    },
    searchBar: {
        backgroundColor: "#444444",
        textAlign: "left",
        justifyContent: "center",
        borderRadius: 15,
        width: '95%',
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderBottomWidth: 1
    },

    bodyText: {
        color: 'white',
        marginBottom: 10
    },
    sectionTitleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    sectionTitleContainer: {
        alignItems: 'center'
    },
    currentStepContainer: {
        alignItems: 'center'
    },
    stepText: {
        color: 'grey',
        fontStyle: 'italic',
        opacity: '0.6',
        marginTop: 5
    },
    programTitleFieldContainer: {
        alignItems: 'center'
    },
    programTitleField: {
        borderColor: 'grey',
        borderWidth: 1,
        height: 50,
        borderRadius: 10,
        width: '80%',
        color: 'white',
        paddingHorizontal: 10
    },
    programTitleContainer: {
        alignItems: 'center'
    },
    programDescriptionTextContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    programDescriptionField: {
        borderColor: 'grey',
        borderWidth: 1,
        height: 150,
        borderRadius: 10,
        width: '80%',
        color: 'white',
        paddingHorizontal: 10
    },
    programDescriptionFieldContainer: {
        alignItems: 'center'
    },
    coverImageTextContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    uploadButton: {
        borderColor: 'grey',
        borderWidth: 1,
        width: '37%',
        height: 50,
        marginRight: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    generateButton: {
        borderColor: 'grey',
        borderWidth: 1,
        width: '37%',
        height: 50,
        marginLeft: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    continueContainer: {
        alignItems: 'center'
    },
    continueButton: {
        backgroundColor: Colors.primary,
        width: '80%',
        height: 50,
        borderRadius: 10,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploadButtonText: {
        color: Colors.primary,
        marginLeft: 10
    },
    generateButtonText: {
        color: Colors.primary
    },
    addWeekContainer: {
        alignItems: 'center'
    },
    addWeekButton: {
        backgroundColor: 'grey',
        width: '80%',
        height: 50,
        borderRadius: 10,
        marginBottom: -30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    weeksContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    weekCard: {
        width: '100%',
        height: 140,
        borderRadius: 15
    },
    weekContainer: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        borderRadius: 15
    },
    weekNumberText: {
        color: Colors.primary,
        fontSize: 16
    },
    weekNumberContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    exerciseNumberContainer: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    difficultyContainer: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    weekNumberContainer: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    durationContainer: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    exerciseCard: {
        height: 50,
        width: '75%',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    exerciseList: {
        alignItems: 'center'
    },
    exerciseIcon: {
        height: '70%',
        width: '15%',
        backgroundColor: 'grey',
        opacity: 0.3,
        borderRadius: 10
    },
    exerciseTextContainer: {
        justifyContent: 'center',
        marginLeft: 10,
        width: '70%',
    },
    informationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '7.5%'
    },
    trashContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '7.5%'
    },
    addContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
        marginTop: 10,
        marginLeft: 30
    },
    addTextContainer: {
        width: '90%',
        marginLeft: 10
    },
    cardHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    cardFooter: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center'
    },
    communityCard: {
        height: "100%",
        width: "100%",
        overflow: "hidden",
        borderColor: Colors.primary,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomButton: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'rgba(139, 136, 136, 1)',
        width: "90%",
        marginTop: "5%",
        paddingVertical: 5,
    },
    bottomButtonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    },
    searchBarContainer: {
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: "space-between",
        width: "100%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    searchBarInput: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        flex: 1, // Take up all available space
        paddingLeft: 15,
        paddingVertical: 5,


    },
});

export default SelectWorkoutPopup