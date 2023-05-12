import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import VideoCard from './components/VideoCard';


export default function FitnessYoga({navigation}){
    const colors = useTheme().colors;
    const navigateToFitness = () => {
        navigation.navigate("Fitness")
      }

      const renderTabBar = props => (
        <TabBar
          {...props}
          style={{ backgroundColor: 'black' }}
        />
      );

      const popularWorkouts = [
        {title: "20-minute power yoga", author: "Nama Ste", img: require('../assets/fitnessYoga1.jpg'), time: "20 min", stars: "4.7"},
        {title: "10-minute morning yoga", author: "Caleb Saks", img: require('../assets/fitnessYoga2.jpg'), time: "10 min", stars: "4.9"},
        {title: "20-minute power yoga", author: "Nama Ste", img: require('../assets/fitnessYoga1.jpg'), time: "20 min", stars: "4.7"},
        {title: "10-minute morning yoga", author: "Caleb Saks", img: require('../assets/fitnessYoga2.jpg'), time: "10 min", stars: "4.9"},
      ]

      const quickWorkouts = [
        {title: "Quick Glute Burner", author: "Jacob Slutzky", img: require('../assets/quickWorkouts1.jpeg'), time: "20 min", stars: "4.7"},
        {title: "Arms & Back", author: "Tristan Maidment", img: require('../assets/quickWorkouts2.jpeg'), time: "10 min", stars: "4.9"},
        {title: "Quick Glute Burner", author: "Jacob Slutzky", img: require('../assets/quickWorkouts1.jpeg'), time: "20 min", stars: "4.7"},
        {title: "Arms & Back", author: "Tristan Maidment", img: require('../assets/quickWorkouts2.jpeg'), time: "10 min", stars: "4.9"},
      ]
      
      const categories = [
        {title: "Cardio", icon: require('../assets/quickWorkouts1.jpeg'), time: "20 min", stars: "4.7"},
        {title: "Strength", icon: require('../assets/quickWorkouts2.jpeg'), time: "10 min", stars: "4.9"},
        {title: "Endurance", icon: require('../assets/quickWorkouts1.jpeg'), time: "20 min", stars: "4.7"},
        {title: "Flexibility", icon: require('../assets/quickWorkouts2.jpeg'), time: "10 min", stars: "4.9"},
      ]

      state = {
        index: 0,
        routes: [
          { key: 'first', title: 'All' },
          { key: 'second', title: 'Power' },
          { key: 'third', title: 'Hot' },
          { key: 'fourth', title: 'Nidra' },
        ],
      };

    return(
    <View style={styles.container}>
        {/* Header + back arrow */}
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.button} onPress={navigateToFitness}>
                <Ionicons name="arrow-back" size={40} color="white" />
            </TouchableOpacity>
            <Text style={[styles.header, {color: colors.text}]}>Workouts</Text>
        </View>

        <ScrollView>
          {/* Temporary mock for search bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Text style={styles.searchText}>Search</Text>
            </View>
          </View>
          
          <Text style={styles.popularWorkoutsText}>Categories</Text>
          <View style={{alignItems: 'center', marginTop: 20}}>
          <View style={styles.categoriesContainer}>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryIconContainer}>
                <FontAwesome name="heartbeat" size={40} color="rgb(207, 184, 124)" />
              </View>
              <Text style={styles.categoryText}>Cardio</Text>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryIconContainer}>
                <FontAwesome5 name="dumbbell" size={40} color="rgb(207, 184, 124)" />
              </View>
              <Text style={styles.categoryText}>Strength</Text>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryIconContainer}>
                <MaterialCommunityIcons name="timer" size={40} color="rgb(207, 184, 124)" />
              </View>
              <Text style={styles.categoryText}>Endurance</Text>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryIconContainer}>
                <MaterialCommunityIcons name="yoga" size={40} color="rgb(207, 184, 124)" />
              </View>
              <Text style={styles.categoryText}>Flexibility</Text>
            </View>
            </View>
          </View>

          <Text style={styles.popularWorkoutsText}>Most popular workouts</Text>

          <View style={styles.cardsContainer}>
            <ScrollView horizontal={true} 
            contentContainerStyle={{width: `${100 * popularWorkouts.length}%`}} 
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled>
                {popularWorkouts.map((item, index) => (
                  <VideoCard item={item} index={index} />
                ))}
            </ScrollView>
          </View>



          <Text style={styles.popularWorkoutsText}>Quick Workouts</Text>

          <View style={styles.cardsContainer}>
            <ScrollView horizontal={true} 
            contentContainerStyle={{width: `${100 * quickWorkouts.length}%`}} 
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled>
                {quickWorkouts.map((item, index) => (
                  <VideoCard item={item} index={index} />
                ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
};

//contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: 20,
        justifyCoontent: 'center',
        alignIterms: 'center'
      },
    button: {
      width: 40,
      height: 40,
      borderRadius: 6,
      justifyContent: 'center',
      marginTop: 50
    },
    tabsContainer: {
        marginTop: 10,
        backgroundColor: 'black'
      },
      headerContainer : {
        flexDirection: 'row',
        marginBottom: 20
      },
      header : {
        fontSize: 40,
        fontWeight: 'bold',
        position: 'absolute',
        right: '30%',
        marginTop: 50
      },
      cardRow : {
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flex: 1
      },
      cardsContainer : {
        marginTop: 20,
        flex: 1
      },
      communityCard : {
        height: 250,
        width: 375,
        marginBottom: 30,
        borderRadius: 20,
        backgroundColor: "white",
        overflow: "hidden",
        marginLeft: 10,
        marginRight: 10
      },
      cardBottom : {
        height: "35%",
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#707071',
        width: "100%",
        borderRadius: 10,
      },
      cardTitle : {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 20
      },
      cardAuthor : {
        color: 'white',
        fontSize: 15,
        marginLeft: 10,
        marginTop: 5,
      },
      cardTimeContainer : {
        position: 'absolute',
        left: 10,
        top: 15,
        width: 75,
        height: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#707071"
      },
      cardHeartContainer : {
        position: 'absolute',
        right: 85,
        top: 10,
        width: 25,
        height: 25,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#707071"
      },
      cardStarsContainer : {
        position: 'absolute',
        right: 10,
        top: 10,
        width: 70,
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: "#707071"
      },
      cardTimeText : {
        color: 'white',
      },
      cardStarsText : {
        color: 'white',
        marginLeft: 10,
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
        marginBottom: 15,
      },
      searchText : {
        marginLeft: 10,
      },
      popularWorkoutsText : {
        overflow: 'hidden',
        margin: 0,
        color: 'white',
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'left',
        textTransform: 'none',
        opacity: 1,
        marginLeft: 10,
        marginTop: 10
      },
      categoriesContainer: {
        flexDirection: 'row', 
        marginBottom: 20
      },
      categoryIconContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 72,
        backgroundColor: 'rgb(85, 89, 95)',
        borderRadius: 12,
        opacity: 1,
        border: 0,
      },
      categoryContainer: {
        height: 100,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center'
      },
      categoryText : {
        color: 'white',
        marginTop: 5
      }
    });
  