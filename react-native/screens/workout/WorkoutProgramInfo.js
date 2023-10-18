import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import VideoCard from '../../components/VideoCard';
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";
import * as mutations from "../../../src/graphql/mutations";
import { AntDesign } from '@expo/vector-icons';


export default function WorkoutProgramInfo({route, navigation}){
    colors = useTheme().colors
    const titleToNameMap = route.params.titleToNameMap
    const video = {title: "10-minute morning yoga", author: "Caleb Saks", img: require('../../../assets/fitnessYoga1.jpg'), time: "20 min", stars: "4.7"}
    const { data, loading, error, refetch } = useQuery(gql`${queries.getProgram}`, {
        variables: { id: route.params.title}
      }); 
      const workout = route.params.title
      console.log(workout)
    
    const titleToSummariesMap = {
        "womensintermediateglute": "This is an intermediate to advanced four day a week program designed for female identified students. Feel free to change the workouts around to fit your schedule.",
        "menslvl3PPL": "This is an intermediate to advanced five day a week program designed for male identified students. Feel free to change the workouts around to fit your schedule.",
        "menslvl2UL": "This is an intermediate four day a week program designed for male identified students. Feel free to change the workouts around to fit your schedule.",
        "mensfullbody": "This is a beginner three day a week program designed for male identified students. Feel free to change the workouts around to fit your schedule.",
        "mensPPL": "This is an advanced six day a week program designed for male identified students. Feel free to change the workouts around to fit your schedule.",
        "womensbeginner": "This is a beginner three day a week program designed for female identified students. Feel free to change the workouts around to fit your schedule.",
        "womenintermediate": "This is an intermediate four day a week program designed for female identified students. Feel free to change the workouts around to fit your schedule.",
      }
      
    const navigateToPreviewSplit = () => {
        navigation.navigate("PreviewSplit", {title: workout, titleToNameMap: titleToNameMap})
    }

    const navigateToProgram = () => {
        //createProgramWeek({ variables : {input : input} })
        navigation.navigate("CurrentProgram", {title: workout, titleToNameMap: titleToNameMap})
    }

    return (
            <ScrollView>
                        <ImageBackground resizeMode={'cover'} style={styles.container} source={require('../../../assets/boulderWeightRoom.webp')} imageStyle={{opacity: .2}}>
                            <View style={styles.titleContainer}>
                            <Text style={styles.programName}>{titleToNameMap[route.params.title].toUpperCase()}</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                            <ImageBackground source={'../../../assets/affirmationTherapy.jpeg'} style={styles.imageContainer}> 
                                    <AntDesign name="playcircleo" size={40} color="white" />
                            </ImageBackground>
                            </View>
                            <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>{titleToSummariesMap[route.params.title]}</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={() => navigateToPreviewSplit()} >
                                        <Text style={styles.buttonText}>PREVIEW SPLIT</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => navigateToProgram()}>
                                        <Text style={styles.buttonText}>SELECT PROGRAM</Text>
                                </TouchableOpacity>
                            </View>
                            <Svg height="100%" width="100%" style={ StyleSheet.absoluteFillObject }>
                                <Defs>
                                    <LinearGradient id="grad" x1="0%" y1="40%" x2="0%" y2="100%">
                                        <Stop offset="0" stopOpacity="0.2" stopColor={'black' }/>
                                        <Stop offset="1" stopOpacity="1" stopColor={ "black" }/>
                                    </LinearGradient>
                                </Defs>
                                <Rect width="100%" height="100%" fill="url(#grad)"/>
                            </Svg>
                        </ImageBackground>
                        </ScrollView>
        )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 30,
        height: '100%',
        width: '100%'
    },
    programName: {
        color: "white",
        alignSelf: "center",
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center",
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 200,
        borderRadius: 15,
        borderColor: Colors.primary,
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    description: {
        color: "white",
        fontSize: 18,
        marginTop: 20
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        zIndex: 100,
        marginHorizontal: 20
    },
    button: {
        width: "45%", // Adjust the width for better alignment
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 20,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 15,
        alignSelf: "center",
        fontWeight: 'bold'
    },
    descriptionContainer : {
        marginHorizontal: 20,
        zIndex: 20
    },
    titleContainer: {
        width: '100%',
        backgroundColor: '#101214',
        paddingVertical: 30
    }
});