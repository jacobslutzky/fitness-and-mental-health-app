import React, { useState } from "react";
import {StyleSheet,TouchableOpacity, Text, View,ScrollView, ImageBackground } from "react-native";
import Modal from "react-native-modal";
import { Colors } from '../constants/Colors';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../../src/graphql/queries";
import * as mutations from "../../src/graphql/mutations";
import { SearchBar } from 'react-native-elements';
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { AntDesign } from '@expo/vector-icons';

const Week = (props) => {
    const [exercises, setExercises] = useState(0)

    const cardPress = () => {
        props.togglePopup()
        props.setWorkout(props.workout, props.weekNumber)
    }

    return (
            <TouchableOpacity style={styles.weekContainer} onPress={() => cardPress()}>
                {/* Week Card */}
                <ImageBackground source={require("../../assets/workoutBackground.png")} style={styles.weekCard} resizeMode="cover" imageStyle={{width: '100%', height: '100%', borderRadius: 15, opacity: 0.7}}>
                    <View style={styles.cardHeader}>

                        {/* Difficulty Container */}
                        <View style={styles.difficultyContainer}>
                            <Text style={[styles.bodyText, {marginBottom: 0, marginTop: 5, fontWeight: 'bold'}]}>Difficulty:</Text>
                            <Text style={styles.bodyText}>--</Text>
                        </View>

                        {/* Exercises Container */}
                        <View style={styles.exerciseNumberContainer}>
                            <Text style={[styles.bodyText, {marginBottom: 0, marginTop: 5, fontWeight: 'bold'}]}>Exercises:</Text>
                            <Text style={styles.bodyText}>--</Text>
                        </View>

                        {/* Duration Container */}
                        <View style={styles.durationContainer}>
                            <Text style={[styles.bodyText, {marginBottom: 0, marginTop: 5, fontWeight: 'bold'}]}>Duration:</Text>
                            <Text style={styles.bodyText}>--</Text>
                        </View>
                    </View>
                    <View style={{height: '40%'}}></View>
                    <View style={styles.cardFooter}>
                        <Text style={{color: 'white',fontWeight: 'bold'}}>{props.workout}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
    )
}

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
                <Text style={styles.exerciseName}>{data.getExercise.name}</Text>
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

function CreateWorkoutPopup({ isVisible, setWorkout, togglePopup, title, weekNumber }) {
    let communityCards = []

    const [newWorkoutActive, setNewWorkoutActive] = useState(false)
    const [workouts, setWorkouts] = useState(["Upper", "Lower", "Full"])
    const [tasksFiltered, setTasksFiltered] = useState(communityCards);
    const [tasksSearched, setTasksSearched] = useState(communityCards)
    const [isAll, setIsAll] = useState(true)
    const [search, setSearch] = useState("")

    const handleFilter = ( command ) => {
        if(command == 'all'){
        setTasksFiltered([...communityCards])
        setTasksSearched([...communityCards])
        setIsAll(true)
        }
        else if(command == 'not completed'){
        communityCardsTemp = new Array();
        for(let i = 0; i < communityCards.length; i++){
            if(isPressed[i] == false){
            communityCardsTemp.push(communityCards[i])
            }
        }
        setTasksFiltered([...communityCardsTemp])
        setTasksSearched([...communityCardsTemp])
        setIsAll(false)
        }
    }

    const updateSearch = (text) => {
        console.log("tasks filtered ", tasksSearched)
        if(!tasksFiltered) return;

        const updatedData = tasksFiltered.filter((item) => {
        const item_data = `${item.title.toUpperCase()})`;
        const text_data = text.toUpperCase().split(" ").join('');
        console.log(text_data)
        return item_data.indexOf(text_data) > -1;
        });
        
        setTasksSearched(updatedData)
        
        setSearch(text)
    };

    return (
        <Modal isVisible={isVisible}>
            <View style={styles.popupContainer}>
                <ScrollView style={{margin: 10}}>
                    <TouchableOpacity style={{width: '100%'}} onPress={() => togglePopup()}>
                        <AntDesign name="closecircleo" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                        <Text style={styles.title}>WORKOUT SELECTION</Text>
                    </View>
                    <View style={styles.searchContainer}>
                        <SearchBar
                        placeholder="Search"
                        onChangeText={updateSearch}
                        containerStyle={{backgroundColor: '#444444', borderBottomColor: 'transparent', borderTopColor: 'transparent'}}
                        inputContainerStyle={styles.searchBar}
                        value={search}
                        round={true} 
                        />
                    </View>

                    <ScrollView persistentScrollbar={true}>
                        <View style={styles.weeksContainer}>
                            {
                                workouts.map((item, index) => (
                                    <Week workout={item} index={index} togglePopup={togglePopup} setWorkout={setWorkout} weekNumber={weekNumber}/>
                                ))
                            }
                        </View>
                    </ScrollView>

                    <TouchableOpacity style={styles.closeButton} onPress={() => setWorkouts(workouts => [...workouts, ""])}>
                        <Text style={styles.closeButtonText}>Create New Workout</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    popupContainer: {
    height: "80%", 
    width: "100%", 
    backgroundColor: '#444444',
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
    width: "60%",
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: "center",
  },
  closeButtonText: {
    textAlign: "center",
    verticalAlign: "center",
    color: 'white'
  },
  searchBar : {
    backgroundColor: "#444444",
    textAlign: "left",
    justifyContent: "center",
    borderRadius: 15,
    width: '95%',
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderBottomWidth: 1
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    backgroundColor: "#444444",
    marginBottom: 10
  },
  bodyText : {
    color: 'white',
    marginBottom: 10
},
sectionTitleText : {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
},
sectionTitleContainer : {
    alignItems: 'center'
},
currentStepContainer : {
    alignItems: 'center'
},
stepText : {
    color: 'grey',
    fontStyle: 'italic',
    opacity: '0.6',
    marginTop: 5
}, 
programTitleFieldContainer : {
    alignItems: 'center'
},
programTitleField : {
    borderColor: 'grey',
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    width: '80%',
    color: 'white',
    paddingHorizontal: 10
},
programTitleContainer : {
    alignItems: 'center'
},
programDescriptionTextContainer: {
    alignItems: 'center',
    marginTop: 30
},
programDescriptionField : {
    borderColor: 'grey',
    borderWidth: 1,
    height: 150,
    borderRadius: 10,
    width: '80%',
    color: 'white',
    paddingHorizontal: 10
},
programDescriptionFieldContainer : {
    alignItems: 'center'
},
coverImageTextContainer : {
    alignItems: 'center',
    marginTop: 30
},
buttonContainer : {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
},
uploadButton : {
    borderColor: 'grey',
    borderWidth: 1,
    width: '37%',
    height: 50,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
}, 
generateButton : {
    borderColor: 'grey',
    borderWidth: 1,
    width: '37%',
    height: 50,
    marginLeft: 10, 
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
},
continueContainer: {
    alignItems: 'center'
},
continueButton : {
    backgroundColor: Colors.primary,
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
},
uploadButtonText: {
    color: Colors.primary,
    marginLeft: 10
},
generateButtonText: {
    color: Colors.primary
}, 
addWeekContainer : {
    alignItems: 'center'
}, 
addWeekButton : {
    backgroundColor: 'grey',
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginBottom: -30,
    alignItems: 'center',
    justifyContent: 'center'
},
weeksContainer : {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
},
weekCard : {
    width: '90%',
    height: 140,
    borderRadius: 15
},
weekContainer : {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    borderRadius: 15
},
weekNumberText : {
    color: Colors.primary,
    fontSize: 16
},
weekNumberContainer : {
    alignItems: 'center',
    justifyContent: 'center'
},
exerciseNumberContainer : {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center'
}, 
difficultyContainer : {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
}, 
weekNumberContainer : {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center'
}, 
durationContainer : {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center'
},
exerciseCard : {
    height: 50,
    width: '75%',
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignItems: 'center',
},
exerciseList : {
    alignItems: 'center'
},
exerciseIcon : {
    height: '70%',
    width: '15%',
    backgroundColor: 'grey',
    opacity: '0.3',
    borderRadius: 10
},
exerciseTextContainer : {
    justifyContent: 'center',
    marginLeft: 10,
    width: '70%',
}, 
informationContainer : {
    alignItems: 'center',
    justifyContent: 'center',
    width: '7.5%'
},
trashContainer : {
    alignItems: 'center',
    justifyContent: 'center',
    width: '7.5%'
}, 
addContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    marginTop: 10,
    marginLeft: 30
}, 
addTextContainer : {
    width: '90%',
    marginLeft: 10
},
cardHeader : {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
},
cardFooter : {
    width: '100%',
    marginLeft: 15
},
communityCard: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    borderColor: Colors.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default CreateWorkoutPopup