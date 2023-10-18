import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
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

      const communityCards = [
        {title: "20-minute power yoga", author: "Nama Ste", img: require('../assets/fitnessYoga1.jpg'), time: "20 min", stars: "4.7"},
        {title: "10-minute morning yoga", author: "Caleb Saks", img: require('../assets/fitnessYoga2.jpg'), time: "10 min", stars: "4.9"},
      ]
      
      const FirstRoute = () => (
        <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}} style={styles.cardsContainer}>
        {communityCards.map((item, index) => (
          <VideoCard item={item} index={index} />
        ))}
        </ScrollView>
      );

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
            <Text style={[styles.header, {color: colors.text}]}>Yoga</Text>
        </View>

        

          <TabView
        navigationState={state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: FirstRoute,
          third: FirstRoute,
          fourth: FirstRoute,
          fifth: FirstRoute
        })}
        onIndexChange={index => state.index = index}
        initialLayout={{}}
        style={styles.tabsContainer}
        renderTabBar={renderTabBar}
        />

      </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: 20,
        justifyCoontent: 'center',
        alignIterms: 'center'
      },
    button: {
      width: '35%',
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
        marginTop: 50
      },
      scene: {
        flex: 1,
      },
      cardsContainer : {
        marginTop: 40,
      },
      communityCard : {
        height: 250,
        width: "95%",
        marginBottom: 30,
        borderRadius: 20,
        backgroundColor: "white",
        overflow: "hidden",
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
      }
    });
  