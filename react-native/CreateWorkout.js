import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabBar } from 'react-native-tab-view';
import { Colors } from './constants/Colors';
import VideoCard from './components/VideoCard';
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../src/graphql/queries";
import * as mutations from "../src/graphql/mutations";
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import CreateWorkoutPopup from './components/CreateWorkoutPopup';

const Exercise = (props) => {
    const [updateParent, setUpdateParent] = useState(false)

    useEffect(() => {
        setUpdateParent(false)
    })

    useEffect(() => {
        if(updateParent){
            if(props.exercises.length == 1 && props.exercises[0] == props.exercise){
                props.setExercises(props.exercises.filter(function(exercise) {
                    return exercise === ""
                }))
            }
            else props.setExercises(props.exercises.filter(function(exercise) {
                return exercise !== props.exercise
            }))
        }
    }, [updateParent])



    return (
        <View style={styles.exerciseCard}>
            {/* Exercise Icon */}
            <Image source={require("../assets/workoutBackground.png")} style={styles.exerciseIcon}></Image>

            {/* Exercise Text Container */}
            <View style={styles.exerciseTextContainer}>
                <Text style={styles.bodyText}>{props.exercise}</Text>
            </View>

            {/* Information Container */}
            <View style={styles.informationContainer}>
                <TouchableOpacity style={styles.informationButton}>
                    <Ionicons name="information-circle-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Trash Container */}
            <View style={styles.trashContainer}>
                <TouchableOpacity style={styles.trashButton} onPress={() => setUpdateParent(true)}>
                    <EvilIcons name="trash" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Week = (props) => {
    const [exercises, setExercises] = useState(["Push", "Pull", "Legs"])

    useEffect(() => {
        console.log(props.weekToChange, props.index, props.workout)
        if(props.weekToChange == props.index && exercises){
            setExercises(exercises => [...exercises, props.workout])
        }
    }, [props.workout])
    

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
                    <Text style={[styles.bodyText, {marginBottom: 0, marginTop: 5}]}>Difficulty:</Text>
                    <Text style={styles.bodyText}>--</Text>
                </View>

                {/* Exercises Container */}
                <View style={styles.exerciseNumberContainer}>
                    <Text style={[styles.bodyText, {marginBottom: 0, marginTop: 5}]}>Exercises:</Text>
                    <Text style={styles.bodyText}>--</Text>
                </View>

                {/* Duration Container */}
                <View style={styles.durationContainer}>
                    <Text style={[styles.bodyText, {marginBottom: 0, marginTop: 5}]}>Duration:</Text>
                    <Text style={styles.bodyText}>--</Text>
                </View>
            </View>

            {/* Exercise List */}
            <View style={styles.exerciseList}>
                {
                    exercises && exercises.map((item, index) => (
                        <Exercise index={index} exercise={item} setExercises={setExercises} exercises={exercises}/>
                    ))
                }
            </View>

            {/* Add Exercise */}
            <TouchableOpacity style={styles.addContainer} onPress={props.togglePopup}>
                <AntDesign name="pluscircle" size={16} color={Colors.primary}/>
                <View style={styles.addTextContainer}>
                    <Text style={{color: Colors.primary}}>Add</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default function CreateWorkout({route, navigation}){
    const [section, setSection] = useState(1)
    const [weeks, setWeeks] = useState(2)
    const [weekToChange, setWeekToChange] = useState(-1)
    const [workout, setWorkout] = useState("")
    const [isModalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("")

    const applySetWorkout = (workout, weekNumber) => {
        setWorkout(workout)
        setWeekToChange(weekNumber)
    }

    const navigateToSelectProgram = () => {

        navigation.navigate("SelectWorkoutProgram", {newProgram: title})
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
                <Text style={[styles.bodyText, {width: '80%'}]}>Title</Text>
            </View>

            {/* Program Title Field */}
            <View style={styles.programTitleFieldContainer}>
                <TextInput
                    style={styles.programTitleField}
                    onChangeText={setTitle}
                    placeholder="My great workout program..."
                    keyboardType="numeric" 
                    placeholderTextColor="rgba(255, 255, 255, 0.4)"/>
            </View>

            {/* Program Description Text */}
            <View style={styles.programDescriptionTextContainer}>
                <Text style={[styles.bodyText, {width: '80%'}]}>Description</Text>
            </View>

            {/* Program Description Field */}
            <View style={styles.programDescriptionFieldContainer}>
                <TextInput
                    style={styles.programDescriptionField}
                    placeholder="I plan to do..."
                    keyboardType="numeric"
                    placeholderTextColor="rgba(255, 255, 255, 0.4)"
                    multiline={true}
                    textAlignVertical='top' />
            </View>

            {/* Cover Image Text */}
            <View style={styles.coverImageTextContainer}>
                <Text style={[styles.bodyText, {width: '80%'}]}>Cover Image</Text>
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
                <TouchableOpacity style={styles.continueButton} onPress={() => setSection(2)}>
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
                    Array(weeks).fill().map((item, index) => (
                        <Week index={index} togglePopup={togglePopup} workout={workout} weekToChange={weekToChange}/>
                    ))
                }
            </View>

            {/* Create New Week Button */}
            <View style={styles.addWeekContainer}>
                <TouchableOpacity style={styles.addWeekButton} onPress={()=> setWeeks(weeks + 1)}>
                    <Text style={{color: 'white'}}>Create New Week</Text>
                </TouchableOpacity>
            </View>

            {/* Continue Button */}
            <View style={styles.continueContainer}>
                <TouchableOpacity style={styles.continueButton} onPress={() => navigateToSelectProgram()}>
                    <Text style={{color: 'white'}}>Continue</Text>
                </TouchableOpacity>
            </View>

            {/* Pop up */}
            <CreateWorkoutPopup isVisible={isModalVisible} setWorkout={applySetWorkout} togglePopup={togglePopup} title={""} weekNumber={0}/>
            
        </View>
        :
        <View>
        </View>
        }
        </ScrollView>
        
    )
}


const styles = StyleSheet.create({
    bodyText : {
        color: 'white',
        marginBottom: 10
    },
    sectionTitleText : {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    sectionTitleContainer : {
        alignItems: 'center'
    },
    currentStepContainer : {
        alignItems: 'center'
    },
    stepText : {
        color: 'grey',
        fontStyle: 'italic',
        opacity: '0.6',
        marginTop: 5
    }, 
    programTitleFieldContainer : {
        alignItems: 'center'
    },
    programTitleField : {
        borderColor: 'grey',
        borderWidth: 1,
        height: 50,
        borderRadius: 10,
        width: '80%',
        color: 'white',
        paddingHorizontal: 10
    },
    programTitleContainer : {
        alignItems: 'center'
    },
    programDescriptionTextContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    programDescriptionField : {
        borderColor: 'grey',
        borderWidth: 1,
        height: 150,
        borderRadius: 10,
        width: '80%',
        color: 'white',
        paddingHorizontal: 10
    },
    programDescriptionFieldContainer : {
        alignItems: 'center'
    },
    coverImageTextContainer : {
        alignItems: 'center',
        marginTop: 30
    },
    buttonContainer : {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    uploadButton : {
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
    generateButton : {
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
    continueButton : {
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
    addWeekContainer : {
        alignItems: 'center'
    }, 
    addWeekButton : {
        backgroundColor: 'grey',
        width: '80%',
        height: 50,
        borderRadius: 10,
        marginBottom: -30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    weeksContainer : {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    weekCard : {
        width: '80%',
        height: 55,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    weekContainer : {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    weekNumberText : {
        color: Colors.primary,
        fontSize: 16
    },
    weekNumberContainer : {
        alignItems: 'center',
        justifyContent: 'center'
    },
    exerciseNumberContainer : {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    difficultyContainer : {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    weekNumberContainer : {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    durationContainer : {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    exerciseCard : {
        height: 50,
        width: '75%',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    exerciseList : {
        alignItems: 'center'
    },
    exerciseIcon : {
        height: '70%',
        width: '15%',
        opacity: '0.8',
        borderRadius: 10
    },
    exerciseTextContainer : {
        justifyContent: 'center',
        marginLeft: 10,
        width: '70%',
    }, 
    informationContainer : {
        alignItems: 'center',
        justifyContent: 'center',
        width: '7.5%'
    },
    trashContainer : {
        alignItems: 'center',
        justifyContent: 'center',
        width: '7.5%'
    }, 
    addContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
        marginTop: 10,
        marginLeft: 30
    }, 
    addTextContainer : {
        width: '90%',
        marginLeft: 10
    }
});