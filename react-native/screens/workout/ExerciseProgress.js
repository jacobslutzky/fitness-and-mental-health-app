import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useState, React, useEffect } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";
import * as mutations from "../../../src/graphql/mutations";
import ExerciseLineChart from '../../components/ExerciseLineChart';

const ExerciseEntry = (props) => {
    const repsCompleted = props.item.repsCompleted
    const weight = props.item.weight
    const index = props.index

    return (
        <View style={styles.exerciseEntry}>
            <Text style={styles.exerciseEntryText}>{'\u25B7'}   Set {index + 1}:      {repsCompleted} reps x {weight} lbs</Text>
        </View>
    )
}

const Log = (props) => {
    const exerciseEntries = props.item
    

    return (
        <View style={styles.log}>
            <View style={styles.dataContainer}>
                {exerciseEntries.map((item, index) => (
                    <ExerciseEntry key={index} index={index} item={item} />
                ))}
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{new Date(exerciseEntries[0].date).toLocaleDateString()}</Text>
            </View>
        </View>
    )
}

export default function ExerciseProgress({ navigation, route }) {
    const entries = route.params.exerciseData
    const logFlag = route.params.logFlag
    const exercise = route.params.exercise
    const exerciseLogID = logFlag ? `${global.userId}-${exercise.id}` : `${global.userId}-${exercise.exerciseInfoID}` 
    const [maxWeight, setMaxWeight] = useState(0)
    const [maxVolume, setMaxVolume] = useState(0)
    const [entriesGroupedByDate, setEntriesGroupedByDate] = useState({})
    const [data, setData] = useState(entries.map((entry) => {
        return { repsCompleted: entry.repsCompleted, weight: entry.weight, volume: entry.repsCompleted * entry.weight, date: entry.updatedAt, workout: entry.workout }
    }))

    const { data: dataLog, loading: loadingLog, error: errorLog, refetch: refetchLog } = useQuery(gql`${queries.getExerciseLog}`, {
        variables: { id: exerciseLogID }
    });    

    useEffect(() => {
        if(dataLog && dataLog.getExerciseLog){            
            const logEntries = dataLog.getExerciseLog.entries.items.map((entry) => {
                return { repsCompleted: entry.repsCompleted, weight: entry.weight, volume: entry.repsCompleted * entry.weight, date: entry.updatedAt, workout: entry.workout }
            })
            logEntries.sort((a, b) => new Date(a.date) - new Date(b.date));
            setData(logEntries)
        }
    }, [dataLog])

    useEffect(() => {
        let tempEntriesGroupedByDate = {}
        for (let i = 0; i < data.length; i++) {
            const dateConverted = new Date(data[i].date).toLocaleDateString()
            if (dateConverted in tempEntriesGroupedByDate) {
                tempEntriesGroupedByDate[dateConverted].push(data[i])
            }
            else {
                tempEntriesGroupedByDate[dateConverted] = [data[i]]
            }
        }
        setEntriesGroupedByDate(tempEntriesGroupedByDate)
    }, [data])
    

    useEffect(() => {
        setMaxWeight(Math.max(...data.map((entry) => { return entry.weight })))
        setMaxVolume(Math.max(...data.map((entry) => { return entry.volume })))
    }, [data])


    useEffect(() => {
        console.log("entriesGroupedByDate", entriesGroupedByDate)
    },[entriesGroupedByDate])

    return (
        <ScrollView style={styles.container}>
            {
                Object.keys(entriesGroupedByDate).length != 0 ?
                    <View>
                        <View style={styles.progressContainer}>
                            <Text style={styles.progressText}>All Time Progress</Text>
                        </View>
                        <View style={styles.personalBestContainer}>
                            <View style={styles.personalBestCard}>
                                <Text style={{ color: 'white' }}>Personal Best: {maxVolume} lbs</Text>
                            </View>
                            <View style={styles.oneRepCard}>
                                <Text style={{ color: 'white' }}>1 Rep Max: {maxWeight} lbs</Text>
                            </View>
                        </View>

                        <ExerciseLineChart navigation={navigation} logFlag={true} entries={data} exercise={exercise} />

                        {Object.keys(entriesGroupedByDate).map((item, index) => (
                            <Log key={index} item={entriesGroupedByDate[item]} />
                        ))}
                    </View>
                : <View>
                    <View style={styles.progressContainer}>
                            <Text style={styles.progressText}>No Logs Available</Text>
                    </View>
                </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    progressContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20
    },
    progressText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    log: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
    },
    dateText: {
        color: 'grey'
    },
    personalBestContainer: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        marginTop: 20
    },
    personalBestCard: {
        height: 35,
        width: '55%',
        backgroundColor: "rgb(84,72,51)",
        borderRadius: 5,
        borderColor: Colors.primary,
        borderWidth: 1,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    oneRepCard: {
        height: 35,
        width: '40%',
        backgroundColor: "rgb(84,72,51)",
        borderRadius: 5,
        borderColor: Colors.primary,
        borderWidth: 1,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    exerciseEntryText: {
        color: 'white'
    },
    workoutText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    exerciseEntry: {
        marginBottom: 10
    }
})
