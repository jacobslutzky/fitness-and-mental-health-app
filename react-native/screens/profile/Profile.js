import { StyleSheet, ScrollView, Image, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useQuery, gql } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";
import { useState, React, useEffect } from 'react';
import { Colors } from '../../constants/Colors';
import { useAuthenticator } from '@aws-amplify/ui-react-native';

export default function Profile() {
  const colors = useTheme().colors;
  const [leaders, setLeaders] = useState([
    { name: "Zach B.", rank: 1, points: 8000 },
    { name: "Joel G.", rank: 2, points: 1980 },
    { name: "Sally R.", rank: 3, points: 1670 },
    { name: "You", rank: 6, points: 850 },
  ])

  const [achievements, setAchievements] = useState([])

  const { data: dataAchievements } = useQuery(gql`${queries.listAchievements}`)

  const { data: dataAchievementProgresses } = useQuery(gql`${queries.listAchievementProgresses}`, {
    variables: {
      filter:
      {
        userStatsAchievementProgressesId: {
          eq: `stats-${global.userId}`
        }
      }
    }
  })

  const [achievementFlag, setAchievementFlag] = useState(false)

  useEffect(() => {
    if (!dataAchievements) return
    console.log(dataAchievements.listAchievements.items)

    for (let i = 0; i < dataAchievements.listAchievements.items.length; i++) {
      const achievement = dataAchievements.listAchievements.items[i]
      const achievementConverted = { name: achievement.title, description: achievement.description, progress: 0, goal: achievement.goal }
      if (achievements.length == 0 || achievements[achievements.length - 1].name != achievementConverted.name) {
        setAchievements([...achievements, achievementConverted])
      }
      console.log('achievements: ', achievementConverted)
    }
    console.log(achievements)
    setAchievementFlag(true)
  }, [dataAchievements])

  const { data: dataGetStats } = useQuery(gql`${queries.getUserStats}`, {
    variables: { id: `stats-${global.userId}` }
  });

  useEffect(() => {
    console.log(dataAchievementProgresses ? dataAchievementProgresses.listAchievementProgresses : "not available")
    const achievementProgresses = dataAchievementProgresses ? dataAchievementProgresses.listAchievementProgresses.items : []
    console.log('lengths', achievements.length, achievementProgresses.length)
    for (let i = 0; i < achievements.length; i++) {
      const achievement = achievements[i]
      for (let j = 0; j < achievementProgresses.length; j++) {
        const achievementProgress = achievementProgresses[j]
        console.log('Achievement Progress: ', achievementProgress)
        if (achievement.name == achievementProgress.title) {
          const achievementConverted = { name: achievement.name, description: achievement.description, progress: achievementProgress.progress, goal: achievement.goal }
          let achievementsTemp = achievements.slice()
          achievementsTemp[i] = achievementConverted
          setAchievements(achievementsTemp)
          console.log('percent', achievements[i].progress, achievements[i].goal, 100 * (achievements[i].progress / achievements[i].goal))
        }
      }
    }
    console.log(achievements)

  }, [dataGetStats, dataAchievements, achievementFlag, dataAchievementProgresses])

  const { user, signOut } = useAuthenticator((context) => [context.user]);


  const { data: dataUserStats } = useQuery(gql`${queries.listUserStats}`)

  useEffect(() => {
    if (!dataUserStats) return
    let tempLeaders = []
    let userStatsList = dataUserStats.listUserStats.items
    for (let i = 0; i < userStatsList.length; i++) {
      tempLeaders.push({ name: userStatsList[i].email, points: userStatsList[i].points })
    }

    tempLeaders.sort(function (a, b) {
      return b.points - a.points;
    })

    setLeaders(tempLeaders)
  }, [dataUserStats])

  const Tab = createMaterialTopTabNavigator();

  const Leaders = () => (
    <ScrollView style={styles.leaderboardContainer}>
      {leaders.map((leader, index) => (
        <View style={[styles.leaderboardRow, index === leaders.length - 1 && styles.currentUserRow]} key={leader.rank}>
          <View style={styles.rankNamePic}>
            <Text style={styles.leaderboardText}>#{index + 1}</Text>
            <Image style={styles.leaderBoardPic} source={require('../../../assets/dumbell.jpeg')} />
            <Text style={styles.leaderboardText}>{leader.name}</Text>
          </View>
          <Text style={styles.leaderboardText}>{leader.points}</Text>
        </View>
      ))}

    </ScrollView>
  )

  return (

    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        <View style={styles.top}>
          <Image style={styles.profilePic} source={require('../../../assets/buffalo.png')} />
        </View>
        {user ? <><Text style={[styles.name, { color: colors.primary }]}>{user.attributes.name}</Text>
          <Text style={[styles.accountName, { color: colors.text }]}>{user.attributes.email}</Text></>
          : <Text style={[styles.name, { color: colors.primary }]}></Text>}
        <View style={styles.followerContainer}>
          <View style={styles.followers}>
            <Text style={[styles.followerCount, { color: colors.text }]}>0</Text>
            <Text style={[styles.followerCount, { color: colors.text }]}>Followers</Text>
          </View>
          <View style={styles.following}>
            <Text style={[styles.followerCount, { color: colors.text }]}>0</Text>
            <Text style={[styles.followerCount, { color: colors.text }]}>Following</Text>
          </View>
        </View>

        <Text style={[styles.sectionName, { color: colors.text, marginTop: 50, textAlign: 'center' }]} >My Statistics</Text>
        <View style={styles.statsContainer}>
          <View style={[styles.stat, { paddingRight: 25 }]}>
            <FontAwesome5 name="brain" size={25} color={"white"} />
            <Text style={{ color: colors.text }}>{dataGetStats && dataGetStats.getUserStats ? dataGetStats.getUserStats.mindfulMinutes : 0}</Text>
            <Text style={styles.statsText}>Mindful{"\n"}Minutes</Text>
          </View>
          <View style={styles.stat}>
            <FontAwesome5 name="fire" size={25} color="white" />
            <Text style={{ color: colors.text }}>{dataGetStats && dataGetStats.getUserStats ? dataGetStats.getUserStats.workoutsCompleted : 0}</Text>
            <Text style={styles.statsText}>Workouts{"\n"}Completed</Text>
          </View>

          <View style={styles.stat}>
            <MaterialCommunityIcons name="meditation" size={25} color="white" />
            <Text style={{ color: colors.text }}>{dataGetStats && dataGetStats.getUserStats ? dataGetStats.getUserStats.meditationStreak : 0}</Text>
            <Text style={styles.statsText}>Meditations{"\n"}Completed</Text>
          </View>
        </View>
        <View style={styles.leaderboardHeader}>
          <Text style={[styles.sectionName, { color: colors.text }]}>Leaderboard</Text>
        </View>
        <View style={{ height: 300 }}>

          <Tab.Navigator screenOptions={{
            tabBarStyle: { backgroundColor: colors.backgroundColor, }, tabBarActiveTintColor: colors.text,
            tabBarInactiveTintColor: 'gray', tabBarIndicatorStyle: { inactiveTintColor: "#55595B", backgroundColor: "white" }
          }}>
            <Tab.Screen name="All time" component={Leaders} />
          </Tab.Navigator>
        </View>

        <Text style={[styles.sectionName, { color: colors.text }]}>Achievements</Text>

        <View style={styles.achievementBubbleContainer}>
          {achievements.map((achievement, index) => (

            <View style={styles.achievementBubble} key={index}>
              <Text style={styles.achievementName}>{achievement.description}</Text>
              <Text style={styles.achievementProgressText}>{100 * (achievement.progress / achievement.goal)}% of your weekly goal is complete.</Text>

              <View style={styles.progressBarContainer}>
                <View style={styles.progressBarOuter}>
                  <View style={[styles.progressBarInner, { width: `${100 * (achievement.progress / achievement.goal)}%` }]}>
                  </View>
                </View>
              </View>
            </View>


          ))}
        </View>
      </View>
      <View style={styles.signoutContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => signOut()} >
          <Text style={styles.buttonText} > Sign Out </Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 80
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
    marginTop: 30
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
    marginTop: 10,
    marginBottom: 20
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
    height: 10,
  },
  progressBarContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 15
  },
  cardArrowContainer: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto'
  },
  bottomButton: {
    width: "40%",
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  signoutContainer: {
    marginTop: 50,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: 'center'
  }

});