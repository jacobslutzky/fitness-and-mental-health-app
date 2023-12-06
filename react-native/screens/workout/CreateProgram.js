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
import { colors } from 'react-native-elements';
import { NestableScrollContainer, NestableDraggableFlatList } from "react-native-draggable-flatlist"


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
            <View style={styles.trashContainer}>
            <Image source={require("../../../assets/workoutBackground.png")} style={styles.exerciseIcon}></Image>

            {/* Exercise Text Container */}
            <View style={styles.exerciseTextContainer}>
                <Text style={styles.bodyText}>{props.workout.title}</Text>
            </View>
            </View>
            {/* Trash Container */}
            <View style={styles.trashContainer}>
            <TouchableOpacity onPressIn={props.drag}>
                <Ionicons name={"reorder-three"} size={20} color={"white"}/>
                </TouchableOpacity>
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
    const [isMinimized, setIsMinimized] = useState(false)
    console.log(props)
    useEffect(() => {
        if (props.weekToChange == props.week.id) {
            setWorkouts(workouts => [...workouts, ...props.workoutsToAdd])
        }
    }, [props.workoutsToAdd]);

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
    const handleDragEnd = ({ data }) => {
        setWorkouts(data);
      };
    

    return (
        <View style={styles.weekContainer}>
            {/* Week Card */}
            <TouchableOpacity onPress={()=>setIsMinimized(prev=>!prev)}style={styles.weekCard}>
                {/* Week Text */}
                <View style={styles.weekNumberContainer}>
                    <Text style={styles.weekNumberText}>{"WEEK " + (props.index + 1)}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>{props.duplicateWeek(props.index,workouts)}}>
                <Ionicons name={"duplicate-outline"} size={20} color={"white"}/>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={props.drag}>
                <Ionicons name={"reorder-three"} size={20} color={"white"}/>
                </TouchableOpacity>
                </View>
                {/* Difficulty Container */}
                {/* <View style={styles.difficultyContainer}>
                    <Text style={[styles.bodyText, { marginBottom: 0, marginTop: 5 }]}>Difficulty:</Text>
                    <Text style={styles.bodyText}>--</Text>
                </View> */}

                {/* Exercises Container */}
                {/* <View style={styles.exerciseNumberContainer}>
                    <Text style={[styles.bodyText, { marginBottom: 0, marginTop: 5 }]}>Exercises:</Text>
                    <Text style={styles.bodyText}>--</Text>
                </View> */}

                {/* Duration Container */}
                {/* <View style={styles.durationContainer}>
                    <Text style={[styles.bodyText, { marginBottom: 0,
                         marginTop: 5 }]}>Duration:</Text>
                    <Text style={styles.bodyText}>--</Text>
                </View> */}
            </TouchableOpacity>
            {/* workout List */}
            {!isMinimized && (
            

            <View style={styles.workoutsList}>
                 <NestableDraggableFlatList
                            data={workouts}
                            renderItem={({ item, getIndex, drag, isActive }) => (
                                <Workout 
                                index={getIndex} 
                                workout={item}
                                 setWorkouts={setWorkouts} 
                                 handleWorkoutChanged={handleWorkoutChanged} 
                                 workouts={workouts}
                                  navigation={props.navigation}
                                  drag={drag}
                              />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                            onDragEnd={handleDragEnd}
                        />
            </View>
           )}
           {!isMinimized && (
            <TouchableOpacity style={styles.addContainer} onPress={() => { props.setWeekToChange(props.week.id); props.togglePopup();}}>
                <AntDesign name="pluscircle" size={16} color={Colors.primary} />
                <View style={styles.addTextContainer}>
                    <Text style={{ color: Colors.primary }}>Add</Text>
                </View>
            </TouchableOpacity>
           )} 
        
        </View>
    )
}

export default function CreateProgram({ route, navigation }) {
    const [section, setSection] = useState(1)
    const [weeks, setWeeks] = useState([])
    const [weekToChange, setWeekToChange] = useState(null)
    const [workoutsToAdd, setWorkoutsToAdd] = useState(null)
    const [isModalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [saveWorkouts, setSaveWorkouts] =useState(false)

    const [createProgram] = useMutation(gql`${mutations.createProgram}`);
    const [createProgramWeek] = useMutation(gql`${mutations.createProgramWeek}`);
    

    const handleProgramInitialized = () => {
        setSection(2)
        addWeek()
    
    }

 const addWeek = () => {
        const programWeekId = uuid.v4()
        const programWeekInput = {
                id: programWeekId,
            }
        setWeeks(prevWeeks => [...prevWeeks, programWeekInput]);
    }

    const duplicateWeek = async(index, workouts) => {
        const newWeek = {...weeks[index]}
        newWeek.id = uuid.v4()
       // setWeekToChange(newWeek.id)

        setWeeks(prevWeeks => [
            ...prevWeeks.slice(0, index + 1),
            { ...newWeek },
            ...prevWeeks.slice(index + 1)
        ]);
       
       applySetWorkouts(newWeek.id,workouts)

    }


    const applySetWorkout = (weekID, workoutInput) => {
        setWorkoutsToAdd([workoutInput])
        setWeekToChange(weekID)
    }

    const applySetWorkouts =  (weekID, workoutInputs) => {
        setWorkoutsToAdd([...workoutInputs])
        setWeekToChange(weekID)
    }
  
    const handleSetWeekToChange = (weekID) => {
        setWeekToChange(weekID)
    }
    

    const saveProgram = async() => {
      
        
        const programID = uuid.v4()
        
        const programInput = {
            id: programID,
            authorID: global.userId,
            image: "",
            title: title,
            introVideo: "",
            description: description
        }
        await createProgram({ variables: { input: programInput } }) 
        
        const newWeeks = weeks
        newWeeks.forEach(async(weekInput,index) => {
            weekInput.weekNumber = index+1
            weekInput.programID = programID
            await createProgramWeek({ variables: { input: weekInput } });
        });
        setSaveWorkouts(true)
        
        route.params.handleProgramCreated()
        navigation.navigate("SelectWorkoutProgram", { newProgram: title })
    }


    const togglePopup = () => {
        setModalVisible(!isModalVisible)
    };
    
    const handleDragEnd = ({ data }) => {
        setWeeks(data);
      };
    
   
    return (
        <NestableScrollContainer style={styles.container}>
            {section == 1 ?
                <View>
                    {/* Section Title */}
                    <View style={styles.sectionTitleContainer}>
                        <Text style={styles.sectionTitleText}>CREATE NEW PROGRAM</Text>
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


                        {/* Weeks */}
                        <View style={styles.weeksContainer}>
                            <NestableDraggableFlatList
                            data={weeks}
                            renderItem={({ item, getIndex, drag, isActive }) => (
                            <Week
                                key={item.id}
                                index={getIndex()}
                                week={item}
                                duplicateWeek={duplicateWeek}
                                weekToChange={weekToChange}
                                saveWorkouts={saveWorkouts}
                                togglePopup={togglePopup}
                                navigation={navigation}
                                workoutsToAdd={workoutsToAdd}
                                setWeekToChange={handleSetWeekToChange}
                                drag={drag}
                            />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                            onDragEnd={handleDragEnd}
                            
                        />
                        </View>
                        <View style={{marginVertical:10}}>
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
                        </View>
                        {/* Pop up */}
                        <SelectWorkoutPopup isVisible={isModalVisible} setWorkout={applySetWorkout} weekToChange={weekToChange} togglePopup={togglePopup} title={""} navigation={navigation}/>
                    </View>
                    :
                    <View>
                    </View>
            }
            
        </NestableScrollContainer>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
       
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
        flex:1
    },
    weekCard: {
        width: '80%',
        height: 55,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between",
        paddingHorizontal: 10,
        flex:1
    },
    weekContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        flex:1
    },
    weekNumberText: {
        color: Colors.text,
        fontSize: 16,
        fontWeight: "bold",
        marginLeft:10
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
        width: '80%',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        alignSelf: 'center',
        justifyContent:"space-between"
    },
    exerciseList: {
        alignItems: 'center'
    },
    exerciseIcon: {
        height: '70%',
        width: 50,
        opacity: '0.8',
        borderRadius: 10
    },
    exerciseTextContainer: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    informationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '7.5%'
    },
    trashContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",

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
    workoutsList: {
        flex: 1,
        width: '100%', // Adjusted width to 100%
        alignItems:"center",
        justifyContent:"center"
      },
    
});