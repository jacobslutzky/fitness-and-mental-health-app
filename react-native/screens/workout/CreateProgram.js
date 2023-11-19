import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { Colors } from '../../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import SelectWorkoutPopup from '../../components/SelectWorkoutPopup';
import * as queries from "../../../src/graphql/queries";
import * as mutations from "../../../src/graphql/mutations";
import { useQuery, gql, useMutation } from "@apollo/client";
import uuid from 'react-native-uuid';
import { ConsoleLogger } from '@aws-amplify/core';


const Workout = (props) => {
    const [updateParent, setUpdateParent] = useState(false)
    useEffect(() => {
        setUpdateParent(false)
    })
    
    useEffect(() => {
        if (updateParent) {
            if (props.workouts.length == 1 && props.workouts[0] == props.workouts) {
                props.setWorkouts(props.workouts.filter(function (workout) {
                    return workout === ""
                }))
            }
            else props.setWorkouts(props.workouts.filter(function (workout) {
                return workout !== props.workout
            }))
        }
    }, [updateParent])


    const handleWorkoutPressed = () => {

        props.navigation.navigate("ViewWorkout",  {
            workout: props.workout,
            saveWorkout: props.handleWorkoutChanged,
            isNewWorkout:false,
            index: props.index
        })
    }
    return (
        <TouchableOpacity style={styles.exerciseCard} onPress={() => handleWorkoutPressed()}>
            {/* Exercise Icon */}
            <Image source={require("../../../assets/workoutBackground.png")} style={styles.exerciseIcon}></Image>

            {/* Exercise Text Container */}
            <View style={styles.exerciseTextContainer}>
                <Text style={styles.bodyText}>{props.workout.title}</Text>
            </View>
            {/* Trash Container */}
            <View style={styles.trashContainer}>
                <TouchableOpacity style={styles.trashButton} onPress={() => setUpdateParent(true)}>
                    <EvilIcons name="trash" size={24} color="white" />
                </TouchableOpacity>
            </View>
           
        </TouchableOpacity>
    )
}

const Week = (props) => {
    const [workouts, setWorkouts] = useState([])
    const [createWorkout] = useMutation(gql`${mutations.createWorkout}`);
    const [createExercise] = useMutation(gql`${mutations.createExercise}`);
    
    useEffect(() => {
        if (props.weekToChange == props.week.id) {
            
            setWorkouts(workouts => [...workouts, props.workout])
        }
    }, [props.workout])

    useEffect(()=> {
        if(props.saveWorkouts){
            const newWorkouts = workouts
            newWorkouts.forEach((workout,index) => {
                const workoutID = uuid.v4()
                const workoutInput = {
                    id: workoutID,
                    programWeekWorkoutsId: props.week.id,
                    title: workout.title,
                    status: "incomplete",
                    workoutNumber: index+1
                }
                
            createWorkout({ variables: { input: workoutInput } });
            
            const newExercises = workout.exercises

                newExercises.forEach((exercise,index) => {
                    const exerciseInput = {
                        id: uuid.v4(),
                        workoutID: workoutID,
                        sets: exercise.sets,
                        RIR: exercise.RIR,
                        repRange: exercise.repRange,
                        restMinutes: exercise.restMinutes,
                        exerciseNum: index+1,
                        exerciseInfoID: exercise.exerciseInfoID,
                        notes: exercise.notes
                    }
                    createExercise({ variables: { input: exerciseInput } });
                });

            });

        }
    },[props.saveWorkouts])
    const handleWorkoutChanged = (index, workout) => {
        setWorkouts(prevWorkout=> {
            const newWorkouts = [...prevWorkout];
            newWorkouts[index] = workout;
            return newWorkouts;
          });

    }
    // const addWorkout = () => {
    //     const workoutID = uuid.v4()
    //     const workoutInput = {
    //             id: workoutID,
    //             propgramWeekID: props.week.id,
    //             workoutNumber: workouts.length+1,
    //             title: props.workout.title,
    //             status: "incomplete",
    //             notes: props.workout.notes
    // }
    
    //     setWorkouts(workouts => [...workouts, props.workout])

    // }
    
    // const createCopiesOfExercises = () => {
    //     const { data, loading, error, refetch } = useQuery(gql`${queries.getWorkout}`, {
    //         variables: { id: programID }
    //      });


    // }
    return (
        <View style={styles.weekContainer}>
            {/* Week Card */}
            <View style={styles.weekCard}>
                {/* Week Text */}
                <View style={styles.weekNumberContainer}>
                    <Text style={styles.weekNumberText}>{"Week " + (props.index + 1)}</Text>
                </View>

                {/* Difficulty Container */}
                <View style={styles.difficultyContainer}>
                    <Text style={[styles.bodyText, { marginBottom: 0, marginTop: 5 }]}>Difficulty:</Text>
                    <Text style={styles.bodyText}>--</Text>
                </View>

                {/* Exercises Container */}
                <View style={styles.exerciseNumberContainer}>
                    <Text style={[styles.bodyText, { marginBottom: 0, marginTop: 5 }]}>Exercises:</Text>
                    <Text style={styles.bodyText}>--</Text>
                </View>

                {/* Duration Container */}
                <View style={styles.durationContainer}>
                    <Text style={[styles.bodyText, { marginBottom: 0,
                         marginTop: 5 }]}>Duration:</Text>
                    <Text style={styles.bodyText}>--</Text>
                </View>
            </View>

            {/* workout List */}
            <View style={styles.wourkoutsList}>
                {
                    workouts && workouts.map((workout, index) => (
                        <Workout index={index} workout={workout} setWorkouts={setWorkouts} handleWorkoutChanged={handleWorkoutChanged} workouts={workouts} navigation={props.navigation}/>
                    ))
                }
            </View>

            {/* Add Workout */}
            <TouchableOpacity style={styles.addContainer} onPress={() => { props.setWeekToChange(props.week.id); props.togglePopup();}}>
                <AntDesign name="pluscircle" size={16} color={Colors.primary} />
                <View style={styles.addTextContainer}>
                    <Text style={{ color: Colors.primary }}>Add</Text>
                </View>
            </TouchableOpacity>
              
        </View>
    )
}

export default function CreateProgram({ route, navigation }) {
    const [section, setSection] = useState(1)
    const [weeks, setWeeks] = useState([])
    const [weekToChange, setWeekToChange] = useState(null)
    const [workout, setWorkout] = useState("")
    const [isModalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [saveWorkouts, setSaveWorkouts] =useState(false)

    const [createProgram] = useMutation(gql`${mutations.createProgram}`);
    const [createProgramWeek] = useMutation(gql`${mutations.createProgramWeek}`);
    const setCreatedPrograms = route.params.setCreatedPrograms
    const createdPrograms = route.params.createdPrograms
    

    const handleProgramInitialized = () => {
        setSection(2)
        addWeek()
    
    }

 const addWeek = () => {
        const programWeekId = uuid.v4()
        const programWeekInput = {
                id: programWeekId,
            }
        //createProgramWeek({variables: {input: programWeekInput}})
        setWeeks(prevWeeks => [...prevWeeks, programWeekInput]);
    }


    const applySetWorkout = (weekID, workoutInput) => {
        setWorkout(workoutInput)
        setWeekToChange(weekID)
    }

  
    const handleSetWeekToChange = (weekID) => {
        setWeekToChange(weekID)
    }
    

    const saveProgram = () => {
        setCreatedPrograms(createdPrograms.length > 0 ? [...createdPrograms, createdPrograms[0]] : createdPrograms)
        
        const programID = uuid.v4()
        
        const programInput = {
            id: programID,
            author: global.userId,
            image: "",
            title: title,
            introVideo: "",
            description: description
        }
        createProgram({ variables: { input: programInput } }) 
        
        //for program week in weeks
            //create programWeek with newProgramID
            //for workout in programWeek
                //create workout with programWeekID
                //for exercise in workout
                    //create exercise with workoutid
        const newWeeks = weeks
        newWeeks.forEach((weekInput,index) => {
            weekInput.weekNumber = index+1
            weekInput.programID = programID
            createProgramWeek({ variables: { input: weekInput } });
        });
        setSaveWorkouts(true)
        



        navigation.navigate("SelectWorkoutProgram", { newProgram: title })
    }


    const togglePopup = () => {
        setModalVisible(!isModalVisible)
    };
   
    return (
        <ScrollView style={styles.container}>
            {section == 1 ?
                <View>
                    {/* Section Title */}
                    <View style={styles.sectionTitleContainer}>
                        <Text style={styles.sectionTitleText}>CREATE NEW PROGRAM</Text>
                    </View>

                    {/* Current Step */}
                    <View style={styles.currentStepContainer}>
                        <Text style={styles.stepText}>Step 1/4</Text>
                    </View>

                    {/* Program Title Text */}
                    <View style={styles.programTitleContainer}>
                        <Text style={[styles.bodyText, { width: '80%' }]}>Title</Text>
                    </View>

                    {/* Program Title Field */}
                    <View style={styles.programTitleFieldContainer}>
                        <TextInput
                            style={styles.programTitleField}
                            onChangeText={setTitle}
                            placeholder="My great workout program..."
                            placeholderTextColor="rgba(255, 255, 255, 0.4)" />
                    </View>

                    {/* Program Description Text */}
                    <View style={styles.programDescriptionTextContainer}>
                        <Text style={[styles.bodyText, { width: '80%' }]}>Description</Text>
                    </View>

                    {/* Program Description Field */}
                    <View style={styles.programDescriptionFieldContainer}>
                        <TextInput
                            style={styles.programDescriptionField}
                            placeholder="I plan to do..."
                            
                            placeholderTextColor="rgba(255, 255, 255, 0.4)"
                            multiline={true}
                            textAlignVertical='top'
                            onChangeText={setDescription} />
                            
                    </View>

                    {/* Cover Image Text */}
                    <View style={styles.coverImageTextContainer}>
                        <Text style={[styles.bodyText, { width: '80%' }]}>Cover Image</Text>
                    </View>

                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.uploadButton}>
                            <AntDesign name="upload" size={16} color={Colors.primary} />
                            <Text style={styles.uploadButtonText}>Upload Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.generateButton}>
                            <Text style={styles.generateButtonText}>Generate Image</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Continue Button */}
                    <View style={styles.continueContainer}>
                        <TouchableOpacity style={styles.continueButton} onPress={handleProgramInitialized}>
                            <Text>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                : section == 2 ?
                    <View style={styles.container}>
                        {/* Section Title */}
                        <View style={styles.sectionTitleContainer}>
                            <Text style={styles.sectionTitleText}>CREATE NEW PROGRAM</Text>
                        </View>

                        {/* Current Step */}
                        <View style={styles.currentStepContainer}>
                            <Text style={styles.stepText}>Step 2/4</Text>
                        </View>

                        {/* Weeks */}
                        <View style={styles.weeksContainer}>
                            {
                                weeks.map((item, index) => (
                                    <Week index={index} key={item.id} week = {item} weekToChange={weekToChange} saveWorkouts={saveWorkouts} togglePopup={togglePopup} navigation={navigation} workout={workout} setWeekToChange={handleSetWeekToChange}/>
                                )) 
                            }
                        </View>

                        {/* Create New Week Button */}
                        <View style={styles.addWeekContainer}>
                            <TouchableOpacity style={styles.addWeekButton} onPress={() => addWeek()}>
                                <Text style={{ color: 'white' }}>Create New Week</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Continue Button */}
                        <View style={styles.continueContainer}>
                            <TouchableOpacity style={styles.continueButton} onPress={() => saveProgram()}>
                                <Text style={{ color: 'white' }}>Continue</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Pop up */}
                        <SelectWorkoutPopup isVisible={isModalVisible} setWorkout={applySetWorkout} weekToChange={weekToChange} togglePopup={togglePopup} title={""} navigation={navigation}/>
                    </View>
                    :
                    <View>
                    </View>
            }
            
        </ScrollView>

    )
}


const styles = StyleSheet.create({
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
        marginTop: 20,
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
        
        alignItems: 'center',
        justifyContent: 'center'
    },
    weeksContainer: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    weekCard: {
        width: '80%',
        height: 55,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    weekContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
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
        opacity: '0.8',
        borderRadius: 10
    },
    exerciseTextContainer: {
        justifyContent: 'center',
        marginLeft: 10,
        width: '80%',
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
    }
});