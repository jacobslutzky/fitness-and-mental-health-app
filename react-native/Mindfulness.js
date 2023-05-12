import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import VideoCard from './components/VideoCard';


export default function Mindfulness() {
    const colors = useTheme().colors;

    const videoCards = [
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
      {videoCards.map((item, index) => (
        <VideoCard item={item} index={index} />
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
          second: FirstRoute,
          third: FirstRoute,
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

  });