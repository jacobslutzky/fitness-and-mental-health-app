import React, { useState } from 'react';
import { StyleSheet, Image, ImageBackground, TouchableOpacity, Text, View, TextBase } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from './constants/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

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
        {title: "10-minute morning yoga", author: "Caleb Saks", img: require('../assets/fitnessYoga1.jpg'), time: "20 min", stars: "4.7"},
        {title: "20 min Arms & Back", author: "Caleb Saks", img: require('../assets/fitnessYoga2.jpg'), time: "10 min", stars: "4.9"},
      ]
      
      const FirstRoute = () => (
        <View style={styles.cardsContainer}>
        {communityCards.map((item, index) => (
          <View style={[styles.communityCard]} key={index} >
            <ImageBackground source = {item.img}>
            <TouchableOpacity style={{position: 'relative', height: "100%"}} onPress={() => handlePress(item)}>
              <View style={styles.cardTimeContainer}>
                <Text style={styles.cardTimeText}>{item.time}</Text>
              </View>
              <View style={styles.cardHeartContainer}>
                <AntDesign name="heart" size={13} color="white" />
              </View>
              <View style={styles.cardStarsContainer}>
                <FontAwesome name="star" size={15} color="white" style = {{marginLeft: 10}}/>
                <Text style={styles.cardStarsText}>{item.stars}</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardAuthor}>{item.author}</Text>
              </View>
            </TouchableOpacity>
            </ImageBackground>
          </View>
        ))}
        </View>
      );

      state = {
        index: 0,
        routes: [
          { key: 'first', title: 'All' },
          { key: 'second', title: 'Legs' },
          { key: 'third', title: 'Arms' },
          { key: 'fourth', title: 'Abs' },
        ],
      };

    return(
    <View style={styles.container}>
        {/* Header + back arrow */}
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.button} onPress={navigateToFitness}>
                <Ionicons name="arrow-back" size={40} color="white" />
            </TouchableOpacity>
            <Text style={[styles.header, {color: colors.text}]}>Favorites</Text>
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
        right: '40%',
        marginTop: 50
      },
      scene: {
        flex: 1,
      },
      cardsContainer : {
        alignItems: 'center',
        justifyContent: 'center',
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
  