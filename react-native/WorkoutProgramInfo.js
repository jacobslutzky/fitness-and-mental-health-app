import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from './constants/Colors';
import VideoCard from './components/VideoCard';

export default function WorkoutProgramInfo({route, navigation}){
    colors = useTheme().colors
    const video = {title: "10-minute morning yoga", author: "Caleb Saks", img: require('../assets/fitnessYoga1.jpg'), time: "20 min", stars: "4.7"}
   
    const navigateToPreviewSplit = () => {
        navigation.navigate("PreviewSplit")
      }

    return (
    <View style={styles.container}>

    <Text style={styles.programName}>{route.params.title}</Text>
    <VideoCard item={video} />
    <Text style={styles.description}>This 6 day push/pull/legs workout routine split is a high volume, rest-pause system designed for intermediate lifters looking to gain muscle and strength. </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigateToPreviewSplit()} >
            <Text style={styles.buttonText}  > Preview Split</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} >
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
      programName: {
        color: "white",
        alignSelf: "center",
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 30
    },
    button: {
      width: "50%",
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
    }
})