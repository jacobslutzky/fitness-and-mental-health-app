import { StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity, Text, View, TextBase } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from './constants/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';


export default function Mindfulness() {
    const colors = useTheme().colors;
    const Tab = createMaterialTopTabNavigator();
    const Stack = createStackNavigator();

   
    const MyTheme = {

      colors: {
        primary: Colors.primary,
        background: Colors.background,
        text: Colors.text,
        card: 'rgb(255, 255, 255)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
      },
    };

    const communityCards = [
      {title: "20-minute guided meditation", author: "Nama Ste", img: require('../assets/calebCommunity.jpg'), time: "20 min", stars: "4.7"},
      {title: "10-minute affirmation therapy", author: "Caleb Saks", img: require('../assets/affirmationTherapy.jpeg'), time: "10 min", stars: "4.9"},
    ]

    const renderTabBar = props => (
      <TabBar
        {...props}
        style={{ backgroundColor: 'black' }}
      />
    );
    
    const FirstRoute = () => (
      <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}} style={styles.cardsContainer}>
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
    
      </ScrollView>
    );
    const SecondRoute = () => (
      <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}} style={styles.cardsContainer}>
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
      </ScrollView>
    );
    const ThirdRoute = () => (
      <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}} style={styles.cardsContainer}>
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
      </ScrollView>
    );
    state = {
      index: 0,
      routes: [
        { key: 'first', title: 'All' },
        { key: 'second', title: 'Meditation' },
        { key: 'third', title: 'Therapy' },
      ],
    };

    return(
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={[styles.header, {color: colors.text}]}>Mindfulness</Text>
        </View>

        <TabView
        navigationState={state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
        })}
        onIndexChange={index => state.index = index}
        initialLayout={{}}
        style={styles.tabsContainer}
        sceneContainerStyle={{height: '100%', flex: 1}}
        renderTabBar={renderTabBar}
        />

      </View>
    )
    
  
  
  
  }

const styles = StyleSheet.create({
  
    container : {
      flex: 1,
      marginTop: 20,
    },
    tabsContainer: {
      marginTop: 10,
      backgroundColor: 'black'
    },
    headerContainer : {
      alignItems: 'center',
      justifyContent: 'center',
    },
    header : {
      fontSize: 40,
      fontWeight: 'bold',
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