import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import { useState, React, useEffect } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";
import * as mutations from "../../../src/graphql/mutations";
import { useIsFocused } from '@react-navigation/native'


const ExerciseEntry = (props) => {

    const repsCompleted = props.item.repsCompleted
    const weight = props.item.weight
    const index = props.index

    return (
        <View style={styles.exerciseEntry}>
            <Text style={styles.exerciseEntryText}>Set {index+1}      {repsCompleted} x {weight} lbs</Text>
        </View>
    )
}

const Log = (props) => {

    const exerciseEntries = props.item
    console.log("entries", exerciseEntries)

    return (
        <View style={styles.log}>
            <View style={styles.dataContainer}>
                <Text style={styles.workoutText}>{exerciseEntries[0].workout}</Text>
                {exerciseEntries.map((item, index) => (
                    <ExerciseEntry key={index} index={index} item={item}/>
                ))}
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{new Date(exerciseEntries[0].date).toLocaleDateString()}</Text>
            </View>
        </View>
    )
}

export default function ExerciseProgress({ navigation, route }) {
    const entries = route.params.data
    const exercise = route.params.exercise
    const [maxWeight, setMaxWeight] = useState(0)
    const [maxVolume, setMaxVolume] = useState(0)

    let data = entries.map((entry) => {
        return {repsCompleted: entry.repsCompleted, weight: entry.weight, volume: entry.repsCompleted * entry.weight, date: entry.updatedAt, workout: entry.workout}
    })

    useEffect(() => {
        setMaxWeight(Math.max(...data.map((entry) => {return entry.weight})))
        setMaxVolume(Math.max(...data.map((entry) => {return entry.volume})))
      }, [data])

    const [entriesGroupedByDate, setEntriesGroupedByDate] = useState({})
    
    useEffect(() => {
        let tempEntriesGroupedByDate = {}
        for(let i = 0; i < data.length; i++){
            const dateConverted = new Date(data[i].date).toLocaleDateString()
            if(dateConverted in tempEntriesGroupedByDate){
                tempEntriesGroupedByDate[dateConverted].push(data[i])
            }
            else{
                tempEntriesGroupedByDate[dateConverted] = [data[i]]
            }
        }
        console.log("Data: ", tempEntriesGroupedByDate)
        setEntriesGroupedByDate(tempEntriesGroupedByDate)
    }, [])

    /*
    const entriesGroupedByDate = Object.groupBy(data, (dat) => {
        return dat.date;
      });
      
      */


    return (
        <ScrollView style={styles.container}>
            <View style={styles.progressContainer}>
                <Text style={styles.progressText}>All Time Progress</Text>
            </View>
            <View style={styles.personalBestContainer}>
                <View style={styles.personalBestCard}>
                    <Text style={{color: 'white'}}>Personal Best: {maxVolume} lbs</Text>
                </View>
                <View style={styles.oneRepCard}>
                    <Text style={{color: 'white'}}>1 Rep Max: {maxWeight} lbs</Text>
                </View>
            </View>
            {Object.keys(entriesGroupedByDate).map((item, index) => (
                <Log key={index} item={entriesGroupedByDate[item]}/>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 20
    },
    progressContainer : {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20
    },
    progressText : {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    log : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    dateText : {
        color: 'grey'
    },
    personalBestContainer : {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        marginTop: 20
      }, 
      personalBestCard : {
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
      oneRepCard : {
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
      exerciseEntryText : {
        color: 'white'
      },
      workoutText : {
        color:'white',
        fontSize: 14,
        fontWeight: 'bold'
      }, 
      exerciseEntry : {
        marginTop: 10
      }
})
