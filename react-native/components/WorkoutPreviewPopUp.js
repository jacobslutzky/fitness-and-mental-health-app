import React, { useState } from "react";
import {StyleSheet,TouchableOpacity, Text, View,ScrollView } from "react-native";
import Modal from "react-native-modal";
import { Colors } from '../constants/Colors';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../../src/graphql/queries";
import * as mutations from "../../src/graphql/mutations";

const Exercise = (props) => {
  console.log("exercise reached")


  const label = props.label
  const workout = props.workout
  const title = props.title
  const weekNumber = props.weekNumber
  const index = props.index

  const { data, loading, error } = useQuery(gql`${queries.getExercise}`, {
    variables: { id: title != "womenintermediate4xweek" ? `${title}::${weekNumber}::${workout}::${label}` : `${label}-${workout}-week${weekNumber}-${title}`}
  }); 

  return (
    <View key={index}>
      {data && data.getExercise ?
        <View style={styles.exercise}>
              <View style={styles.exerciseNumberBox}>
                <Text style={styles.exerciseNumber}>{index + 1}</Text>
              </View>
              <View style={styles.exerciseDetails}>
                <Text style={styles.exerciseName}>{data.getExercise.name.substring(data.getExercise.name.indexOf(')') + 2)}</Text>
                <View style={styles.exerciseStats}>
                  <Text style={styles.exerciseStat}>Sets: {data.getExercise.sets}</Text>
                  <Text style={styles.exerciseStat}>Reps: {data.getExercise.repRange}</Text>
                  <Text style={styles.exerciseStat}>Rest: {data.getExercise.restMinutes} min</Text>
                </View>
              </View>
          </View>
              :
        <View></View>
        }
            </View>
  )
}

function WorkoutPreviewPopUp({ isVisible, workout, togglePopup, title, weekNumber }) {

 const { data : dataWorkout, loading: loadingWorkout, error: errorWorkout, refetch: refetchWorkout } = useQuery(gql`${queries.getWorkout}`, {
  variables: { id: title != "womenintermediate4xweek" ? `${title}::${weekNumber}::${workout}` : `${workout}-week${weekNumber}-${title}`},
  enabled: false
}); 


console.log(workout, title, weekNumber)


 return (
  
    <Modal isVisible={isVisible}>
      {dataWorkout && dataWorkout.getWorkout ? 
      <View style={styles.popupContainer}>
        <View style={{margin: 10}}>
        <Text style={styles.title}>{workout}</Text>
        <ScrollView style={styles.exerciseList}>
          {dataWorkout.getWorkout.exerciseLabels.map((exercise, index) => (
            <Exercise title={title} label={exercise} workout={workout} weekNumber={weekNumber} index={index}/>
          ))}
        </ScrollView>
        
        <TouchableOpacity style={styles.closeButton} onPress={() => togglePopup(workout)}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
        </View>
      </View>
      :
      <View></View>
      }
    </Modal>
  );
}

const styles = StyleSheet.create({
    popupContainer: {
    height: "60%", 
    width: "80%", 
    backgroundColor: Colors.background,
    alignSelf: "center",
   borderRadius: "10%",
   shadowColor: "grey",
   shadowOffset: {width: 0, height: 0},
   shadowOpacity: .5,
   shadowRadius:5,

    
  },
  title: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold"
  },
  exerciseList: {
    flexDirection: "column",
    marginBottom:20,
    maxHeight: "90%",
    borderTopColor: "grey",
    borderTopWidth: 2
  },
  exerciseNumberBox: {
    width: 24,
    height: 24,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 4,
    marginVertical:10
  },
  exercise: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottomWidth: 2,
    borderBottomColor: "grey"
  },
  exerciseNumber: {
    color: Colors.background,
    fontSize: 12,
    alignSelf:"center",
    padding: 5,
    fontWeight: "bold",

  },
  exerciseDetails: {
    flexDirection: "column",
    marginVertical:10
  },
  exerciseName: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  exerciseStats: {
    flexDirection: "row",
    
  },
  exerciseStat: {
    color: "white",
    fontSize: 12,
    marginRight: 10,
  },
  closeButton: {
    width: "40%",
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: "center",
  },
  closeButtonText: {
    textAlign: "center",
    verticalAlign: "center",
  },
});

export default WorkoutPreviewPopUp