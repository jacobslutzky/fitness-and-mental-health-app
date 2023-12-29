import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons'
import Collapsible from 'react-native-collapsible';
import { Colors } from '../constants/Colors';
import * as queries from "../../src/graphql/queries";
import { useQuery, gql } from "@apollo/client";



const SelectExercise = ({ callbackSelectedExercise, searchResult, closeSelectExercise }) => {
  const [ismuscleWorkedDropdownCollapsed, setIsmuscleWorkedDropdownCollapsed] = useState(true);
  const [isWorkoutTypeDropdownCollapsed, setIsWorkoutTypeDropdownCollapsed] = useState(true);
  const [selectedMuscleWorked, setSelectedMuscleWorked] = useState(null)
  const [selectedWorkoutType, setSelectedWorkoutType] = useState(null)
  const [muscleWorkedDropdownKey, setmuscleWorkedDropdownKey] = useState(0);
  const [workoutTypeDropdownKey, setWorkoutTypeDropdownKey] = useState(0);
  const [exercises, setExercises] = useState([])
  const [musclesWorked, setMusclesWorked] = useState([])
  const [workoutTypes, setWorkoutTypes] = useState([])

  const { data, loading, error, refetch } = useQuery(gql`${queries.listExerciseInfos}`,
    {
      variables: {
        limit: 200,
      }
    })

  useEffect(() => {
    if (loading == false) {
      const exerciseInfos = data.listExerciseInfos.items

      setMusclesWorked([...new Set(exerciseInfos.flatMap(exercise => exercise.muscleWorked.split('/')))])
      setWorkoutTypes([...new Set(exerciseInfos.flatMap(exercise => exercise.workoutType.split('/')))])
      setExercises(exerciseInfos)
    }
  }, [data]);

  useEffect(() => {
    if (closeSelectExercise) {
      collapseAll()
    }
  }, [closeSelectExercise]);

  const togglemuscleWorkedDropdown = () => {
    setIsmuscleWorkedDropdownCollapsed(!ismuscleWorkedDropdownCollapsed);
    setmuscleWorkedDropdownKey((prevKey) => prevKey + 1);
  };

  const toggleWorkoutTypeDropdown = () => {
    setIsWorkoutTypeDropdownCollapsed(!isWorkoutTypeDropdownCollapsed);
    setWorkoutTypeDropdownKey((prevKey) => prevKey + 1);

  };

  const handleMuscleWorkedSelected = (muscleWorked) => {
    if (selectedMuscleWorked != null) {
      setSelectedMuscleWorked(null)
    }
    else {
      setSelectedMuscleWorked(muscleWorked)
    }
  }

  const handleWorkoutTypeSelected = (workoutType) => {
    if (selectedWorkoutType != null) {
      setSelectedWorkoutType(null)
    }
    else {
      setSelectedWorkoutType(workoutType)
    }
  }

  const handleExerciseSelected = (exercise) => {
    collapseAll()
    callbackSelectedExercise(exercise)
  }

  const collapseAll = () => {
    setSelectedMuscleWorked(null)
    setSelectedWorkoutType(null)
    setIsWorkoutTypeDropdownCollapsed(true)
    setIsmuscleWorkedDropdownCollapsed(true)
  }

  
  useEffect(() => {
    setExercises(exercises => {
      const tempExercises = [...exercises]
      tempExercises.sort((exerciseA, exerciseB) => {
        return exerciseA.id.toLowerCase().localeCompare(exerciseB.id.toLowerCase())
      })
      return tempExercises
    })
  }, [musclesWorked])

  const muscleWorkedItem = ({ item }) => (
    <TouchableOpacity style={[styles.dropdownContent, selectedMuscleWorked != null ? styles.highlightedItem : {}]} onPress={() => handleMuscleWorkedSelected(item)}>
      <Text style={styles.dropdownContentText}>{item}</Text>
    </TouchableOpacity>
  );

  const workoutTypeItem = ({ item }) => (
    <TouchableOpacity style={[styles.dropdownContent, selectedWorkoutType != null ? styles.highlightedItem : {}]} onPress={() => handleWorkoutTypeSelected(item)}>
      <Text style={styles.dropdownContentText}>{item}</Text>
    </TouchableOpacity>
  );

  const exerciseItem = ({ item }) => (
    <TouchableOpacity style={styles.exerciseItem} onPress={() => handleExerciseSelected(item)}>
      <MaterialCommunityIcons name="weight-lifter" />
      <Text style={styles.exerciseItemText}>{item.name}</Text>
    </TouchableOpacity>
  );
  
  return (
    <ScrollView >
      <TouchableOpacity style={styles.dropdownButton} onPress={togglemuscleWorkedDropdown}>
        <Text style={styles.dropdownButtonText}>SELECT MUSCLE GROUP</Text>
        <Ionicons name={ismuscleWorkedDropdownCollapsed ? "caret-down-outline" : "caret-up-outline"} color="white" size={15} />
      </TouchableOpacity>
      <Collapsible collapsed={ismuscleWorkedDropdownCollapsed} key={"muscles" + muscleWorkedDropdownKey}>
        <FlatList
          data={selectedMuscleWorked === null ? musclesWorked : [selectedMuscleWorked]}
          renderItem={muscleWorkedItem}
          keyExtractor={(item) => item.name}
          extraData={selectedMuscleWorked}
          scrollEnabled={false}
        />
      </Collapsible>

      <TouchableOpacity style={styles.dropdownButton} onPress={toggleWorkoutTypeDropdown}>
        <Text style={styles.dropdownButtonText}>SELECT TYPE OF WORKOUT</Text>
        <Ionicons name={isWorkoutTypeDropdownCollapsed ? "caret-down-outline" : "caret-up-outline"} color="white" size={15} />

      </TouchableOpacity>
      <Collapsible collapsed={isWorkoutTypeDropdownCollapsed} key={"workout" + workoutTypeDropdownKey}>
        <FlatList
          data={selectedWorkoutType === null ? workoutTypes : [selectedWorkoutType]}
          renderItem={workoutTypeItem}
          keyExtractor={(item) => item.name}
          extraData={selectedWorkoutType}
          scrollEnabled={false}
        />
      </Collapsible>
      <FlatList
        data={exercises.filter(exercise => (selectedMuscleWorked == null || exercise.muscleWorked.split("/").includes(selectedMuscleWorked))
          && (selectedWorkoutType == null || exercise.workoutType.split("/").includes(selectedWorkoutType))
          && searchResult.toLowerCase().split(" ").every(word => exercise.name.toLowerCase().indexOf(word) > -1))}
        extraData={exercises}
        renderItem={exerciseItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  input: {
    height: 40,
    marginLeft: 5
  },
  dropdownContent: {
    backgroundColor: "rgba(219, 188, 114, 0.6)",
    padding: 5,
    borderRadius: 5,
    marginTop: 10,

  },
  dropdownButton: {
    backgroundColor: "#8B8888",
    borderRadius: 5,
    padding: 5,
    flexDirection: "row",
    yContent: "space-between",
    marginVertical: 5
  },
  exerciseItem: {
    backgroundColor: "#8B8888",
    borderRadius: 5,
    padding: 5,
    flexDirection: "row",
    marginVertical: 5
  },
  exerciseItemText: {
    fontSize: 12,
    marginLeft: 5,
    color: "white"
  },
  dropdownButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12
  },
  dropdownContentText: {
    fontSize: 10,
    marginLeft: 5,
  },
  highlightedItem: {
    backgroundColor: Colors.primary
  }
})
export default SelectExercise;