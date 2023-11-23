import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FontAwesome } from '@expo/vector-icons';

export default function VideoOverview({ route, navigation }) {
  const { title, author, image } = route.params
  const sections = [
    { url: "https://d1eff9kpv3cdea.cloudfront.net/Allowing-Yourself-to-Rest-in-Being.mp4", title: "Allowing Yourself to Rest in Being", description: "Allow everything about your experience to simply be.", length: 4 },
    { url: "https://d1eff9kpv3cdea.cloudfront.net/Don't-Look-For-Anything-Else-mg.mp3", title: "Don’t Look for Anything Else", author: author, image: image, description: "Be with things exactly as they are.", length: 5 },
    { url: "https://d1eff9kpv3cdea.cloudfront.net/Ever-Present-Presence.mp4", title: "Ever Present Presence", author: author, image: image, description: "Connect with the undeniable awareness that is with us in each and every moment.", length: 5 },
    { url: "https://d1eff9kpv3cdea.cloudfront.net/Letting-Go.mp4", title: "Letting Go", author: author, image: image, description: "Explore the present moment with gentleness, openness, and curiosity.", length: 2 },
    { url: "https://d1eff9kpv3cdea.cloudfront.net/Letting-the-Moment-Be.mp3", title: "Letting the Moment Be", author: author, image: image, description: "For the next few moments, see what it is like to simply experience whatever is being experienced.", length: 6 },
    { url: "https://d1eff9kpv3cdea.cloudfront.net/No-Matter-You're-Thinking-You-Are.mp3", title: "No Matter Your Thinking, You are", author: author, image: image, description: "Draw upon the ever-present essence of each moment.", length: 4 },
    { url: "https://d1eff9kpv3cdea.cloudfront.net/Relaxing-All-Effort.mp4", title: "Relaxing All Effort", author: author, image: image, description: "We are constantly trying to make our experience different than it naturally is. Take a moment to simply relax into the present.", length: 4 },
    { url: "https://d1eff9kpv3cdea.cloudfront.net/Relaxing-with-What-Is.mp4", title: "Relaxing With What Is", author: author, image: image, description: "Discover what it means to you when you finally let experience be as it is.", length: 5 },
    { url: "https://d1eff9kpv3cdea.cloudfront.net/Simply-Notice-Thought.mp3", title: "Simply Noticing Thought", author: author, image: image, description: "Become aware of what happens to your thoughts when you notice them.", length: 4 },
    { url: "https://d1eff9kpv3cdea.cloudfront.net/The-Mode-of-Just-Being.mp4", title: "The River of Experience", author: author, image: image, description: "Allow your everyday experience to flow like water.", length: 2 },
    { url: "https://d1eff9kpv3cdea.cloudfront.net/The-River-of-Experience.mp4", title: "The Mode of Just Being", author: author, image: image, description: "Notice what happens to your mind when you practice just being here now.", length: 4 }
  ]
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Session", sections: sections },
      { key: "second", title: "Summary" },
      { key: "third", title: "Teacher" }
    ],
  };
  const renderTabBar = props => (
    <TabBar
      {...props}
      style={{ backgroundColor: 'black' }}
    />
  );
  const SessionsRoute = () => (
    <View style={{ flex: 1, marginHorizontal: 20, textAlign: 'center' }}>
      {
        sections.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate("VideoPlay", {
            url: sections[index].url,
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
  );

  const SummaryRoute = () => (
    <View style={{ textAlign: 'center', marginHorizontal: 30, marginTop: 10 }}>
      <Text style={{ color: 'white' }}>Explore what happens when you learn to relax into the present moment.</Text>
    </View>
  );


  const TeacherRoute = () => (
    <View style={{ textAlign: 'center', marginHorizontal: 30, marginTop: 10 }}>
      <Text style={{ color: 'white' }}><Text>John Astin is a renowned meditation instructor, musician, and psychology professor. He has penned four insightful books that delve into the intricacies of human experience: *Too Intimate for Words* (2005), *This Is Always Enough* (2008), *Searching for Rain in a Monsoon* (2012), and *This Extraordinary Moment* (2018). In addition to his literary contributions, he is a gifted singer, songwriter, and has released seven albums filled with original contemplative-spiritual tracks.

        With a Ph.D. in health psychology, John is a respected figure in the realm of mind-body medicine on a global scale. His research emphasizes the role of meditative and contemplative practices in both psychology and health care. Currently, he is an adjunct professor in the clinical/counseling psychology departments of Santa Clara and Notre Dame de Namur Universities.</Text></Text>
    </View>
  );


  return (
    <>
      <ScrollView style={styles.container}>

        {/* Image */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>


        <View style={styles.textContainer}>
          {/* Title */}
          <Text style={styles.titleText}>{title}</Text>

          {/* Author */}
          <Text style={styles.authorText}>{author}</Text>



          {/* Length */}
          <Text style={styles.lengthText}>{sections.length} Sections · 2h 15m</Text>

          {/* Play Button */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.navigate("VideoPlay", {
              url: sections[0].url,
              title: title,
              author: author,
              image: image,
              sections: sections,
              section: sections[0],
            })} style={styles.playButton}>
              <FontAwesome name="play" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <TabView
          navigationState={state}
          renderScene={SceneMap({
            first: SessionsRoute,
            second: SummaryRoute,
            third: TeacherRoute,
          })}
          onIndexChange={index => state.index = index}
          initialLayout={{}}
          style={[styles.tabsContainer, { height: 120 * sections.length }]}
          sceneContainerStyle={{ height: '100%', flex: 1, width: '100%', alignItems: 'center' }}
          renderTabBar={renderTabBar}
        />
      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 20
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
    backgroundColor: 'rgba(220,220,220, 0.1)',
    borderRadius: 90,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
});