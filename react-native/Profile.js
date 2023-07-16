import { StyleSheet, ScrollView, Image, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../src/graphql/queries";

export default function Profile() {
  const colors = useTheme().colors;
  const Tab = createMaterialTopTabNavigator();
  const leaders = [
    { name: "Zach B.", rank: 1, points: 8000 },
    { name: "Joel G.", rank: 2, points: 1980 },
    { name: "Sally R.", rank: 3, points: 1670 },
    { name: "You", rank: 6, points: 850 },
  ]
  const achievements = [
    { name: "Workout Master", description: "Work out for 500 minutes!", progress: "360/500" },
    { name: "Weekender", description: "Two workouts on the weekend!", progress: "1/2" },
    { name: "Super heat", description: "Master 5 endurance workouts!", progress: "4/5" }

  ]

  const { data, loading, error } = useQuery(gql`${queries.getUser}`, {
    variables: { id: global.userId}
  }); 


  

  const Leaders = () => (
    <View style={styles.leaderboardContainer}>
      {leaders.map((leader, index) => (
        <View style={[styles.leaderboardRow, index === leaders.length - 1 && styles.currentUserRow]} key={leader.rank}>
          <View style={styles.rankNamePic}>
            <Text style={styles.leaderboardText}>#{leader.rank}</Text>
            <Image style={styles.leaderBoardPic} source={require('../assets/caleb.jpeg')} />
            <Text style={styles.leaderboardText}>{leader.name}</Text>
          </View>
          <Text style={styles.leaderboardText}>{leader.points}</Text>
        </View>
      ))}

    </View>
  )

  return (

    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        <View style={styles.top}>
          {/*
          <TouchableOpacity>
            <Ionicons name="ios-settings-sharp" size={25} color="white" />
          </TouchableOpacity>
          */}
          {data && data.getUser.profilePicture == "sailorMich.png" ? <Image style={styles.profilePic} source={require(`../assets/sailorMich.png`)} /> 
          :<Image style={styles.profilePic} source={require('../assets/buffalo.png')} /> }
          {/*
          <TouchableOpacity>
            <FontAwesome5 name="user-plus" size={25} color="white" />
          </TouchableOpacity>
          */}
        </View>
        {data ? <><Text style={[styles.name, { color: colors.primary }]}>{data.getUser.firstName} {data.getUser.lastName}</Text>
          <Text style={[styles.accountName, { color: colors.text }]}>{data.getUser.email}</Text></>
        :  <Text style={[styles.name, { color: colors.primary }]}></Text>}
        
        {/*
        <View style={styles.followerContainer}>
          <View style={styles.followers}>
            <Text style={[styles.followerCount, { color: colors.text }]}>15</Text>
            <Text style={[styles.followerCount, { color: colors.text }]}>Followers</Text>
          </View>
          <View style={styles.following}>
            <Text style={[styles.followerCount, { color: colors.text }]}>24</Text>
            <Text style={[styles.followerCount, { color: colors.text }]}>Following</Text>
          </View>
        </View>
        */}
        <Text style={[styles.sectionName, { color: colors.text, marginTop: 50, textAlign: 'center' }]} >My Statistics</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
          <FontAwesome5 name="brain" size={25} color={"white"} />
            <Text style={{ color: colors.text }}>0</Text>
            <Text style={styles.statsText}>Mindful{"\n"}Minutes</Text>
          </View>
          <View style={styles.stat}>
            <FontAwesome5 name="fire" size={25} color="white" />
            <Text style={{ color: colors.text }}>0</Text>
            <Text style={styles.statsText}>Workouts{"\n"}Completed</Text>
          </View>
          
          <View style={styles.stat}>
          <MaterialCommunityIcons name="meditation" size={25} color="white" />
            <Text style={{ color: colors.text }}>0</Text>
            <Text style={styles.statsText}>Meditation{"\n"}Streak</Text>
          </View>
        
        </View>
        {/*
        <View style={styles.leaderboardHeader}>
          <Text style={[styles.sectionName, { color: colors.text }]}>Leaderboard</Text>
        </View>
        <View style={{ height: 270 }}>

          <Tab.Navigator screenOptions={{
            tabBarStyle: { backgroundColor: colors.backgroundColor, }, tabBarActiveTintColor: colors.text,
            tabBarInactiveTintColor: 'gray', tabBarIndicatorStyle: { inactiveTintColor: "#55595B", backgroundColor: "white" }
          }}>
            <Tab.Screen name="All time" component={Leaders} />
            <Tab.Screen name="Today" component={Leaders} />
            <Tab.Screen name="Week" component={Leaders} />
            <Tab.Screen name="Month" component={Leaders} />
          </Tab.Navigator>
        </View>
        
        <Text style={[styles.sectionName, { color: colors.text }]}>Achievements</Text>
        
        <View style={styles.achievementBubbleContainer}>
          {achievements.map((achievement, index) => (

            <View style={styles.achievementBubble} key={index}>
              <Text style={styles.achievementName}>You've done 3 workouts this week!</Text>
              <Text style={styles.achievementProgressText}>75% of your weekly goal is complete.</Text>
              
              <View style={styles.progressBarContainer}>
                <View style={styles.progressBarOuter}>
                  <View style={styles.progressBarInner}>
                  </View>
                </View>
              </View>
            </View>


          ))}
        </View>
        */}
      </View>
    </ScrollView>

  )


}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
    flex: 1
  },
  top: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 60,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 125
  },
  profilePic: {
    height: 160,
    width: 160,
    resizeMode: "contain",
  },
  name: {
    fontSize: 23,
    alignSelf: "center",
  },
  accountName: {
    fontSize: 15,
    marginTop: -10,
    alignSelf: "center",
  },
  followerContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10, 
    marginBottom: 20
  },
  followers: {
    flex: 1,
    flexDirection: "column",
    borderRightWidth: 1,
    borderColor: "#55595B",
    alignItems: "center"

  },
  following: {
    flex: 1,
    flexDirection: "column",
    borderLefttWidth: 1,
    borderColor: "#55595B",
    alignItems: "center"
  },
  followerCount: {
    fontSize: 20
  },
  leaderboardContainer: {
    flexDirection: "column",
    flex: 1,

  },
  leaderboardRow: {
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#55595B",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 20,

  },
  leaderboardText: {
    color: "#F0F0F0",
    fontSize: 18,


  },
  rankNamePic: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  },
  currentUserRow: {
    backgroundColor: "#55595B"
  },
  sectionName: {
    marginHorizontal: 20,
    fontSize: 22,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  stat: {
    flexDirection: "column",
    alignItems: "center",
    gap: 3
  },
  statsText: {
    color: "#55595B",
    textAlign: "center",
    marginHorizontal: 20
  },
  leaderboardHeader: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: -20
  },
  leaderBoardPic: {
    height: 40,
    width: 40,
    resizeMode: "contain",

    borderRadius: 20,
  },
  achievementBubble: {
    backgroundColor: '#CFB87B',
    height: 125,
    width: "95%",
    borderRadius: 20,
    justifyContent: 'center',
  },
  achievementBubbleContainer: {
    flexDirection: "column",
    alignItems: 'center',
    rowGap: 20
  },
  achievementName: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5,
    paddingLeft: 20
  },
  achievementProgressText: {
    color: 'rgb(51, 52, 54)',
    fontSize: 16,
    paddingLeft: 20,
  },
  progressBarOuter: {
    width: '90%',
    height: 10,
    backgroundColor: '#707071',
    borderRadius: 10
  },
  progressBarInner: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    width: '75%',
    height: 10,
  },
  progressBarContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 15
  },
  cardArrowContainer : {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto'
  },

});