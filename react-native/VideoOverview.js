import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import VideoCard from './components/VideoCard';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function VideoOverview({ route, navigation }) {
  const colors = useTheme().colors;
  const { title, author, image } = route.params
  const sections = [
    { title: "Introduction", description: "This is a description placeholder that I made long to take multiple lines.", length: 120 },
    { title: "Body", description: "This is a description placeholder that I made long to take multiple lines.", length: 10 },
    { title: "Ending", description: "This is a description placeholder that I made long to take multiple lines.", length: 5 },
  ]
  const [bookmarked, setBookmarked] = useState(false)
  return (
    <ScrollView style={styles.container}>

      {/* Back arrow */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Mindfulness")}>
          <Ionicons name="arrow-back" size={35} color="white" />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
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

        {/* Length */}
        <Text style={styles.lengthText}>{sections.length} Sections · 2h 15m</Text>

        {/* Play Button */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.navigate("VideoPlay", {
            title: title,
            author: author,
            image: image,
            sections: sections,
            section: sections[0],
          })} style={styles.playButton}>
            <FontAwesome name="play" size={16} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.opaqueButton} onPress={() => setBookmarked(!bookmarked)}>
                            {bookmarked ? <Ionicons name="bookmark" size={24} color="white" />
                            : <Ionicons name="bookmark-outline" size={24} color="white" /> }
          </TouchableOpacity>
        </View>

        {/* Section Container */}
        {
          sections.map((item, index) => (
            <TouchableOpacity onPress={() => navigation.navigate("VideoPlay", {
              title: title,
              author: author,
              image: image,
              sections: sections,
              section: sections[index],
            })} style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{item.title}</Text>
              <Text style={styles.sectionDescription}>{item.description}</Text>
              {item.length >= 60
                ? <Text style={styles.sectionLength}>{item.length / 60}h {item.length % 60}m</Text>
                : <Text style={styles.sectionLength}>{item.length % 60}m</Text>
              }
            </TouchableOpacity>
          ))
        }

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 20,
  },
  tabsContainer: {
    marginTop: 10,
    backgroundColor: 'black'
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  scene: {
    flex: 1,
  },
  cardsContainer: {
    marginTop: 40,
  },
  image: {
    width: '80%',
    height: 300,
  },
  imageContainer: {
    alignItems: 'center'
  },
  button: {
    width: '25%',
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    marginTop: 30, 
    marginLeft: 10
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  authorText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    opacity: 0.9
  },
  descriptionText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    opacity: 0.7
  },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 25,
  },
  playButton: {
    backgroundColor: "#CFB87B",
    width: 70,
    height: 40,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lengthText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    opacity: 0.9
  },
  sectionContainer: {
    marginTop: 20,
    borderBottomColor: 'rgba(255,255,255, 0.3)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  sectionDescription: {
    color: 'white',
    fontSize: 12,
    paddingBottom: 5,
  },
  sectionLength: {
    color: '#CFB87B',
    fontSize: 10,
    fontWeight: 'bold'
  },
  opaqueButton: {
    marginTop: 20,
    backgroundColor: 'rgba(220,220,220, 0.2)',
    borderRadius: 90,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
});