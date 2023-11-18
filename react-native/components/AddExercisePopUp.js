import React, { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity,ScrollView, StyleSheet,TextInput, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import { useTheme } from '@react-navigation/native';
import {Feather,Ionicons} from 'react-native-vector-icons'
import SelectExercise from './SelectExercise'
import Collapsible from 'react-native-collapsible';
import { Colors } from '../constants/Colors';
import { secondsToMinutes } from 'date-fns';



const AddExercisePopUp = ({isVisible, closeAddExercisePopUp, startingExerciseInput,startingExerciseInfo,saveExercise}) => {
  const [searchingForExercise, setSearchingForExercise] = useState(null)
  const [exerciseInfo, setExerciseInfo] = useState(null)
  const [searchResult, setSearchResult] = useState(null)
  const [repRange, setRepRange] = useState(null)
  const [sets, setSets] = useState(null)
  const [RIR, setRIR] = useState(null)
  const [restMinutes, setRestMinutes]  = useState(null)
  const [notes, setNotes] = useState(null)
  //]
  useEffect(() => {
    if(startingExerciseInput!=null){
      setExerciseInfo(startingExerciseInfo)
      setSearchResult(startingExerciseInfo.name)
      setRepRange(startingExerciseInput.repRange)
      setSets(startingExerciseInput.sets.toString())
      setRIR(startingExerciseInput.RIR)
      setRestMinutes(startingExerciseInput.restMinutes.toString())
      setNotes(startingExerciseInput.notes)
    }
    else{
      
      setExerciseInfo(null)
      setSearchResult("")
      setRepRange("")
      setSets("")
      setRIR("")
      setRestMinutes("")
      setNotes("")
    }
    
  },[isVisible]);

  const toggleFindExercisePress = () => {
    setSearchingForExercise(!searchingForExercise)
    console.log(searchingForExercise)
  }
  const handleExerciseSelected = (exercise) => {
    toggleFindExercisePress()
    setExerciseInfo(exercise)
    setSearchResult(exercise.name)
  }

    return (
      <View>
        <Modal isVisible={isVisible}>
      <View style={styles.outerContainer}>
      <TouchableOpacity onPress={closeAddExercisePopUp}>
        <Feather name = "x-circle" size = {17} color = {"white"}/>            
        </TouchableOpacity>
      <Text style={styles.headerOne}>WORKOUT CREATION</Text>
        <View style={[styles.innerContainer]}>
        <Text style={styles.headerTwo}>CREATE NEW EXERCISE</Text>
        <Text style={styles.labels}>Exercise</Text>
        <View style={[styles.input,{flexDirection:"row",alignItems:"center"},
        searchingForExercise?{borderBottomWidth:0,borderBottomLeftRadius:0,borderBottomRightRadius:0,padding:5}:{}]}>
        {searchingForExercise?(
        <TouchableOpacity onPress={()=>{toggleFindExercisePress(); setSearchResult(exerciseInfo?exerciseInfo:"")}}>
        <Ionicons name="chevron-back-circle-outline" color="white" size={20} />
        </TouchableOpacity>
        ):(<></>)}
        <TextInput
        style={styles.exerciseInput}
        value={searchResult}
        onChangeText={setSearchResult}
        onPressIn={()=>{setSearchingForExercise(true); setSearchResult("")}}
        placeholder="Find Exercise"
        placeholderTextColor="lightgrey"
        autoCapitalize='none'
        />
        {exerciseInfo!=null&&!searchingForExercise?
        <TouchableOpacity onPress={()=>{setExerciseInfo(null); setSearchResult("")}} >
         <Feather name = "x-circle" size = {17} color = {"white"}/>
         </TouchableOpacity>:<></>
        }
        </View>
      
      <Collapsible  style={styles.scrollContainer} collapsed={!searchingForExercise}>
        <View>
      <SelectExercise searchResult={searchResult} callbackSelectedExercise={handleExerciseSelected} closeSelectExercise={searchingForExercise}/>
      </View>
    </Collapsible>
    
    {!searchingForExercise ? (
    <View style={{marginBottom:10}}>
      <View style={styles.name}>
    <View style = {styles.labelAndInput}>
    <Text style={styles.labels}>Reps</Text>
      <TextInput
        style={styles.input}
        value={repRange}
        onChangeText={setRepRange}
        
      />
     
      </View>
      <View style = {styles.labelAndInput}>
      <Text style={styles.labels}>Sets</Text>
      <TextInput
        style={[styles.input, {width: "97%"}]}
        value={sets}
        onChangeText={setSets}
        // keyboardType="numeric"
      />
      </View>
      </View>
      <View style={styles.name}>
    <View style = {styles.labelAndInput}>
    <Text style={styles.labels}>Rest</Text>
      <TextInput
        style={[styles.input, {width: "97%"}]}
       value={restMinutes}
       onChangeText={setRestMinutes}
      keyboardType="numeric"
      />
     
      </View>
      <View style = {styles.labelAndInput}>
      <Text style= {styles.labels}>RIR (Optional)</Text>
      <TextInput
        style={[styles.input, {width: "97%"}]}
        value={RIR}
        onChangeText={setRIR}
      />
      </View>
      </View>
      <Text style={styles.labels}>Cover Image</Text>
    <TouchableOpacity style={[styles.button, {justifyContent:"center"}]}>
      <Feather name = "upload" size = {17}/>
    <Text style={styles.uploadImageText}>Upload</Text>
   </TouchableOpacity>
   <Text style={styles.labels}>Notes (Optional)</Text>
      <TextInput
        style={[styles.input, {height: 80,textAlignVertical: 'top'}]}
        
       value={notes}
       onChangeText={setNotes}
       
      />
      </View>
        )
   : (
    <></>
   ) }
    </View>
    {!searchingForExercise ? (
    <TouchableOpacity style={styles.bottomButton} onPress={()=>saveExercise({exerciseInfo, repRange,sets,RIR,restMinutes, notes})}>
    <Text style={styles.bottomButtonText}>Save Exercise</Text>
   </TouchableOpacity>
   )
    :(<></>)}
   
          </View>
        </Modal>
      </View>
    );
  };
  export default AddExercisePopUp;
  
  const styles = StyleSheet.create({
    outerContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: "#383838",
      height: "80%",
      width: "90%",
      borderRadius: 15,
      alignSelf: "center",
      padding:10
    },
    innerContainer: {
      backgroundColor: "#595555",
      borderRadius: 10,
      height: "85%",
      width: "90%",
      paddingHorizontal: 10,

    },
    headerOne:
    {
      alignSelf: "center",
      fontWeight: "bold",
      color: "white",
      fontSize: 20,
      marginBottom: 10
    },
    headerTwo:
    {
      alignSelf: "center",
      fontWeight: "bold",
      color: "white",
      fontSize: 16,
      marginTop:10
    },
    labels: {
      fontSize: 15,
      color: "white",
      marginTop:"10%",
      marginBottom:"5%",
      color: Colors.text
    },
    name: {
      flexDirection: "row",
      gap: "20%"
    },
    aboveButtonText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderRadius: 15,
      padding: 10,
      borderColor: 'white',
      color: Colors.text
    },
    exerciseInput: {
      height: 40,
      marginLeft: 5,
      width: "90%",
      color: Colors.text,
      fontWeight:"bold"
    },
    bottomButton: {
      borderWidth: 1,
      borderRadius: 15,
      borderColor: 'white',
      width: "90%",
      marginTop: "5%",
      paddingVertical: 5
    },
    bottomButtonText: {
      color: "white",
      textAlign: "center",
      fontWeight:"bold"
    },
    button: {
      height: 40,
      borderWidth: 1,
      borderRadius: 15,
      padding: 10,
      borderColor: 'white',
     
      flexDirection: "row",
      
    },
    uploadImageText: {
      alignItems: "center",
      textAlign: "center"
    },
    findExerciseText: {
      color: "#8B8888",
    },
    scrollContainer : {
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      borderColor: "white",
      padding: 5,
      height: 400
      
  },
  labelAndInput: {
    flexDirection: "column",
    flex:1,
    width: "100%",
     gap: 0
    }
  
  })
  