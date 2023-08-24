import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from './constants/Colors';
import VideoCard from './components/VideoCard';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../src/graphql/queries";
import * as mutations from "../src/graphql/mutations";


export default function WorkoutProgramInfo({route, navigation}){
    colors = useTheme().colors
    const titleToNameMap = route.params.titleToNameMap
    const video = {title: "10-minute morning yoga", author: "Caleb Saks", img: require('../assets/fitnessYoga1.jpg'), time: "20 min", stars: "4.7"}
    const { data, loading, error, refetch } = useQuery(gql`${queries.getProgram}`, {
        variables: { id: route.params.title}
      }); 
      const workout = route.params.title
      console.log(workout)
      /*

      const [createProgramWeek, { data2, loading2, error2 }]= useMutation(gql`${mutations.createProgramWeek}`); 

      const input = {
        "weekNumber": 1,
        "programWeeksId": "MenPPL"-
       }
       */
    
      
    const navigateToPreviewSplit = () => {
        navigation.navigate("PreviewSplit", {title: workout, titleToNameMap: titleToNameMap})
    }

    const navigateToProgram = () => {
        //createProgramWeek({ variables : {input : input} })
        navigation.navigate("CurrentProgram", {title: workout, titleToNameMap: titleToNameMap})
    }

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.programName}>{titleToNameMap[route.params.title]}</Text>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/quickWorkouts1.jpeg')}></Image>
        </View>
        <Text style={styles.description}>This 6 day push/pull/legs workout routine split is a high volume, rest-pause system designed for intermediate lifters looking to gain muscle and strength. </Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigateToPreviewSplit()} >
                    <Text style={styles.buttonText}  > Preview Split</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigateToProgram()}>
                    <Text style={styles.buttonText}>Select Program</Text>
            </TouchableOpacity>
        </View>
        </View>
        </ScrollView> 
        )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        marginHorizontal: 10,
        marginTop: 20
        
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      programName: {
        color: "white",
        alignSelf: "center",
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 30,
        textAlign: "center"
    
    },
    button: {
      width: "50%",
      marginHorizontal: 20,
      height: 50,
      backgroundColor: Colors.primary,
      borderRadius: 6,
      justifyContent: 'center',
      marginVertical: 5
    },
    buttonText: {
        fontSize: 15,
        alignSelf: "center"
    },
    description: {
        color: "white",
        alignSelf: "center",
        fontSize: 18,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginHorizontal : 20, 
        marginVertical: 20
    },
    imageContainer: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        marginBottom: 30
    },
    image : {
        width: "80%",
        height: "100%"
    }
})