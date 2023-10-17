import { StyleSheet, TouchableOpacity, ScrollView, Text, View, Image } from 'react-native';
import { useState, React, useEffect } from 'react';

import { useTheme } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import VideoCard from './components/VideoCard';
import { Colors } from './constants/Colors';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../src/graphql/queries";
import * as mutations from "../src/graphql/mutations";
import { useApolloClient } from '@apollo/client';
import { ZoomIn } from 'react-native-reanimated';
import WorkoutPreviewPopUp from './components/WorkoutPreviewPopUp';


const Workout = (props) => {
    const dataR = props.dataR
    const title = props.title
    const togglePopup = props.togglePopup
    const { data, loading, error, refetch } = useQuery(gql`${queries.getWorkout}`, {
        variables: { id: `${props.workout}-week1-${title}`},
        variables: { id: title != "womenintermediate4xweek" ? `${title}::1::${props.workout}` : `${props.workout}-week1-${title}`},
        enabled: dataR
    }); 

    const workout = props.workout

    return(
    <View key={workout} style={styles.card}>
        <View style={styles.cardNumber}>
            <Text style={{fontWeight: 'bold'}}>{props.index}</Text>
        </View>
        <View style={styles.cardInnerContent}>
            <View style={styles.cardHeader}>
                <Text style={styles.header}>{data && data.getWorkout ? data.getWorkout.title : ""}</Text>
                <Text style={styles.workoutStatus}>{data && data.getWorkout ? data.getWorkout.status : ""}</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.overviewButton} onPress={() => togglePopup(data ? data.getWorkout.title : workoutBeingPreviewed) }>
                <Text style={styles.buttonText}>Preview</Text>
        </TouchableOpacity>
    </View>
    )
}


export default function CurrentProgram({ navigation, route }) {
    const colors = useTheme().colors;
    const title = route.params.title
    const client = useApolloClient();
    const titleToNameMap = route.params.titleToNameMap


    const [workouts, setWorkouts] = useState({})


    const { data: dataR, error: errorR, loading: loadingR, refetch } = useQuery(gql`${queries.getProgramWeek}`, {
        variables: { id: title != "womenintermediate4xweek" ? `${title}::1` : `week1-${title}` },
        notifyOnNetworkStatusChange: true,
        onCompleted: setWorkouts
    });

    if(dataR) console.log(workouts)



    const { data : dataWorkout, loading: loadingWorkout, error: errorWorkout, refetch: refetchWorkout } = useQuery(gql`${queries.getWorkout}`, {
        variables: { id: title != "womenintermediate4xweek" ? `${title}::1::${dataR ? dataR.getProgramWeek.workoutLabels[0] : ""}` : `${dataR ? dataR.getProgramWeek.workoutLabels[0] : ""}-week1-${title}`},
        enabled: false
    }); 

    const navigateToSelectProgram = () => {
        navigation.navigate("SelectWorkoutProgram")
    }
    const navigatedToWorkout = () => {
        refetchWorkout()
        if(dataWorkout) navigation.navigate("DuringWorkout", { workout: dataR.getProgramWeek.workoutLabels[0], title: title, exerciseLabels: dataWorkout.getWorkout.exerciseLabels, weekNumber: dataR.getProgramWeek.weekNumber, titleToNameMap: titleToNameMap })
    }
    const [clickedWeek, setClickedWeek] = useState(dataR ? dataR.getProgramWeek : {})

    const handleWeekClick = (weekNumber) => {
        refetch({ id: title != "womenintermediate4xweek" ? `${title}::${weekNumber}` : `week1-${title}` })
    }

    const [isModalVisible, setModalVisible] = useState(false);
    const [workoutBeingPreviewed, setWorkoutBeingPreviewed] = useState(dataWorkout && dataWorkout.getWorkout ? dataWorkout.getWorkout.title : "");

    useEffect(() =>{
        if(dataWorkout){
            setWorkoutBeingPreviewed(dataWorkout.getWorkout)
            console.log(dataWorkout)
        }   
    }, [dataWorkout])
   
    const togglePopup = (workout) => {
      setModalVisible(!isModalVisible)
      setWorkoutBeingPreviewed(workout)
    };



    return (
        <ScrollView>
            {/* Header */}
            <ScrollView horizontal={true}>
                <View style={styles.buttonsContainer}>
                    {
                        dataR ? Array(8).fill().map((weekNum, index) => (

                            <TouchableOpacity style={[styles.weekButton, { backgroundColor: dataR && dataR.getProgramWeek.weekNumber == index + 1 ? colors.primary : "#4c4c4c" }]} key={index} onPress={() => handleWeekClick(index + 1)} >
                                <Text style={styles.buttonText}> Week {index + 1}</Text>
                            </TouchableOpacity>

                        )) 
                        : <View></View>
                    }
                </View>
            </ScrollView>
            <ScrollView style={{marginTop: 40}}>
                <Text style={styles.programHeader}>{titleToNameMap[title]}</Text>
                <View style={{ flexDirection: "column", marginTop: 20 }}>
                    {
                        dataR ? dataR.getProgramWeek.workoutLabels.map((workout, index) => (
                            <Workout key={workout} dataR={dataR} title={title} workout={workout} togglePopup={togglePopup} workoutBeingPreviewed={workoutBeingPreviewed} index={index+1}></Workout>
                        ))
                        : <View></View>
                    }
                </View>
            </ScrollView>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 50}}>
                <TouchableOpacity style={styles.bottomButton} onPress={() => navigatedToWorkout()} >
                    <Text style={styles.buttonText} > Start Workout </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton} onPress={() => navigateToSelectProgram()}>
                    <Text style={styles.buttonText}>Change Program</Text>
                </TouchableOpacity>
            </View>
            {dataWorkout ? <WorkoutPreviewPopUp isVisible={isModalVisible} workout={workoutBeingPreviewed} togglePopup={togglePopup} title={title} weekNumber={dataR && dataR.getProgramWeek ? dataR.getProgramWeek.weekNumber : 0}/>
            : <View></View>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {

    },

    buttonsContainer: {
        //   alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "row",
        marginTop: 20

    },
    programHeader:
    {
        fontSize: 30,
        fontWeight: 'bold',
        color: "white",
        marginHorizontal: 20,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "white",
        textAlign: "left",

    },
    workoutStatus: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "grey",
        textAlign: "left",
    },
    cardsContainer: {
        marginTop: 40,
    },
    weekButton: {
        width: 80,
        height: 40,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 10
    },
    bottomButton: {

        width: "40%",
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
    },
    overviewButton: {
        width: 120,
        height: 40,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
        marginVertical: 5,
    },
    buttonText: {
        fontSize: 13,
        alignSelf: "center",
        fontWeight: 'bold'
    },
    image: {
        width: 150,
        height: 100,
    },
    cardHeader : {
        justifyContent: 'center'
    },
    card : { 
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#191B1C",
        borderRadius: 20, 
        marginVertical: 20
    },
    cardNumber: {
        height: 40,
        width: 40,
        borderRadius: 30,
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        marginLeft: 5
    },
    cardInnerContent: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
        marginLeft: 20
    }
});

