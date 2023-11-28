import { React, useState, useEffect } from 'react';
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useQuery, gql } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";
import { Colors } from '../../constants/Colors';
import { SearchBar } from 'react-native-elements';


export default function SelectWorkoutProgram({ route, navigation }) {
      const getCurrentProgram = /* GraphQL */ `
    query GetUserStats($id: ID!) {
      getUserStats(id: $id) {
        id
        currentProgram { 
          id
          title
          userProgramWeeks {
            items {
              id
              weekNumber
              userWorkouts {
                items {
                  id
                  workoutNumber
                  title
                  status
                  notes
                  userExercises{
                    items {
                      id
                      sets
                      RIR
                      restMinutes
                      repRange
                      exerciseNum
                      notes
                      completed
                      exerciseInfoID
                      exerciseInfo {
                          id
                          name
                          muscleWorked
                          workoutType
                          createdAt
                          updatedAt
                          __typename
                        }
                    }
                  }
                }
                }
              }
            }
          }
          
        }
    }
  `;
  const { data: dataProgram, loading: loadingProgram, error: errorProgram } = useQuery(gql`${getCurrentProgram}`, {
    variables: { id: "stats-" + global.userId}
});

  const colors = useTheme().colors;

  const newProgram = route.params ? route.params.newProgram : null

  const navigateToCreateProgram = (createdPrograms, setCreatedPrograms) => {

    navigation.navigate("CreateProgram", {createdPrograms: createdPrograms, setCreatedPrograms: setCreatedPrograms})
  }

  const navigateToWorkoutInfo = (program, setCurrentProgram) => {

    navigation.navigate("WorkoutProgramInfo", { program: program,  setCurrentProgram: setCurrentProgram, taskCompletionList: route.params ? route.params.taskCompletionList : null, taskCompletionListIndex: route.params ? route.params.taskCompletionListIndex : null,  taskCompletionListIndex: route.params ? route.params.taskCompletionListIndex : null})
  }
  
  const { data, loading, error, refetch } = useQuery(gql`${queries.listPrograms}`,
    {
        variables: {
            filter: 
              {
              or: [
              
              { authorID: {eq: global.userId } }
              ]
              },
            
          
            limit: 100,
        }
    });


  let communityCards = []
  
  useEffect(() => {
    if (data) {
      const sortedCommunityCards = data.listPrograms.items.slice().sort((a, b) => {
        // Assuming createdAt is a timestamp, if it's a string, convert it to Date
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
  
        // Sort in descending order (newest first)
        return dateB - dateA;
      });
  
      setGymindPrograms(sortedCommunityCards.filter(communityCard => communityCard.authorID == null));
      setCreatedPrograms(sortedCommunityCards.filter(communityCard => communityCard.authorID != null));
      setTasksSearched(sortedCommunityCards);
    }
  }, [data]);


  useEffect(()=> {
   
    if(dataProgram?.getUserStats?.currentProgram != null){
      navigation.navigate("CurrentProgram", { program: dataProgram.getUserStats.currentProgram,  taskCompletionList: route.params ? route.params.taskCompletionList : null,  taskCompletionListIndex: route.params ? route.params.taskCompletionListIndex : null })
    }

  }, [dataProgram])

  const [gymindPrograms, setGymindPrograms] = useState(communityCards);
  const [createdPrograms, setCreatedPrograms] = useState([]);
  const [tasksSearched, setTasksSearched] = useState(communityCards)
  const [isAll, setIsAll] = useState(true)
  const [search, setSearch] = useState("")
  const [currentProgram, setCurrentProgram] = useState("")

  // useEffect(() => {
  //   if (newProgram) {
  //     let testProgram = gymindPrograms[0]
  //     testProgram.title = newProgram
  //     setGymindPrograms(gymindPrograms => [...gymindPrograms, testProgram])
  //     setTasksSearched(tasksSearched => [...tasksSearched, testProgram])
  //   }
  // }, [newProgram])

  const updateSearch = (text) => {
    if (!gymindPrograms) return;

    const updatedData = gymindPrograms.filter((item) => {
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase().split(" ").join('');
      return item_data.indexOf(text_data) > -1;
    });

    setTasksSearched(updatedData)

    setSearch(text)
  };

  useEffect(() => {
    refetch()
  }, [createdPrograms])

  useEffect(() => {
    if(tasksSearched.length == 0) return
    let tempProgram = tasksSearched[0]
    for(let i = 0; i < tasksSearched.length; i++){
      if(tasksSearched[i].title == currentProgram){
        tempProgram = tasksSearched[i]
      }
    }
    setTasksSearched(tasksSearched.filter(taskSearched => taskSearched.title != currentProgram))
    setTasksSearched(tasksSearched => [tempProgram, ...tasksSearched])

    if(gymindPrograms.find((program) => program == tempProgram)){
      setGymindPrograms(gymindPrograms.filter(gymindProgram => gymindProgram.title != currentProgram))
      setGymindPrograms(gymindPrograms => [tempProgram, ...gymindPrograms])
    }
    
    if(createdPrograms.find((program) => program == tempProgram)){
      setCreatedPrograms(createdPrograms.filter(createdProgram => createdProgram.title != currentProgram))
      setCreatedPrograms(createdPrograms => [tempProgram, ...createdPrograms])
    }
  }, [currentProgram])

  /*
  0 = gymind programs selected
  1 = your programs selected 
  2 = neither selected

  currently need to add console logs to find out why sort isnt working
  */


  const [isFiltered, setIsFiltered] = useState(2)


  const toggleFilter = (key) => {
    if(key == 'gymind' && isFiltered != 0){
        setTasksSearched(gymindPrograms)
        setIsFiltered(0)
    }
    else if(key == 'user' && isFiltered != 1){
        setTasksSearched(createdPrograms)
        setIsFiltered(1)
    }
    else{
      
      setTasksSearched(gymindPrograms.concat(createdPrograms))
      setIsFiltered(2)
    }
  }



  return (
    !loadingProgram?(<View style={styles.container}>

      <Text style={[styles.header, { color: colors.text }]}>Select Your Program</Text>

      <View style={styles.programButtons}>
        <TouchableOpacity style={[styles.programButton, {borderRightWidth: 1, borderColor: Colors.primary}]} onPress={() => toggleFilter('gymind')}>
          <Text style={isFiltered != 1 ? styles.programTextOn : styles.programTextOff}>
            GYMIND'S PROGRAMS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.programButton, {borderLeftWidth: 1, borderColor: Colors.primary}]} onPress={() => toggleFilter('user')}>
          <Text style={isFiltered != 0 ? styles.programTextOn : styles.programTextOff}>
            YOUR PROGRAMS
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          containerStyle={{ backgroundColor: '#101214', borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
          inputContainerStyle={styles.searchBar}
          value={search}
          round={true}
        />
      </View>

      <ScrollView style={{ marginHorizontal: 20 }}>
        <View style={styles.cardsContainer}>
          {isFiltered ? 
          <ImageBackground source={'../../../assets/quickWorkouts1.jpeg'} style={styles.communityCard} imageStyle={{ opacity: 0.2 }}>
            <TouchableOpacity style={styles.cardTouchable} onPress={() => navigateToCreateProgram(createdPrograms, setCreatedPrograms)}>
              <Text style={styles.cardText}>CREATE A PROGRAM</Text>
            </TouchableOpacity>
          </ImageBackground>
          : <></>
          }
          {tasksSearched ? tasksSearched.map((item, index) => (
            <>
            {item?
            <ImageBackground source={ require('../../../assets/quickWorkouts1.jpeg')} style={styles.communityCard} key={index} imageStyle={{ opacity: 0.2 }}>
              <TouchableOpacity style={styles.cardTouchable} onPress={() => navigateToWorkoutInfo(item, setCurrentProgram)}>
                <Text style={styles.cardText}>{item.title.toUpperCase()}</Text>
              </TouchableOpacity>
            </ImageBackground>
            :
            <></>
            }
            </>
          ))
            : <View></View>
          }
        </View>
      </ScrollView>

    </View>):(<></>)
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
    fontWeight: 'bold',
    marginHorizontal: 30,
  },
  cardImage: {
    height: '100%',
    width: '100%',
    opacity: 0.4
  },
  searchBar: {
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
    marginTop: 20,
    backgroundColor: "#101214",
  },
  cardTouchable: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignLast: 'center',
  },
  programButtons: {
    height: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  programTextOn : {
    color: Colors.primary,
    fontSize: 16
  },
  programTextOff: {
    color: 'white',
    fontSize: 16
  },
  programButton : {
    paddingHorizontal: 10
  }
});
