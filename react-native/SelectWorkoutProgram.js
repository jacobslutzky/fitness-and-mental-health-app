import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabBar } from 'react-native-tab-view';
import VideoCard from './components/VideoCard';
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";



export default function SelectWorkoutProgram({navigation}){
    const colors = useTheme().colors;
    
    
    const navigateToWorkoutInfo = (title) => {
        navigation.navigate("WorkoutProgramInfo", { title })
      }

      

      const communityCards = [
        {title: "CALEB SAKS OLYMPIA PREP 2023 OFF SEASON", subtitle: "Accountability is key", img: require('../assets/quickWorkouts1.jpeg')},
        {title: "THE PERFECT PUSH PULL LEGS ROUTINE", subtitle: "Accountability is key", img: require('../assets/quickWorkouts2.jpeg')},
        {title: "THAT 90'S LOOK ARMS AND QUADS SPECIALIZATION", subtitle: "Accountability is key", img: require('../assets/calebCommunity.jpg')},
        {title: "CLASSIC ARNOLD SPLIT", subtitle: "Accountability is key", img: require('../assets/calebCommunity2.jpg')},
        {title: "HIGH INTENSITY INTERVAL TRAINING", subtitle: "Accountability is key", img: require('../assets/quickWorkouts1.jpeg')},
        {title: "4 DAY UPPER/LOWER SPLIT", subtitle: "Accountability is key", img: require('../assets/quickWorkouts2.jpeg')},
      ]
      

    

    return(
    <View style={styles.container}>
    
        <Text style={[styles.header, {color: colors.text}]}>Select Your Program</Text>

        <ScrollView >
            <View style={styles.cardsContainer}>
            {communityCards.map((item, index) => (
          <View style={styles.communityCard} key={index} >
            <TouchableOpacity onPress={() => navigateToWorkoutInfo(item.title)}>
              {
                  <View style={styles.communityCardContents}>
                      <Image style = {styles.cardImages} source={item.img} />
                      
                      <Svg height="100%" width="100%" style={ StyleSheet.absoluteFillObject }>
                        <Defs>
                            <LinearGradient id="grad" x1="0%" y1="0%" x2="75%" y2="0%">
                                <Stop offset="0" stopOpacity="0.2" stopColor={'black' }/>
                                <Stop offset="1" stopOpacity="1" stopColor={ "black" }/>
                            </LinearGradient>
                        </Defs>
                        <Rect width="100%" height="100%" fill="url(#grad)"/>
                      </Svg>
                    </View>
               
            
              }
                <View style={styles.cardMain}>
                    <Text style={[styles.title, styles.textRight, {color: colors.primary}]}>{item.title}</Text>
                    
                </View>
            </TouchableOpacity>
          </View>
        ))}
        </View>
        </ScrollView>

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
      width: '25%',
      height: 40,
      borderRadius: 6,
      justifyContent: 'center',
      marginTop: 50
    },
    tabsContainer: {
        marginTop: 10,
        backgroundColor: 'black'
      },
      
      header : {
        fontSize: 40,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: "center"
      },
      scene: {
        flex: 1,
      },
      
      cardBottom : {
        height: "35%",
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#707071',
        width: "100%",
        borderRadius: 10,
      },
      title : {
        
         
         color: 'white',
         fontWeight: 700,
         fontSize: 30,
         letterSpacing: 0,
        //lineHeight: 60,
         width: "70%",
         alignSelf: "flex-end",
         textAlign: "right",
         justifyContent: "center",
         opacity: 1,
      },
      subtitle : {
        fontSize: 18,
        color: "rgb(22, 18, 17)",
        marginTop: 10
      },
      cardsContainer : {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
        
      },
      communityCard : {
        height: 150,
        width: "90%",
        marginBottom: 30,
        borderRadius: 20,
        overflow: "hidden",
      },
      cardImages : {
        width: "80%",
        height: "100%"
    
      },
     
      cardMain : {
        
        width: "100%",
        position: 'absolute',
        right: 0,
        height: '100%',
        
        justifyContent: 'center'
      },
      communityCardContents : {
        flexDirection: "row",
        height: 150,
      },
      textRight : {
        
        marginRight: 20,
        justifyContent: "center"
      }
    });
     
      

  