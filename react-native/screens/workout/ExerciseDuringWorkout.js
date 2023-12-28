import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import { useState, React, useEffect } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";
import * as mutations from "../../../src/graphql/mutations";
import { useIsFocused } from '@react-navigation/native'
import ExerciseLineChart from '../../components/ExerciseLineChart';
import uuid from 'react-native-uuid';


const Set = (props) => {
    const index = props.index
    const updateReps = props.updateReps
    const updateWeights = props.updateWeights
    const reps = props.reps
    const weight = props.weight
    const handleSubmit = props.handleSubmit
    const colors = props.colors
    const date = new Date()
    const lastEntry = props.lastEntry

    return (
        <View key={index} style={styles.set}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.cardNumber}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Set {index + 1}</Text>
                </View>
                <View style={styles.repsContianer}>
                    <View style={styles.repsTextContainer}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Reps</Text>
                    </View>
                    <TextInput
                        style={[styles.input, { color: colors.text, marginLeft: 20 }]}
                        value={reps !== undefined ? String(reps) : ""}
                        keyboardType="numeric"
                        textAlign='center'
                        onChangeText={text => updateReps(index, text)}
                        onBlur={() => handleSubmit(index)}
                    />
                </View>
                <View style={styles.weightContainer}>
                    <View style={styles.weightTextContainer}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Weight</Text>
                    </View>
                    <TextInput
                        style={[styles.input, { color: colors.text }]}
                        value={weight !== undefined ? String(weight) : ""}
                        keyboardType="numeric"
                        textAlign='center'
                        onChangeText={text => updateWeights(index, text)}
                        onBlur={() => handleSubmit(index)}
                    />
                </View>
                {lastEntry != null ? (<Text style={{ color: "grey" }}>{lastEntry.repsCompleted} x {lastEntry.weight} lbs</Text>) :
                    (<Text style={{ color: "grey" }}>0 x 0 lbs</Text>)}
            </View>
        </View>
    )
}



export default function ExerciseDuringWorkout({ navigation, route }) {

    const colors = useTheme().colors;
    const exercise = route.params.exercise
    const exerciseLogID = `${global.userId}-${exercise.exerciseInfoID}`


    const [reps, setReps] = useState({})
    const [weight, setWeight] = useState({})
    const [currentEntryIDs, setCurrentEntryIDs] = useState({})
    const [entries, setEntries] = useState([])
    const [createLogEntry, { data: dataLogEntry, loading: loadingLogEntry, error: errorLogEntry }] = useMutation(gql`${mutations.createExerciseEntry}`);
    const [updateLogEntry, { data: dataLogEntryUpdate, loading: loadingLogEntryUpdate, error: errorLogEntryUpdate }] = useMutation(gql`${mutations.updateExerciseEntry}`);

    const { data: dataLog, loading: loadingLog, error: errorLog, refetch: refetchLog } = useQuery(gql`${queries.getExerciseLog}`, {
        variables: { id: exerciseLogID }
    });

    const [createLog, { data: dataLogCreate, loading: loadingLogCreate, error: errorLogCreate }] = useMutation(gql`${mutations.createExerciseLog}`);

    const [lastEntries, setLastEntries] = useState([])

    useEffect(() => {

        if (!loadingLog) {
            if (dataLog && !dataLog.getExerciseLog) {
                const input = {
                    id: exerciseLogID,
                    exerciseInfoID: exercise.exerciseInfoID,
                    userID: global.userId
                }

                createLog({ variables: { input: input } })
                    .then(() => {
                        refetchLog();
                    })
                    .catch(error => {
                        console.error("Error creating log:", error);
                    });
            }
            else if (dataLog && dataLog.getExerciseLog) {
                const newEntries = dataLog.getExerciseLog.entries.items;
                setEntries(newEntries)
                const exerciseSets = exercise.sets;

                const recentEntriesMap = new Map();

                newEntries.forEach((entry) => {
                    const setNumber = entry.setNumber;

                    if (entry.userExerciseID == exercise.id) {
                        updateCurrentExerciseEntryIDs(entry.setNumber - 1, entry.id)
                        updateReps(entry.setNumber - 1, entry.repsCompleted)
                        updateWeights(entry.setNumber - 1, entry.weight)
                    }
                    else if (setNumber <= exerciseSets) {
                        if (!recentEntriesMap.has(setNumber)) {
                            recentEntriesMap.set(setNumber, entry);
                        } else {
                            const existingEntry = recentEntriesMap.get(setNumber);
                            if (entry.dateCompleted > existingEntry.dateCompleted) {
                                recentEntriesMap.set(setNumber, entry);
                            }
                        }
                    }
                });

                const mostRecentEntries = Array.from(recentEntriesMap.values());

                mostRecentEntries.sort((a, b) => a.setNumber - b.setNumber);

                setLastEntries(mostRecentEntries);
            }
        }
    }, [dataLog]);


    const updateReps = (index, text) => {
        setReps(prevReps => {
            return { ...prevReps, [index]: text };
        });
    }

    const updateWeights = (index, text) => {
        setWeight(prevWeight => {
            return { ...prevWeight, [index]: text };
        });
    }

    const updateCurrentExerciseEntryIDs = (index, id) => {
        setCurrentEntryIDs((prevEntryIDs) => {
            return { ...prevEntryIDs, [index]: id };
        });

    }
    const handleSubmit = (index) => {
        if (reps[index] && weight[index]) {
            const date = new Date();
            if (currentEntryIDs[index]) {
                const input = {
                    id: currentEntryIDs[index],
                    repsCompleted: parseInt(reps[index]),
                    weight: weight[index],
                    dateCompleted: date,
                }
                updateLogEntry({ variables: { input: input } })

            }
            else {
                const new_entry_id = uuid.v4()
                updateCurrentExerciseEntryIDs(index, new_entry_id)

                const input = {
                    id: new_entry_id,
                    repsCompleted: parseInt(reps[index]),
                    weight: weight[index],
                    dateCompleted: date,
                    userExerciseID: exercise.id,
                    exerciseLogID: exerciseLogID,
                    setNumber: index + 1
                }
                createLogEntry({ variables: { input: input } })
            }


        }
    }



    return (

        <ScrollView style={styles.container}>
            <View style={{ marginHorizontal: 25 }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{exercise.exerciseInfo.name}</Text>
                </View>
                {!loadingLog ? (Array(exercise.sets).fill(0).map((item, index) => (
                    <Set key={index} exerciseEntryID={currentEntryIDs} index={index} updateReps={updateReps} updateWeights={updateWeights} reps={reps[index]} weight={weight[index]} handleSubmit={handleSubmit} colors={colors} lastEntry={lastEntries.length > index ? lastEntries[index] : null} exercise={exercise} />
                ))) : (<></>)}
            </View>
            {/* Build in graphs */}
            <ExerciseLineChart navigation={navigation} entries={entries} exercise={exercise} />
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    input: {
        height: 35,
        width: 100,
        backgroundColor: "rgb(22,19,10)",
        borderRadius: 20,
        borderColor: Colors.primary,
        borderWidth: 1,
        marginTop: 10
    },
    title: {
        color: 'white',
        fontSize: 35,
        opacity: 1
    },
    titleContainer: {
        alignItems: 'center',
        marginVertical: 40
    },
    bottomButton: {

        width: "40%",
        height: 50,
        backgroundColor: Colors.primary,
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
        marginLeft: 150
    },
    expandExerciseButton: {
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
    },
    set: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
        paddingBottom: 20
    },
    graphContainer: {
        height: '25%',
        width: '100%',
        marginBottom: 30,
        justifyContent: 'center',
    },
    cardNumber: {
        height: 35,
        width: 40,
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: 5,
    },
    repsTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        marginLeft: 20
    },
    weightTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
    },
    repsContianer: {
        marginRight: 40,
    },
    weightContainer: {

    }
})
