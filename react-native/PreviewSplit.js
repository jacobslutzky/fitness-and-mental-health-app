import React, { useState,useEffect } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from './constants/Colors';
import VideoCard from './components/VideoCard';
import Collapsible from 'react-native-collapsible';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../src/graphql/queries";
import * as mutations from "../src/graphql/mutations";

const Week = (props) => {
  const colors = useTheme().colors;
  const title = props.title
  const index = props.index
  const setToggle = props.setToggle


  const { data, loading, error, refetch } = useQuery(gql`${queries.getProgramWeek}`, {
    variables: { id: title != "womenintermediate4xweek" ? `${title}::${index}` : `week${index}-${title}`}
  }); 

  /*

      <View>
    <TouchableOpacity onPress={() => setToggle(props.toggle.map((tog, ind) => index - 1 == ind ? !tog : tog))}  style={[styles.header, props.toggle[index - 1] ? {borderBottomWidth: 2} : {borderBottomWidth: 0}]}>
    <Text style={styles.headerText}>Week {data && data.getProgramWeek ? data.getProgramWeek.weekNumber : ""}</Text>
    </TouchableOpacity>
    <Collapsible collapsed={props.toggle[index - 1]} style={styles.dropdown}>
        <View style={styles.dropdownContent}>
        {data && data.getProgramWeek && data.getProgramWeek.workoutLabels ? data.getProgramWeek.workoutLabels.map((exercise,index) => (
        <View style={styles.workoutContainer} key={index}>
        <Text style={styles.workoutText}>{exercise}</Text>
        </View>
        ))
        : <View></View>
      }
        </View>
    </Collapsible>
    </View>

  */

  return(
    <View>
    <TouchableOpacity style={styles.cardContainer} onPress={() => setToggle(props.toggle.map((tog, ind) => index - 1 == ind ? !tog : tog))}>
      <View style={[styles.card, props.toggle[index - 1] ? styles.defaultBackground : styles.primaryBackground]}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardWeekText}>WEEK {data && data.getProgramWeek ? data.getProgramWeek.weekNumber : ""}</Text>
        </View>
        <View style={styles.cardDifficultyContainer}>
          <Text style={styles.cardGoldText}>NUMBER OF WORKOUTS:</Text>
          <Text style={styles.cardWhiteText}> {data && data.getProgramWeek ? data.getProgramWeek.workoutLabels.length : "" }</Text>
        </View>
      </View>
    </TouchableOpacity>
      <Collapsible collapsed={props.toggle[index - 1]} style={styles.dropdown}>
        <View style={styles.dropdownContent}>
          {data && data.getProgramWeek && data.getProgramWeek.workoutLabels ? data.getProgramWeek.workoutLabels.map((exercise,index) => (
            <View style={styles.workoutContainer} key={index}>
              <Text style={styles.workoutText}>{exercise}</Text>
             </View>
            ))
            : <View></View>
          }
        </View>
      </Collapsible>
    </View>
  )
}

export default function PreviewSplit({route, navigation}){
    colors = useTheme().colors

    const title = route.params.title

    const titleToNameMap = route.params.titleToNameMap

    const navigateToProgram = () => {
        navigation.navigate("CurrentProgram", {title: title, titleToNameMap: titleToNameMap })
    }

    let weekQueries = []

      weekQueries = weekQueries.map(week => { return {week: week.weekNumber, workouts: week.workoutLabels}})

      const [splitsByWeek, setSplitByWeek] = useState(weekQueries)

      const [toggle, setToggle] = useState(Array(12).fill(true))

      const [isExpanded, setExpanded] = useState([])

      
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{marginTop: 30}}>
        {Array(8).fill().map((split, index) => (
          <Week index={index + 1} title={title} toggle={toggle} setToggle={setToggle} key={index}/>
        ))}
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => navigateToProgram()}>
            <Text style={styles.buttonText}>Select Program</Text>
        </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        padding: 20,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      
    header: {
        
        borderBottomColor: Colors.primary ,
        borderBottomWidth: 2,
        marginHorizontal: 8
      },
      headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.primary,
        marginVertical: 15,
        textAlign: 'center'
      },
      workoutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 20
      },
    dropdown: {
      alignItems: 'center'
      },
      dropdownContent: {
        textAlign: 'center',
        alignItems: 'center',
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 15,
        width: '80%',
        marginBottom: 40
      },
      workoutContainer: {
        flexDirection: 'row',
        marginLeft: 8,
        marginVertical: 10,
        borderBottomColor: Colors.primary,
        paddingVertical: 10,
        borderBottomWidth: 1,
        width: '40%',
        justifyContent: 'center'
      },
      button: {
        width: "50%",
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 10,
        alignSelf: "center",
      },
      buttonText: {
          fontSize: 15,
          alignSelf: "center"
      },
      cardContainer : {
        alignItems: 'center',
        justifyContent: 'center'
      },
      card : {
        width: '80%',
        height: 75,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 15,
        marginBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      cardWeekText : {
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
        marginRight: 10,
        fontWeight: 'bold',
      },
      cardDifficultyContainer : {
        marginRight: 10,
        paddingRight: 10,
        flexDirection: 'row'
      },
      cardGoldText : {
        color: Colors.primary,
        fontSize: 12
      },
      cardTextContainer: {
        borderRightColor: Colors.primary,
        borderRightWidth: 1.5,
        marginRight: 10
      },
      cardWhiteText: {
        color: 'white',
        fontSize: 12
      },
      primaryBackground: {
        borderWidth: 3
      }
});
