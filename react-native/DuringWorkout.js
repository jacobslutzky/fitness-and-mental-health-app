import { StyleSheet, TouchableOpacity, ScrollView, Text, View, Image, TextInput} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors } from './constants/Colors';
import {useState, React, useEffect} from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../src/graphql/queries";
import * as mutations from "../src/graphql/mutations";
import { useIsFocused } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';


/*
    If an exercise log doesn't exist for a given exercise, create one
    For each set, create an exercise entry corresponding to that exercise's log

    Id for exercise log: email-exercise

    Id for exercise entry: email-exercise-month-day-set
}
*/

const Exercise = (props) => {
    const colors = useTheme().colors;
    const title = props.title
    const label = props.label
    const workout = props.workout
    const weekNumber = props.weekNumber
    const navigation = props.navigation
    const [createLogEntry, { data : dataLogEntry, loading : loadingLogEntry, error : errorLogEntry}] = useMutation(gql`${mutations.createExerciseEntry}`);
    const [updateLogEntry, { data : dataLogEntryUpdate, loading : loadingLogEntryUpdate, error : errorLogEntryUpdate}] = useMutation(gql`${mutations.updateExerciseEntry}`);

    const { data, loading, error } = useQuery(gql`${queries.getExercise}`, {
        variables: { id: title != "womenintermediate4xweek" ? `${title}::${weekNumber}::${workout}::${label}` : `${label}-${workout}-week${weekNumber}-${title}`}
    }); 


    const { data : dataLog, loading : loadingLog, error : errorLog, refetch: refetchLog } = useQuery(gql`${queries.getExerciseLog}`, {
        skip: !data,
        variables: { id: data ? `${global.userId}::${data.getExercise.name}` : ""}
    });


    const [createLog, { data : dataLogCreate, loading : loadingLogCreate, error : errorLogCreate }] = useMutation(gql`${mutations.createExerciseLog}`);
    const [updateLog, { data : dataLogUpdate, loading : loadingLogUpdate, error : errorLogUpdate }] = useMutation(gql`${mutations.updateExerciseLog}`);

    const [entryLabels, setEntryLabels] = useState([])

    const [lastEntries, setLastEntries] = useState({})
    useEffect(() => {
        refetchLog()
        if(dataLog && !dataLog.getExerciseLog){
            const input = {
                id: `${global.userId}::${data.getExercise.name}`,
                exercise: title,
                entryLabels: [],
                userExerciseLogsId: global.userId
            }
            setEntryLabels([])
            createLog({ variables : {input : input, id: `${global.userId}::${data.getExercise.name}`} })
            refetchLog()
        }
        else if(data && dataLog && dataLog.getExerciseLog){
            const entryLabels2 = dataLog.getExerciseLog.entryLabels
            const numSets = data.getExercise.sets
            if(data.getExercise.name == "Leg Press"){
                console.log("Should be here")
            }
            for(let j =  Math.min(entryLabels2.length - 1, numSets - 1); j >= 0; j--){
                let setNum = '';
                for(let k = entryLabels2[j].length - 1; k >= 0; k--){
                    if(entryLabels2[j][k] == ':') break
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
    }, [data, dataLog, props.isFocused]);


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
        if(reps[index] && weight[index] && data){
           const date = new Date();
           const logEntryId = `${global.userId}::${data.getExercise.name}::${date.getMonth() + 1}/${date.getDate()}::${index}`;
           if(dataLog && !dataLog.getExerciseLog){
                console.log("shouldn't be here")
                console.log(dataLog)
            }
            else{
                const logInput = {
                    id: `${global.userId}::${data.getExercise.name}`,
                    entryLabels: [logEntryId],
                    userExerciseLogsId: global.userId
                }
                console.log('updatingLog')
    
                updateLog({ variables : {input : logInput} })
                console.log(dataLogUpdate, errorLogUpdate, loadingLogUpdate)
            }

            console.log(entryLabels)

            if(entryLabels.find((entry) => entry == logEntryId)){
                updateLogEntry({ variables : {input : input} })
            }
            else{
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
                createLogEntry({ variables : {input : input} })
            }
        }
    }

    const navigateToExerciseScreen = () => {        
        navigation.navigate("ExerciseDuringWorkout", {label: data ? data.getExercise.name : "", weekNumber: weekNumber, workout: workout, title: title})
    }

    return(
        
        <View style={{justifyContent: "center", marginHorizontal: 30, borderBottomColor: '#CFB87C', borderBottomWidth: 2, paddingVertical: 10}}>
        {!data ? <View><Text>Loading</Text></View>
            :
            <View>
                <View style={styles.exerciseHeader}>
                    <View style={styles.exerciseHeaderText}>
                        <Text style={{color: colors.text, fontSize: 16, marginBottom: 5}}>{data ? data.getExercise.name : ""}</Text>
                        <Text style={{color: "grey"}}>{data ? data.getExercise.sets : ""} sets x 5-7,8-10</Text>
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

/*
                {Array(data ? data.getExercise.sets : 10).fill().map((item, index) => (
                    <Set key={index} index={index} updateReps={updateReps} updateWeights={updateWeights} handleSubmit={handleSubmit} colors={colors} lastEntries={lastEntries} exercise={data.getExercise.name}/>
                ))}
                */


export default function DuringWorkout({navigation, route}){
    const colors = useTheme().colors;
    //const exercises2 = route.params.workouts.exercises.items


    const workout = route.params.workout

    const title = route.params.title

    const exerciseLabels = route.params.exerciseLabels

    const titleToNameMap = route.params.titleToNameMap

    const weekNumber = route.params.weekNumber

    const isFocused = useIsFocused()

    let exercises = [{name : "FakeName", sets: 2}]

    const { data : dataGetStats, loading : loadingGetStats, error : errorGetStats } = useQuery(gql`${queries.getUserStats}`, {
        variables: { id: `stats-${global.userId}`}
    }); 


    const [updateUserStats, { data : dataUpdateStats, loading : loadingUpdateStats, error : errorUpdateStats}] = useMutation(gql`${mutations.updateUserStats}`);


    const navigateToSelectProgram = () => {
        const statsInput = {
            id: `stats-${global.userId}`,
            mindfulMinutes: dataGetStats.getUserStats ? dataGetStats.getUserStats.mindfulMinutes : 0,
            meditationStreak: dataGetStats.getUserStats ? dataGetStats.getUserStats.meditationStreak : 0,
            workoutsCompleted: dataGetStats.getUserStats ? dataGetStats.getUserStats.workoutsCompleted + 1 : 1,
        }

        updateUserStats({ variables : {input : statsInput} })
        
        navigation.navigate("CurrentProgram", {title: title, titleToNameMap: titleToNameMap})
    }


    const getRepRanges = (sets) => {
        output = []

        for(let set in sets){
            if(output.includes())
            output.append(set)
        }
    }

    return (

        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{titleToNameMap[title]}</Text>
            </View>
            <ScrollView style={{marginBottom: 150}}>
            {exerciseLabels.map((exercise, index) => (
                <Exercise key={index} label={exercise} title={title} workout={workout} weekNumber={weekNumber} isFocused={isFocused} navigation={navigation}/>
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
    title:{
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
    buttonContainer : {
        alignItems: 'center',
        marginTop: 20
    },
    exerciseHeader : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    expandExerciseButtonContainer : {
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
