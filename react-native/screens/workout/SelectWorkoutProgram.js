import {React,useState, useEffect} from 'react';
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabBar } from 'react-native-tab-view';
import VideoCard from '../../components/VideoCard';
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";
import * as mutations from "../../../src/graphql/mutations";
import { useApolloClient } from '@apollo/client';
import { Colors } from '../../constants/Colors';
import { SearchBar } from 'react-native-elements';


export default function SelectWorkoutProgram({ route, navigation }) {
  const colors = useTheme().colors;

  const newProgram = route.params ? route.params.newProgram : null



  const navigateToCreateWorkout = () => {

    navigation.navigate("CreateWorkout")
  }

  const navigateToWorkoutInfo = (title, titleToNameMap) => {

    navigation.navigate("WorkoutProgramInfo", { title: title, titleToNameMap: titleToNameMap })
  }


  const { data, loading, error, refetch } = useQuery(gql`${queries.listPrograms}`)

  let communityCards = []
  if (data) {
    console.log(data.listPrograms.items)
    communityCards = data.listPrograms.items.map((program) => { console.log(program.title); return { title: program.id, img: require('../../../assets/quickWorkouts1.jpeg') } })
  }
  useEffect(() => {
    setTasksFiltered(communityCards)
    setTasksSearched(communityCards)
  }, [data]);

  const titleToNameMap = {
    "womensintermediateglute": "Women’s Intermediate to Advanced Glute Focused ",
    "menslvl3PPL": "Men’s Intermediate 2.0 Push, Pull, Legs, Upper, Lower",
    "menslvl2UL": "Men’s Intermediate Upper, Lower",
    "mensfullbody": "Men's Full Body",
    "mensPPL": "Men’s Advanced PPL",
    "womensbeginner": "Women’s Beginner Foundation",
    "womensintermediate": "Women’s Intermediate Foundation ",
  }

  const [tasksFiltered, setTasksFiltered] = useState(communityCards);
  const [tasksSearched, setTasksSearched] = useState(communityCards)
  const [isAll, setIsAll] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    if(newProgram){
      console.log("hi")
      let testProgram = tasksFiltered[0]
      testProgram.title = newProgram
      setTasksFiltered(tasksFiltered => [...tasksFiltered, testProgram])
      setTasksSearched(tasksSearched => [...tasksSearched, testProgram])
    }
  }, [newProgram])

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
    <View style={styles.container}>

      <Text style={[styles.header, { color: colors.text }]}>Select Your Program</Text>

      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          containerStyle={{backgroundColor: '#101214', borderBottomColor: 'transparent', borderTopColor: 'transparent'}}
          inputContainerStyle={styles.searchBar}
          value={search}
          round={true}
        />
      </View>

      <ScrollView style={{marginHorizontal: 20}}>
        <View style={styles.cardsContainer}>
          <ImageBackground source={'../../../assets/quickWorkouts1.jpeg'} style={styles.communityCard} imageStyle={{opacity: 0.2}}>
                <TouchableOpacity style={styles.cardTouchable} onPress={() => navigateToCreateWorkout()}>
                  <Text style={styles.cardText}>CREATE A PROGRAM</Text>
                </TouchableOpacity>
          </ImageBackground>
          {tasksSearched ? tasksSearched.map((item, index) => (
              <ImageBackground source={item.img} style={styles.communityCard} key = {index} imageStyle={{opacity: 0.2}}>
                <TouchableOpacity style={styles.cardTouchable} onPress={() => navigateToWorkoutInfo(item.title, titleToNameMap)}>
                  <Text style={styles.cardText}>{titleToNameMap[item.title] ? titleToNameMap[item.title].toUpperCase() : item.title.toUpperCase()}</Text>
                </TouchableOpacity>
              </ImageBackground>
          ))
            : <View></View>
          }
        </View>
      </ScrollView>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyCoontent: 'center',
    alignIterms: 'center'
  },
  button: {
    width: '25%',
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    marginTop: 50
  },
  tabsContainer: {
    marginTop: 10,
    backgroundColor: 'black'
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: "center",
    width: "90%",
    alignSelf: "center"
  },
  scene: {
    flex: 1,
  },
  cardBottom: {
    height: "35%",
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#707071',
    width: "100%",
    borderRadius: 10,
  },
  title: {


    color: 'white',
    fontWeight: 500,
    fontSize: 25,
    letterSpacing: 0,
    //lineHeight: 60,
    width: "70%",
    alignSelf: "flex-end",
    textAlign: "right",
    justifyContent: "center",
    opacity: 1,
  },
  subtitle: {
    fontSize: 18,
    color: "rgb(22, 18, 17)",
    marginTop: 10
  },
  cardsContainer: {
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  communityCard: {
    height: 200,
    width: "100%",
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    borderColor: Colors.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardImages: {
    width: "80%",
    height: "100%"

  },

  cardMain: {

    width: "100%",
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center'
  },
  communityCardContents: {
    flexDirection: "row",
    height: 150,
  },
  textRight: {

    marginRight: 20,
    justifyContent: "center"
  },
  cardText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardImage: {
    height: '100%',
    width: '100%',
    opacity: 0.4
  },
  searchBar : {
    backgroundColor: "transparent",
    textAlign: "left",
    justifyContent: "center",
    borderRadius: 15,
    width: '95%',
    height: 50,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderBottomWidth: 1
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    marginTop: 30,
    backgroundColor: "#101214",
  },
  cardTouchable: {
    width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
  }
});
