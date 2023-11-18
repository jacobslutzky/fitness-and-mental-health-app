import React, { useState,useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet,TextInput,FlatList} from 'react-native';
import Modal from 'react-native-modal';
import { useTheme } from '@react-navigation/native';
import {Ionicons,MaterialCommunityIcons} from 'react-native-vector-icons'
import Collapsible from 'react-native-collapsible';
import { Colors } from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
import * as queries from "../../src/graphql/queries";
import { useQuery, gql, useMutation } from "@apollo/client";



const SelectExercise = ({callbackSelectedExercise, searchResult, closeSelectExercise}) => {
    
    const [ismuscleWorkedDropdownCollapsed, setIsmuscleWorkedDropdownCollapsed] = useState(true);
    const [isWorkoutTypeDropdownCollapsed, setIsWorkoutTypeDropdownCollapsed] = useState(true);
    const [selectedmuscleWorked, setSelectedmuscleWorked] = useState(null)
    const [selectedWorkoutType, setSelectedWorkoutType] = useState(null)
    const [muscleWorkedDropdownKey, setmuscleWorkedDropdownKey] = useState(0);
    const [workoutTypeDropdownKey, setWorkoutTypeDropdownKey] = useState(0);
    const [exercises, setExercises] = useState([])
    const [musclesWorked, setMusclesWorked] = useState([])
    const [workoutTypes, setWorkoutTypes] = useState([])


    const { data, loading, error, refetch } = useQuery(gql`${queries.listExerciseInfos}`)
    if (loading) {
        console.log("loading");
      }
    
      if (error) {
         console.log("Error: " + error.message)
      }
    
    useEffect(() => {
        // const filteredData = data?.listWorkouts?.items?.filter(workout => workout.programWeekWorkoutsId === null);
        if(loading==false){
          const exerciseInfos = data.listExerciseInfos.items
          
          setMusclesWorked([...new Set(exerciseInfos.map(exercise => exercise.muscleWorked))])
          setWorkoutTypes([...new Set(exerciseInfos.map(exercise => exercise.workoutType))])
          setExercises(exerciseInfos)
          console.log("hehe")
          console.log(exerciseInfos.map(exercise => exercise.muscleWorked))
        }
       
        console.log(workoutTypes)
        console.log(exercises)
      }, [data]);



    useEffect(() => {
      collapseAll()
    },[closeSelectExercise]);
    

    const togglemuscleWorkedDropdown = () => {
        setIsmuscleWorkedDropdownCollapsed(!ismuscleWorkedDropdownCollapsed);
        setmuscleWorkedDropdownKey((prevKey) => prevKey + 1);

      };
      const toggleWorkoutTypeDropdown = () => {
        setIsWorkoutTypeDropdownCollapsed(!isWorkoutTypeDropdownCollapsed);
        setWorkoutTypeDropdownKey((prevKey) => prevKey + 1);

      };
      const handlemusclesWorkedelected = (muscleWorked) => {
        if(selectedmuscleWorked != null){
          setSelectedmuscleWorked(null)
        }
        else{
          setSelectedmuscleWorked(muscleWorked)
        }
        console.log(selectedmuscleWorked)
      }
      const handleWorkoutTypeSelected = (workoutType) => {
        if(selectedWorkoutType != null){
          setSelectedWorkoutType(null)
        }
        else{
          setSelectedWorkoutType(workoutType)
        }
        console.log(selectedmuscleWorked)
      }
      const handleExerciseSelected = (exercise) => {
        collapseAll()
        console.log("test")
        console.log(exercise)
        callbackSelectedExercise(exercise)
      }
      const collapseAll = () => {
        setSelectedmuscleWorked(null)
        setSelectedWorkoutType(null)
        setIsWorkoutTypeDropdownCollapsed(true)
        setIsmuscleWorkedDropdownCollapsed(true)
      }
      const muscleWorkedItem = ({ item }) => (
        <TouchableOpacity style={[styles.dropdownContent,selectedmuscleWorked!=null?styles.highlightedItem:{}]} onPress={()=>handlemusclesWorkedelected(item)}>
          <Text style={styles.dropdownContentText}>{item}</Text>
        </TouchableOpacity>
      );
      
      const workoutTypeItem = ({ item }) => (
        <TouchableOpacity style={[styles.dropdownContent,selectedWorkoutType!=null?styles.highlightedItem:{}]} onPress={()=>handleWorkoutTypeSelected(item)}>
          <Text style={styles.dropdownContentText}>{item}</Text>
        </TouchableOpacity>
      );
      
      const exerciseItem = ({ item }) => (
        <TouchableOpacity style={styles.exerciseItem} onPress={()=>handleExerciseSelected(item)}>
            <MaterialCommunityIcons name="weight-lifter"/>
          <Text style={styles.exerciseItemText}>{item.name}</Text>
        </TouchableOpacity>
      );
    return(
        <ScrollView >
    <TouchableOpacity style={styles.dropdownButton} onPress={togglemuscleWorkedDropdown}>
     <Text style={styles.dropdownButtonText}>SELECT MUSCLE GROUP</Text>
     <Ionicons name={ismuscleWorkedDropdownCollapsed?"caret-down-outline": "caret-up-outline"} color="white" size={15} />
    </TouchableOpacity>
    <Collapsible collapsed={ismuscleWorkedDropdownCollapsed} key={muscleWorkedDropdownKey}>
        <FlatList
          data={selectedmuscleWorked === null ? musclesWorked : [selectedmuscleWorked]}
          renderItem={muscleWorkedItem}
          keyExtractor={(item, index) => index.toString()}
          extraData={selectedmuscleWorked}
          scrollEnabled={false} 
        />
      </Collapsible>

     <TouchableOpacity style={styles.dropdownButton} onPress={toggleWorkoutTypeDropdown}>
     <Text style={styles.dropdownButtonText}>SELECT TYPE OF WORKOUT</Text>
     <Ionicons name={isWorkoutTypeDropdownCollapsed?"caret-down-outline": "caret-up-outline"} color="white" size={15} />

    </TouchableOpacity>
    <Collapsible collapsed={isWorkoutTypeDropdownCollapsed} key={workoutTypeDropdownKey}>
        <FlatList
          data={selectedWorkoutType === null ? workoutTypes : [selectedWorkoutType]}
          renderItem={workoutTypeItem}
          keyExtractor={(item, index) => index.toString()}
          extraData={selectedWorkoutType}
          scrollEnabled={false} 
        />
      </Collapsible>
    <FlatList
        data={exercises.filter(exercise=>(selectedmuscleWorked == null || exercise.muscleWorked==selectedmuscleWorked.name ) 
          && (selectedWorkoutType==null || exercise.workoutType==selectedWorkoutType.name) 
          && exercise.name.toLowerCase().includes(searchResult.toLowerCase()))
        }
        renderItem={exerciseItem}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false} 
      />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        
    },
    input: {
        height: 40,
        marginLeft: 5
      },
      dropdownContent: {
        backgroundColor:"rgba(219, 188, 114, 0.6)",
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
        
      },
      dropdownButton: {
        backgroundColor:"#8B8888",
        borderRadius: 5,
        padding: 5,
        flexDirection:"row",
        yContent:"space-between",
        marginVertical: 5
      },
      exerciseItem: {
        backgroundColor:"#8B8888",
        borderRadius: 5,
        padding: 5,
        flexDirection:"row",
        marginVertical: 5
      },
      exerciseItemText: {
        fontSize: 12,
        marginLeft: 5,
        color:"white"
      },
      dropdownButtonText:{
        color: "white",
        fontWeight:"bold",
        fontSize: 12
      },
      dropdownContentText:{
        fontSize: 10,
        marginLeft: 5,
      },
      highlightedItem:{
        backgroundColor:Colors.primary
      }
})
export default SelectExercise;