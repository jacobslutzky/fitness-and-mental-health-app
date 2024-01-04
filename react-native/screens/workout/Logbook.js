import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as mutations from "../../../src/graphql/mutations";
import { useState, useEffect, useRef } from 'react';
import uuid from 'react-native-uuid';
import SelectExercise from '../../components/SelectExercise'
import { Feather, Ionicons } from 'react-native-vector-icons'


export default function Logbook({ route, navigation }) {
    const [searchResult, setSearchResult] = useState("")
    const [searchingForExercise, setSearchingForExercise] = useState(false)
    const textInputRef = useRef(null);
    const [exerciseInfo, setExerciseInfo] = useState(null)

    const handleExerciseSelected = (exercise) => {
        navigateToAllProgress(exercise)
    }

    const navigateToAllProgress = (exercise) => {
        navigation.navigate("ExerciseProgress", { exercise: exercise, logFlag: true, exerciseData: [] })
    }
      
    const handleFindExercisePressIn = () => {
        setSearchingForExercise(true)
        setSearchResult("")
    
      }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.mainTitleContainer}>
                <Text style={styles.mainTitleText}>Logs</Text>
            </View>
            <View style={styles.line}></View>
            <View style={[styles.input, { flexDirection: "row", alignItems: "center" },
            searchingForExercise ? { borderRadius: 10, padding: 5 } : {}]}>
              {searchingForExercise ? (
                <TouchableOpacity onPress={() => { textInputRef.current.blur(); setSearchingForExercise(false); setSearchResult(exerciseInfo != null ? exerciseInfo.name : "") }}>
                  <Ionicons name="chevron-back-circle-outline" color="white" size={20} />
                </TouchableOpacity>
              ) : (<></>)}
              <TextInput
                ref={textInputRef}
                style={styles.exerciseInput}
                value={searchResult}
                onChangeText={setSearchResult}
                onPressIn={() => { handleFindExercisePressIn() }}
                placeholder={!searchingForExercise ? "Find Exercise" : "Search"}
                placeholderTextColor="lightgrey"
                autoCapitalize='none'
              />
              {exerciseInfo != null && !searchingForExercise ?
                <TouchableOpacity onPress={() => { setExerciseInfo(null); setSearchResult("") }} >
                  <Feather name="x-circle" size={17} color={"white"} />
                </TouchableOpacity> : <></>
              }
            </View>
            <SelectExercise searchResult={searchResult} callbackSelectedExercise={handleExerciseSelected} closeSelectExercise={searchingForExercise} />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container : { 
        height: '100%', 
        padding: 20 
    },
    mainTitleText : {
        color: 'white',
        fontSize: 30
    },
    mainTitleContainer : {
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        borderColor: 'white',
        color: Colors.text,
        marginBottom: 10
      },
      exerciseInput: {
        height: 40,
        marginLeft: 5,
        width: "90%",
        color: Colors.text,
        fontWeight: "bold"
      },
      line : {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2.5,
        marginBottom: 30,
        width: '13%'
      }
});