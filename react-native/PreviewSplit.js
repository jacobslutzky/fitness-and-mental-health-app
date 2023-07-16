import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from './constants/Colors';
import VideoCard from './components/VideoCard';
import Collapsible from 'react-native-collapsible';


export default function PreviewSplit({route, navigation}){
    colors = useTheme().colors

    const [splitsByWeek,setSplitByWeek] = useState([
        {week: 1, workouts: ["Push", "Rest", "Pull", "Rest", "Legs", "Rest", "Rest"], isExpanded: true},
        {week: 2, workouts: ["Push", "Rest", "Pull", "Rest", "Legs", "Rest", "Rest"], isExpanded: true},
        {week: 3, workouts: ["Push", "Rest", "Pull", "Rest", "Legs", "Rest", "Rest"], isExpanded: true},
        {week: 4, workouts: ["Push", "Rest", "Pull", "Rest", "Legs", "Rest", "Rest"], isExpanded: true},
        {week: 5, workouts: ["Push", "Rest", "Pull", "Rest", "Legs", "Rest", "Rest"], isExpanded: true},
        {week: 6, workouts: ["Push", "Rest", "Pull", "Rest", "Legs", "Rest", "Rest"], isExpanded: true},
        {week: 7, workouts: ["Push", "Rest", "Pull", "Rest", "Legs", "Rest", "Rest"], isExpanded: true},
        {week: 8, workouts: ["Push", "Rest", "Pull", "Rest", "Legs", "Rest", "Rest"], isExpanded: true},
        {week: 9, workouts: ["Push", "Rest", "Pull", "Rest", "Legs", "Rest", "Rest"], isExpanded: true},
        {week: 10, workouts: ["Push", "Rest", "Pull", "Rest", "Legs", "Rest", "Rest"], isExpanded: true},
    ]);

    const toggleList = (split) => {
        split.isExpanded = !split.isExpanded
        
        setSplitByWeek(splitsByWeek)
      };


    return (
        <View>
        {splitsByWeek.map((split) => (
        <View key={split.week}>
        <TouchableOpacity onPress={() => toggleList(split)}  style={styles.header}>
        <Text style={styles.headerText}>Week {split.week} </Text>
        </TouchableOpacity>
        <Collapsible collapsed={split.isExpanded} style={styles.dropdown}>
            <View style={styles.dropdownContent}>
            <Text>Hello</Text>
            </View>
        </Collapsible>
        </View>
        ))}
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
    header: {
        backgroundColor: '#f1f1f1',
        padding: 10,
      },
      headerText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    dropdown: {
        backgroundColor: 'white',
      },
      dropdownContent: {
        backgroundColor: 'white',
        // Additional styling for the dropdown content if needed
      },
});
