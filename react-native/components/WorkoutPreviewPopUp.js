import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { Colors } from '../constants/Colors';

const Exercise = (props) => {
  const exercise = props.exercise
  const index = props.index

  return (
    <View key={index}>
      {exercise != null ?
        <View style={styles.exercise}>
          <View style={styles.exerciseNumberBox}>
            <Text style={styles.exerciseNumber}>{index + 1}</Text>
          </View>
          <View style={styles.exerciseDetails}>
            <Text style={styles.exerciseName}>{exercise.exerciseInfo.name}</Text>
            <View style={styles.exerciseStats}>
              <Text style={styles.exerciseStat}>Sets: {exercise.sets}</Text>
              <Text style={styles.exerciseStat}>Reps: {exercise.repRange}</Text>
              <Text style={styles.exerciseStat}>Rest: {exercise.restMinutes} min</Text>
            </View>
          </View>
        </View>
        :
        <View></View>
      }
    </View>
  )
}

function WorkoutPreviewPopUp({ isVisible, workout, togglePopup, weekNumber }) {
  return (
    <Modal isVisible={isVisible}>
      {workout != null ?
        <View style={styles.popupContainer}>
          <View style={{ margin: 10 }}>
            <Text style={styles.title}>{workout.title}</Text>
            <ScrollView style={styles.exerciseList}>
              {workout.userExercises.items.map((exercise, index) => (
                <Exercise exercise={exercise} key={index} index={index} />
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
    minHeight: "50%",
    maxHeight: '80%',
    width: "80%",
    backgroundColor: Colors.background,
    alignSelf: "center",
    borderRadius: "10%",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: .5,
    shadowRadius: 5,
  },
  title: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold"
  },
  exerciseList: {
    flexDirection: "column",
    marginBottom: 20,
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
    marginVertical: 10
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
    alignSelf: "center",
    padding: 5,
    fontWeight: "bold",

  },
  exerciseDetails: {
    flexDirection: "column",
    marginVertical: 10
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