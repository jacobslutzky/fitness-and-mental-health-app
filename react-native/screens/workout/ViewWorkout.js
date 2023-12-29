import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import { useState, React } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";
import * as mutations from "../../../src/graphql/mutations";
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import AddExercisePopUp from '../../components/AddExercisePopUp';
import uuid from 'react-native-uuid';

const Exercise = (props) => {
    const colors = useTheme().colors;
    const exerciseInput = props.exerciseInput
    const index = props.index

    const { data, loading, error } = useQuery(gql`${queries.getExerciseInfo}`,
        {
            variables: { id: exerciseInput.exerciseInfoID }
        });

    return (
        <View style={styles.exerciseContainer}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity style={styles.exerciseHeader} onPress={() => props.openAddExercisePopUp(exerciseInput, data.getExerciseInfo, index)}>
                    <View style={styles.exerciseHeaderText}>
                        <Text style={{ color: colors.text, fontSize: 16, marginBottom: 5 }}>{loading || data == null ? ("loading") : (data.getExerciseInfo.name)}</Text>
                        <Text style={{ color: "grey" }}>{exerciseInput.sets} sets x {exerciseInput.repRange} reps</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.removeExercise(index) }}>
                    <EvilIcons size={24} color={"white"} name="trash" />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default function ViewWorkout({ navigation, route }) {
    const { workout, saveWorkout, isNewWorkout, index } = route.params;
    const [exercises, setExercises] = useState(route.params.workout.exercises)
    const [isAddExerciseVisible, setIsAddExerciseVisible] = useState(false)
    const [selectedExerciseInput, setSelectedExerciseInput] = useState(null)
    const [selectedExerciseInfo, setSelectedExerciseInfo] = useState(null)
    const [title, setTitle] = useState("")
    const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(-1)

    const [createExercise] = useMutation(gql`${mutations.createExercise}`);
    const [createWorkout] = useMutation(gql`${mutations.createWorkout}`);

    const openAddExercisePopUp = (exerciseInput, exerciseInfo, index) => {
        setSelectedExerciseInput(exerciseInput)
        setSelectedExerciseInfo(exerciseInfo)
        setSelectedExerciseIndex(index)
        setIsAddExerciseVisible(true)
    }

    const removeExercise = (indexToRemove) => {
        setExercises((prevExercises) => {
            const newExercises = [...prevExercises];
            newExercises.splice(indexToRemove, 1);
            return newExercises;
        });
    };

    const closeAddExercisePopUp = () => {
        setSelectedExerciseInput(null)
        setSelectedExerciseInfo(null)
        setIsAddExerciseVisible(false)
    }

    const saveExercise = async (props) => {
        props.setSaveAttempted(true)
        if (props.RIR && isNaN(parseInt(props.RIR))) return
        if (isNaN(parseInt(props.sets))) return
        if (typeof props.repRange !== "string") return
        if (isNaN(parseInt(props.restMinutes))) return
        if (props.sets == 0 || props.repRange == "" || props.restMinutes == 0) return
        const exerciseInput = {
            sets: parseInt(props.sets),
            exerciseInfoID: props.exerciseInfo.id,
            restMinutes: parseFloat(props.restMinutes),
            repRange: props.repRange,
            RIR: props.RIR,
            workoutID: workout.id,
            notes: props.notes,
        }

        if (selectedExerciseInput == null) {
            setExercises(prevExercises => [...prevExercises, exerciseInput]);
        }
        else {
            setExercises(prevExercises => {
                const newExercises = [...prevExercises];
                newExercises[selectedExerciseIndex] = exerciseInput;
                return newExercises;
            });
        }
        props.setSaveAttempted(false)
        closeAddExercisePopUp()
    }

    const handleSaveWorkout = () => {
        if (title && exercises.length > 0) {
            const newWorkout = workout
            if (isNewWorkout) {
                const workoutID = uuid.v4()
                const workoutInput = {
                    id: workoutID,
                    title: title,
                }

                createWorkout({ variables: { input: workoutInput } })
                const newExercises = exercises
                newExercises.forEach((exerciseInput, index) => {
                    exerciseInput.id = uuid.v4();
                    exerciseInput.workoutID = workoutID;
                    exerciseInput.exerciseNum = index + 1
                    createExercise({ variables: { input: exerciseInput } });
                });
            }
            newWorkout.exercises = exercises
            newWorkout.title = title
            saveWorkout(index, newWorkout)
            navigation.goBack(null)
        };
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TextInput
                    style={styles.title}
                    value={title}
                    placeholder={"NAME YOUR WORKOUT"}
                    placeholderTextColor={'white'}
                    onChangeText={setTitle}
                />
                <AntDesign name="edit" size={20} color="white" />
            </View>
            <ScrollView style={{ marginBottom: 150 }}>
                {exercises.map((exercise, index) => (
                    <Exercise openAddExercisePopUp={openAddExercisePopUp} key={exercise.id} index={index} exerciseInput={exercise} removeExercise={removeExercise} />
                ))}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.addButton} onPress={() => openAddExercisePopUp(null, null, -1)} >
                        <AntDesign name="pluscircleo" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.bottomButton} onPress={() => handleSaveWorkout()}>
                <Text style={styles.bottomButtonText}>Save Workout</Text>
            </TouchableOpacity>
            <AddExercisePopUp isVisible={isAddExerciseVisible} startingExerciseInput={selectedExerciseInput} startingExerciseInfo={selectedExerciseInfo} closeAddExercisePopUp={closeAddExercisePopUp} saveExercise={saveExercise} />
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        height: 30,
        width: 75,
        marginHorizontal: 5,
        backgroundColor: "rgba(207, 184, 124, 0.3)",
        borderRadius: 10,
    },
    container: {
        justifyContent: "center",
        paddingVertical: 10,
        flex: 1
    },
    exerciseContainer: {
        justifyContent: "center",
        marginHorizontal: 30,
        paddingVertical: 10,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
    },
    title: {
        color: 'white',
        fontSize: 25,
        opacity: 1,
        fontWeight: "bold"
    },
    titleContainer: {
        alignItems: 'center',
        alignSelf: "center",
        marginVertical: 40,
        flexDirection: "row",

    },
    addButton: {
        height: 50,
        borderRadius: 6,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 12,
        alignSelf: "center"
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    exerciseHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    expandExerciseButtonContainer: {
        alignItems: 'end',
        width: "40%",
        justifyContent: 'center',
        marginLeft: 15
    },
    exerciseHeaderText: {
        width: "90%",
    },
    expandExerciseButton: {
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
    },
    bottomButton: {
        borderWidth: 1,
        borderRadius: 10,
        width: "75%",
        backgroundColor: Colors.primary,
        justifyContent: "center",
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
    },
    bottomButtonText: {
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        padding: 10
    },
})
