import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {useState} from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';


export default function Home({navigation}){

  const colors = useTheme().colors;
  
  
  const taskLabels = [
    {label: "Complete Today's Workout", screen: "Fitness", brainColor: "#3787D5"},
    {label: "Post Shower Meditation", screen: "Mindfulness", brainColor: "#F5AB26"},
    {label: "Share Results with Friend", screen: "Community", brainColor: "#BC64FD"},
    {label: "Post Workout Yoga", screen: "Mindfulness", brainColor: "#3787D5"},
    {label: "Therapy Check-in", screen: "Mindfulness", brainColor: "#F5AB26"}
  ]


  const [isPressed, setIsPressed] = useState(new Array(taskLabels.length).fill(false));
  const [tasksFiltered, setTasksFiltered] = useState(taskLabels);
  const [tasksSearched, setTasksSearched] = useState(taskLabels)
  const [isAll, setIsAll] = useState(true)
  const [search, setSearch] = useState("")

  const handlePress = ( item, index ) => {
    isPressed[index] = !isPressed[index]
    console.log(index, isPressed[index])
    setIsPressed([...isPressed])
    navigation.navigate(item.screen);
  }

  const handleFilter = ( command ) => {
    if(command == 'all'){
      setTasksFiltered([...taskLabels])
      setTasksSearched([...taskLabels])
      setIsAll(true)
    }
    else if(command == 'not completed'){
      tasksFilteredTemp = new Array();
      for(let i = 0; i < taskLabels.length; i++){
        if(isPressed[i] == false){
          tasksFilteredTemp.push(taskLabels[i])
        }
      }
      setTasksFiltered([...tasksFilteredTemp])
      setTasksSearched([...tasksFilteredTemp])
      setIsAll(false)
    }
  }

  const updateSearch = (text) => {
    
    const updatedData = tasksFiltered.filter((item) => {
      const item_data = `${item.label.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    setTasksSearched(updatedData)
    
    setSearch(text)
  };
    return(
    <ScrollView style = {styles.container}>

      <View style={styles.headerContainer}>
          <Text style={[styles.header, {color: colors.text}]}>Home</Text>
      </View>

      <View style={styles.searchContainer}>
      <SearchBar
        placeholder="Search"
        onChangeText={updateSearch}
        containerStyle={{backgroundColor: 'black'}}
        inputContainerStyle={styles.searchBar}
        value={search}
        round={true}
      />
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => handleFilter('all')} style = {[styles.allButton, {backgroundColor : isAll ? "#CFB87B" : "#1A1A1A"}]}>
          <Text style={{color:'white', fontSize: 16}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilter('not completed')} style = {[styles.notCompletedButton, {backgroundColor : isAll ? "#1A1A1A" : "#CFB87B"}]}>
          <Text style={{color:'white', fontSize: 16}}>Not Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <View style={styles.tasks}>
        {taskLabels.map((item, index) => (
          <>
          {(tasksSearched.map((item) => item.label)).includes(item.label) 
          ? <View style={(isPressed[index] && isAll) ? styles.taskButtonPressed : styles.taskButton} key={index} >
            <TouchableOpacity onPress={() => isPressed[index] == true ? null : handlePress(item, index)} style={styles.taskButtonContents}>
              <View style={[styles.brainContainer, {backgroundColor: item.brainColor}]}>
                <FontAwesome5 name="brain" size={24} color={"white"} />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text style={[styles.buttonText, {color: colors.text}]}>{item.label}</Text>
              </View>
              {(!isPressed[index] || !isAll)
              ? <View style={styles.cardArrowContainer}>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
                </View>
              : <View style={styles.cardArrowContainer}>
                  <AntDesign name="check" size={24} color="green" />
                </View>
              }
            </TouchableOpacity>
          </View>
          : <></>
          }
          </>
        ))}
    </View>

    {/* Plus Button */}
    <View style={styles.plusButtonContainer}>
      <AntDesign name="pluscircle" size={35} color="#CFB87B" />
    </View>

   
     </ScrollView>
    )
}


const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    marginTop: 20,
  },
  
  headerContainer : {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header : {
    fontSize: 40,
    fontWeight: 'bold',
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
    height: 70,
    width: '90%',
    borderRadius: 20,
    marginVertical: 10,
  },
  taskButtonPressed: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#4c4c4c",
    height: 70,
    width: '90%',
    borderRadius: 20,
    marginVertical: 10,
    borderColor: 'green',
    borderWidth: 1.5
  },
  buttonText : {
    marginLeft: 15,
    fontSize: 18,
    textAlign: 'center',
    
  },
  searchBar : {
    backgroundColor: "#4c4c4c",
    textAlign: "left",
    justifyContent: "center",
    borderRadius: 15,
    width: '95%',
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
    marginBottom: 10
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
    width: 150,
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
  },
  cardArrowContainer : {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto'
  }
});
