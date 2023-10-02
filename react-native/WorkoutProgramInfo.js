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
        paddingHorizontal: 20, // Add horizontal padding for better alignment
        paddingTop: 20, // Add top padding to create space
        backgroundColor: Colors.background,
        gap: 30
    },
    programName: {
        color: "white",
        alignSelf: "center",
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: "center",
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    description: {
        color: "white",
        fontSize: 18,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: "45%", // Adjust the width for better alignment
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 15,
        alignSelf: "center",
    },
});