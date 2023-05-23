import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import VideoCard from './components/VideoCard';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function VideoOverview({ route, navigation }) {
    const colors = useTheme().colors;
    const { title, author } = route.params
    console.log(title)
    return(
      <View style={styles.container}>

        {/* Back arrow */}
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Mindfulness")}>
                <Ionicons name="arrow-back" size={40} color="white" />
            </TouchableOpacity>
        </View>

        {/* Image */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source= {require('../assets/calebCommunity.jpg')} />
        </View>
        

        <View style={styles.textContainer}>
          {/* Title */}
          <Text style={styles.titleText}>{title}</Text>

          {/* Author */}
          <Text style={styles.authorText}>{author}</Text>
          
          {/* Description */}
          <Text style={styles.descriptionText}>This is a description placeholder that I made long to 
            take multiple lines.
          </Text>

          {/* Play Button */}
          <TouchableOpacity onPress={() => navigation.navigate("VideoPlay")}>

          </TouchableOpacity>

          {/* Section Container */}
        </View>

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
    image: {
      width: '80%'
    },
    imageContainer: {
      alignItems: 'center'
    },
    button: {
      width: '25%',
      height: 40,
      borderRadius: 6,
      justifyContent: 'center',
      marginTop: 50
    },
    headerContainer : {
        flexDirection: 'row',
        marginBottom: 20
    },
    titleText : {
      color: 'white',
      fontSize: 16,
    },
    authorText : {
      color: 'white',
      fontSize: 12,
      marginTop: 5,
    },
    descriptionText : {
      color: 'white', 
      fontSize: 12,
      marginTop: 5,
    },
    textContainer: {
      marginTop: 20,
      marginHorizontal: 20,
    }
  });