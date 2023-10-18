import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import { useState, React, useEffect } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";
import * as mutations from "../../../src/graphql/mutations";
import { useIsFocused } from '@react-navigation/native'

const Set = (props) => {
    const index = props.index + 1
    const updateReps = props.updateReps
    const updateWeights = props.updateWeights
    const handleSubmit = props.handleSubmit
    const colors = props.colors

    const key = index - 1
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const keyDate = props.lastEntries[key] ? props.lastEntries[key].split("::")[2] : ""
    const lastEntryWasToday = `${month}/${day}` !== keyDate


    const { data, loading, error, refetch } = useQuery(gql`${queries.getExerciseEntry}`, {
        variables: { id: props.lastEntries[key] },
        enabled: props.lastEntries
    });

    useEffect(() => {
        refetch()
        if (props.exercise == "Leg Press") {
            console.log(props.exercise)
            console.log(props.lastEntries)
            for (const entry in props.lastEntries) {
                console.log(entry)
            }
        }
    }, [props]);


    return (
        <View key={index} style={styles.set}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.cardNumber}>
                    <Text>{index}</Text>
                </View>
                <TextInput
                    style={[styles.input, { color: colors.text, marginLeft: 20 }]}
                    placeholder=""
                    keyboardType="numeric"
                    textAlign='center'
                    onChangeText={text => updateReps(index, text)} />
                <Text style={{ color: "grey" }}>x</Text>
                <TextInput
                    style={[styles.input, { color: colors.text }]}
                    placeholder=""
                    keyboardType="numeric"
                    textAlign='center'
                    onChangeText={text => updateWeights(index, text)}
                    onSubmitEditing={() => handleSubmit(index - 1)} />
                <Text style={{ color: "grey" }}>lbs</Text>
            </View>
            {data && data.getExerciseEntry && lastEntryWasToday
                ? <Text style={{ color: "grey" }}>{data.getExerciseEntry.repsCompleted} x {data.getExerciseEntry.weight} lbs</Text>
                : <Text style={{ color: "grey" }}>0 x 0 lbs</Text>}
        </View>
    )
}

export default function ExerciseDuringWorkout({ navigation, route }) {

    const colors = useTheme().colors;
    const title = route.params.title
    const label = route.params.label.substring(3)
    const workout = route.params.workout
    const weekNumber = route.params.weekNumber
    const isFocused = useIsFocused()
    const [createLogEntry, { data: dataLogEntry, loading: loadingLogEntry, error: errorLogEntry }] = useMutation(gql`${mutations.createExerciseEntry}`);
    const [updateLogEntry, { data: dataLogEntryUpdate, loading: loadingLogEntryUpdate, error: errorLogEntryUpdate }] = useMutation(gql`${mutations.updateExerciseEntry}`);

    console.log(title, label, weekNumber, workout)
    const { data, loading, error } = useQuery(gql`${queries.getExercise}`, {
        variables: { id: title != "womenintermediate4xweek" ? `${title}::${weekNumber}::${workout}::${label}` : `${label}-${workout}-week${weekNumber}-${title}` }
    });
    console.log(`${title}::${weekNumber}::${workout}::${label}`)


    const { data: dataLog, loading: loadingLog, error: errorLog, refetch: refetchLog } = useQuery(gql`${queries.getExerciseLog}`, {
        skip: !data,
        variables: { id: data && data.getExercise ? `${global.userId}::${data.getExercise.name}` : "" }
    });


    const [createLog, { data: dataLogCreate, loading: loadingLogCreate, error: errorLogCreate }] = useMutation(gql`${mutations.createExerciseLog}`);
    const [updateLog, { data: dataLogUpdate, loading: loadingLogUpdate, error: errorLogUpdate }] = useMutation(gql`${mutations.updateExerciseLog}`);

    const [entryLabels, setEntryLabels] = useState([])

    const [lastEntries, setLastEntries] = useState({})
    useEffect(() => {
        refetchLog()
        if (dataLog && !dataLog.getExerciseLog) {
            console.log(data)
            const input = {
                id: `${global.userId}::${data.getExercise.name}`,
                exercise: title,
                entryLabels: [],
                userExerciseLogsId: global.userId
            }
            setEntryLabels([])
            createLog({ variables: { input: input, id: `${global.userId}::${data.getExercise.name}` } })
            refetchLog()
        }
        else if (data && dataLog && dataLog.getExerciseLog) {
            const entryLabels2 = dataLog.getExerciseLog.entryLabels
            const numSets = data.getExercise.sets
            if (data.getExercise.name == "Leg Press") {
                console.log("Should be here")
            }
            for (let j = Math.min(entryLabels2.length - 1, numSets - 1); j >= 0; j--) {
                let setNum = '';
                for (let k = entryLabels2[j].length - 1; k >= 0; k--) {
                    if (entryLabels2[j][k] == ':') break
                    setNum += entryLabels2[j][k]
                }
                setNum.split('').reverse().join('')

                let copyEntries = lastEntries
                copyEntries[parseInt(setNum)] = entryLabels2[j]
                setLastEntries(copyEntries)

            }
            setEntryLabels(entryLabels2)
            console.log(lastEntries)
            refetchLog()
        }
    }, [data, dataLog, isFocused]);


    const [reps, setReps] = useState({})
    const [weight, setWeight] = useState({})

    const updateReps = (index, text) => {
        let oldReps = reps
        oldReps[index - 1] = text
        setReps(oldReps)
    }

    const updateWeights = (index, text) => {
        let oldWeight = weight
        oldWeight[index - 1] = text
        setWeight(oldWeight)
    }


    const handleSubmit = (index) => {
        console.log('AAAAAAAAAA')
        refetchLog()
        if (reps[index] && weight[index] && data) {
            const date = new Date();
            const logEntryId = `${global.userId}::${data.getExercise.name}::${date.getMonth() + 1}/${date.getDate()}::${index}`;
            if (dataLog && !dataLog.getExerciseLog) {
                console.log("shouldn't be here")
                console.log(dataLog)
            }
            else {
                const logInput = {
                    id: `${global.userId}::${data.getExercise.name}`,
                    entryLabels: [logEntryId],
                    userExerciseLogsId: global.userId
                }
                console.log('updatingLog')

                updateLog({ variables: { input: logInput } })
                console.log(dataLogUpdate, errorLogUpdate, loadingLogUpdate)
            }

            console.log(entryLabels)

            if (entryLabels.find((entry) => entry == logEntryId)) {
                updateLogEntry({ variables: { input: input } })
            }
            else {
                const input = {
                    id: logEntryId,
                    repsCompleted: parseInt(reps[index]),
                    weight: weight[index],
                    dateCompleted: date,
                    workout: workout,
                    programWeek: weekNumber,
                    program: title,
                    exerciseLogEntriesId: `${global.userId}::${data.getExercise.name}`
                }
                createLogEntry({ variables: { input: input } })
            }
        }
    }



    return (

        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{label ? label : " "}</Text>
            </View>
            {Array(data && data.getExercise ? data.getExercise.sets : 0).fill().map((item, index) => (
                <Set key={index} index={index} updateReps={updateReps} updateWeights={updateWeights} handleSubmit={handleSubmit} colors={colors} lastEntries={lastEntries} exercise={data && data.getExercise ? data.getExercise.name : ""} />
            ))}
            <View style={styles.graphContainer}>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        height: 35,
        width: 75,
        marginHorizontal: 5,
        backgroundColor: "rgba(207, 184, 124, 0.3)",
        borderRadius: 10,
    },
    container: {
        marginHorizontal: 25
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
        marginBottom: 40
    },
    graphContainer: {
        height: '25%',
        width: '100%',
        marginBottom: 30,
        justifyContent: 'center',
    },
    cardNumber: {
        height: 35,
        width: 35,
        borderRadius: 10,
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(207, 184, 124, 1)",
        marginLeft: 5
    },
})
