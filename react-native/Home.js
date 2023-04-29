import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { block } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 



export default function Home({navigation}){

  const colors = useTheme().colors;
 
  
    const handlePress = ( item ) => {
      navigation.navigate(item.screen);
    }
  
  
  const taskLabels = [
    {label: "Complete Today's Workout", screen: "Fitness", brainColor: "#3787D5"},
    {label: "Post Shower Meditation", screen: "Mindfulness", brainColor: "#F5AB26"},
    {label: "Share Results with Friend", screen: "Community", brainColor: "#BC64FD"},
    {label: "Post Workout Yoga", screen: "Mindfulness", brainColor: "#3787D5"},
    {label: "Therapy Check-in", screen: "Mindfulness", brainColor: "#F5AB26"}
    
  ]

    return(
    <View style = {styles.container}>

      {/* Temporary mock for search bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <View style = {styles.allButton}>
          <Text>All</Text>
        </View>
        <View style = {styles.notCompletedButton}>
          <Text>Not Completed</Text>
        </View>
      </View>

      {/* Task List */}
      <View style={styles.tasks}>
  {taskLabels.map((item, index) => (
    <View style={styles.taskButton} key={index} >
      <TouchableOpacity onPress={() => handlePress(item)} style={styles.taskButtonContents}>
        <View style={[styles.brainContainer, {backgroundColor: item.brainColor}]}>
          <FontAwesome5 name="brain" size={24} color={"white"} />
        </View>
        <Text style={[styles.buttonText, {color: colors.text}]}>{item.label}</Text>
      </TouchableOpacity>
    </View>
  ))}
    </View>

    {/* Plus Button */}
    <View style={styles.plusButtonContainer}>
      <AntDesign name="pluscircle" size={35} color="#CFB87B" />
    </View>

   
     </View>
    )
}


const styles = StyleSheet.create({
  
  container:{
    flex: 1,
  },
  

  tasks: {
    
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column"
  },
  taskButton: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#4c4c4c",
    height: 60,
    width: '90%',
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText : {
    marginLeft: 15,
    fontSize: 20,
    textAlign: 'center',
    
  },
  searchBar : {
    backgroundColor: "#4c4c4c",
    textAlign: "left",
    alignItems :"left",
    justifyContent: "center",
    borderRadius: 15,
    width: '90%',
    height: 50
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    marginTop: 30,
    marginBottom: 10,
  },
  filterContainer : {
    paddingLeft: 20,
    textAlign: 'left',
    height: 40,
    width: "90%",
    flexDirection: 'row',
    marginBottom: 10,
  },
  allButton : {
    backgroundColor: "#CFB87B",
    height: '100%',
    width: 75,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notCompletedButton : {
    backgroundColor: "#1A1A1A",
    height: '100%',
    width: 120,
    marginLeft: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  plusButtonContainer : {
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskButtonContents : {
    flexDirection: 'row',
  },
  brainContainer: {
    height: 40,
    width: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  searchText : {
    marginLeft: 10,
  }
});
