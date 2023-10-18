import { StyleSheet, TouchableOpacity, ScrollView, Text, View, Image, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import { useState, React, useEffect } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";
import * as mutations from "../../../src/graphql/mutations";
import { useIsFocused } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';


const Exercise = (props) => {
    const colors = useTheme().colors;
    const title = props.title
    const label = props.label
    const workout = props.workout
    const weekNumber = props.weekNumber
    const navigation = props.navigation

    console.log(title)

    const { data, loading, error } = useQuery(gql`${queries.getExercise}`, {
        variables: { id: title != "womenintermediate4xweek" ? `${title}::${weekNumber}::${workout}::${label}` : `${label}-${workout}-week${weekNumber}-${title}` }
    });


    console.log(`${title}::${weekNumber}::${workout}::${label}`)
    console.log(data)



    const { data: dataLog, loading: loadingLog, error: errorLog, refetch: refetchLog } = useQuery(gql`${queries.getExerciseLog}`, {
        skip: !data,
        variables: { id: data && data.getExercise ? `${global.userId}::${data.getExercise.name}` : "" }
    });


    const [createLog] = useMutation(gql`${mutations.createExerciseLog}`);

    const [lastEntries, setLastEntries] = useState({})
    useEffect(() => {
        refetchLog()
        if (dataLog && !dataLog.getExerciseLog) {
            const input = {
                id: `${global.userId}::${data.getExercise.name}`,
                exercise: title,
                entryLabels: [],
                userExerciseLogsId: global.userId
            }
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
            console.log(lastEntries)
            refetchLog()
        }
    }, [data, dataLog, props.isFocused]);

    const navigateToExerciseScreen = () => {
        navigation.navigate("ExerciseDuringWorkout", { label: data ? data.getExercise.name : "", weekNumber: weekNumber, workout: workout, title: title })
    }

    return (

        <View style={{ justifyContent: "center", marginHorizontal: 30, borderBottomColor: '#CFB87C', borderBottomWidth: 2, paddingVertical: 10 }}>
            {!data ? <View><Text>Loading</Text></View>
                :
                <View>
                    <View style={styles.exerciseHeader}>
                        <View style={styles.exerciseHeaderText}>
                            <Text style={{ color: colors.text, fontSize: 16, marginBottom: 5 }}>{data && data.getExercise ? data.getExercise.name : ""}</Text>
                            <Text style={{ color: "grey" }}>{data.getExercise ? data.getExercise.sets : ""} sets x 5-7,8-10</Text>
                        </View>
                        <TouchableOpacity style={styles.expandExerciseButtonContainer} onPress={() => navigateToExerciseScreen()}>
                            <AntDesign name="right" size={20} color="white" />
                        </TouchableOpacity>
                    </View>

                </View>
            }
        </View>

    )
}

export default function DuringWorkout({ navigation, route }) {
    const colors = useTheme().colors;
    //const exercises2 = route.params.workouts.exercises.items


    const workout = route.params.workout

    const title = route.params.title

    const exerciseLabels = route.params.exerciseLabels

    const titleToNameMap = route.params.titleToNameMap

    const weekNumber = route.params.weekNumber

    const isFocused = useIsFocused()

    const { data: dataGetStats, loading: loadingGetStats, error: errorGetStats } = useQuery(gql`${queries.getUserStats}`, {
        variables: { id: `stats-${global.userId}` }
    });


    const [updateUserStats, { data: dataUpdateStats, loading: loadingUpdateStats, error: errorUpdateStats }] = useMutation(gql`${mutations.updateUserStats}`);


    const navigateToSelectProgram = () => {
        const statsInput = {
            id: `stats-${global.userId}`,
            mindfulMinutes: dataGetStats.getUserStats ? dataGetStats.getUserStats.mindfulMinutes : 0,
            meditationStreak: dataGetStats.getUserStats ? dataGetStats.getUserStats.meditationStreak : 0,
            workoutsCompleted: dataGetStats.getUserStats ? dataGetStats.getUserStats.workoutsCompleted + 1 : 1,
        }

        updateUserStats({ variables: { input: statsInput } })

        navigation.navigate("CurrentProgram", { title: title, titleToNameMap: titleToNameMap })
    }

    return (

        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{titleToNameMap[title]}</Text>
            </View>
            <ScrollView style={{ marginBottom: 150 }}>
                {exerciseLabels.map((exercise, index) => (
                    <Exercise key={index} label={exercise} title={title} workout={workout} weekNumber={weekNumber} isFocused={isFocused} navigation={navigation} />
                ))}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.bottomButton} onPress={() => navigateToSelectProgram()} >
                        <Text style={styles.buttonText} > Complete Workout </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    }
})