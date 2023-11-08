import { ScrollView, StyleSheet, Image, ImageBackground, TouchableOpacity, Text, View, TextBase } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { Colors } from '../constants/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import SelectWorkoutProgram from '../screens/workout/SelectWorkoutProgram';
import WorkoutProgramInfo from '../screens/workout/WorkoutProgramInfo';
import PreviewSplit from '../screens/workout/PreviewSplit';
import CurrentProgram from '../screens/workout/CurrentProgram';
import DuringWorkout from '../screens/workout/DuringWorkout';
import ExerciseDuringWorkout from '../screens/workout/ExerciseDuringWorkout';
import CreateWorkout from '../screens/workout/CreateWorkout';
import ExerciseProgress from '../screens/workout/ExerciseProgress';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function FitnessPageNavigator({route, navigation}) {
        colors = useTheme().colors


        return (
      
          <Stack.Navigator cardStyle= {{height: "100%"}} screenOptions={{headerShown: false, headerStyle: {
            backgroundColor: colors.background
          }, headerBackTitle: "Back",headerBackImage: () => (
            <Ionicons name="arrow-back" size={24} marginLeft={"10%"} color={colors.primary}/>
          ),
          }}>
          <Stack.Screen name = "SelectWorkoutProgram" component={SelectWorkoutProgram} />
          <Stack.Screen name = "CurrentProgram" component={CurrentProgram}/>
              <Stack.Screen name = "WorkoutProgramInfo" component={WorkoutProgramInfo} options={{ title: "",
                headerShown:true,  headerShadowVisible: false, headerBackTitle: "Back"
              }}/>
              <Stack.Screen name = "PreviewSplit" component={PreviewSplit} options={{ title: "Preview Split",
                headerShown:true,  headerShadowVisible: false, headerBackTitle: "Back"
              }}/>
              <Stack.Screen name = "DuringWorkout" component={DuringWorkout} options={{ title: "",
                headerShown:true,  headerShadowVisible: false, headerBackTitle: "Back"
              }}/>
            <Stack.Screen name = "ExerciseDuringWorkout" component={ExerciseDuringWorkout} options={{
              headerShown:true,  headerShadowVisible: false, headerBackTitle: "Back",  title: ""
            }}/>
            <Stack.Screen name = "CreateWorkout" component={CreateWorkout} options={{
              headerShown:true,  headerShadowVisible: false, headerBackTitle: "Back",  title: ""
            }}/>
            <Stack.Screen name = "ExerciseProgress" component={ExerciseProgress} options={{
              headerShown:true,  headerShadowVisible: false, headerBackTitle: "Back",  title: ""
            }}/>
            </Stack.Navigator>
         
          
          
        );
      }
  
    // const colors = useTheme().colors;

    // const handlePress = ( item ) => {
    //   navigation.navigate(item.screen);
    // }


    // const taskLabels = [
    //   {label: "Workouts", screen: "FitnessWorkouts"},
    //   {label: "Yoga", screen: "FitnessYoga"},
    //   {label: "Favorites", screen: "FitnessFavorites"},
    // ]

    // const achievementName = "You've done 3 workouts this week!"
    // const achievementProgressText = "75% of your weekly goal is complete"
    // const achievementProgress = 75

    // return(
    //   <ScrollView style={styles.container}>
    //     {/* Header */}
    //     <View style={styles.headerContainer}>
    //       <Text style={[styles.header, {color: colors.text}]}>Fitness</Text>
    //     </View>

    //     {/* Achievements */}
    //     <AchievementBubble achievementName={achievementName}
    //                       achievementProgress={achievementProgress}
    //                       achievementProgressText={achievementProgressText}/>


    //       {/* Task List */}
    //     <View style={styles.tasks}>
    //       {taskLabels.map((item, index) => (
    //         <View style={styles.taskButton} key={index} >
    //           <TouchableOpacity onPress={() => handlePress(item)} style={styles.taskButtonContents}>
    //             <View style={{justifyContent: 'center'}}>
    //               <Text style={[styles.buttonText, {color: colors.text}]}>{item.label}</Text>
    //             </View>
    //             <View style={styles.cardArrowContainer}>
    //                 <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
    //             </View>
    //           </TouchableOpacity>
    //         </View>
    //       ))}
    //     </View>

    //   </ScrollView>
    // )

  //}

const styles = StyleSheet.create({
  
    container : {
      flex: 1,
      marginTop: 20,
      justifyCoontent: 'center',
      alignIterms: 'center',
    },
    tabsContainer: {
      marginTop: 10,
      backgroundColor: 'black'
    },
    headerContainer : {
      alignItems: 'center',
      justifyContent: 'center',
    },
    header : {
      fontSize: 40,
      fontWeight: 'bold',
    },
    scene: {
      flex: 1,
    },
    cardsContainer : {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    },
    communityCard : {
      height: 250,
      width: "95%",
      marginBottom: 30,
      borderRadius: 20,
      backgroundColor: "white",
      overflow: "hidden",
    },
    cardBottom : {
      height: "35%",
      bottom: 0,
      position: 'absolute',
      backgroundColor: '#707071',
      width: "100%",
      borderRadius: 10,
    },
    cardTitle : {
      color: 'white',
      fontSize: 20,
      marginLeft: 10,
      marginTop: 20
    },
    cardAuthor : {
      color: 'white',
      fontSize: 15,
      marginLeft: 10,
      marginTop: 5,
    },
    cardTimeContainer : {
      position: 'absolute',
      left: 10,
      top: 15,
      width: 75,
      height: 30,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#707071"
    },
    cardHeartContainer : {
      position: 'absolute',
      right: 85,
      top: 10,
      width: 25,
      height: 25,
      borderRadius: 90,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#707071"
    },
    cardStarsContainer : {
      position: 'absolute',
      right: 10,
      top: 10,
      width: 70,
      height: 25,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor: "#707071"
    },
    cardTimeText : {
      color: 'white',
    },
    cardStarsText : {
      color: 'white',
      marginLeft: 10,
    },
    achievementBubble : {
      backgroundColor: '#CFB87B',
      height: 125,
      width: "95%",
      borderRadius: 20,
      justifyContent: 'center',
    },
    achievementBubbleContainer : {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30
    },
    achievementName : {
      fontWeight: 'bold',
      fontSize: 18,
      paddingBottom: 5,
      paddingLeft: 20
    },
    achievementProgressText : {
      color: 'rgb(51, 52, 54)',
      fontSize: 16,
      paddingLeft: 20,
    },
    progressBarOuter : {
      width: '90%',
      height: 10,
      backgroundColor: '#707071',
      borderRadius: 10
    },
    progressBarInner : {
      backgroundColor: '#1A1A1A',
      borderRadius: 10,
      width: '75%',
      height: 10,
    },
    progressBarContainer : {
      width : '100%',
      alignItems: 'center',
      paddingTop: 15
    },
    button: {
      width: "95%",
      height: 100,
      backgroundColor: Colors.primary,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
    },
    redirectContainer : {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 0
    },
    buttonText : {
      fontSize: 40
    },
    tasks: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
      marginTop: 15,
    },
    taskButton: {
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "#4c4c4c",
      height: 90,
      width: '95%',
      borderRadius: 20,
      marginVertical: 15,
    },
    buttonText : {
      marginLeft: 15,
      fontSize: 25,
      textAlign: 'center',
      
    },
  cardArrowContainer : {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto'
  },

  taskButtonContents : {
    flexDirection: 'row',
  },
  });

