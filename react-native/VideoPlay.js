import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import VideoCard from './components/VideoCard';
import { useState, useEffect, useRef } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../src/graphql/queries";
import * as mutations from "../src/graphql/mutations";


export default function VideoPlay({ route, navigation }) {

    const { data : dataGetStats, loading : loadingGetStats, error : errorGetStats } = useQuery(gql`${queries.getUserStats}`, {
        variables: { id: `stats-${global.userId}`}
    }); 

    const [updateUserStats, { data : dataUpdateStats, loading : loadingUpdateStats, error : errorUpdateStats}] = useMutation(gql`${mutations.updateUserStats}`);

    const [updateGeneralStats, { data : dataUpdateStatsG, loading : loadingUpdateStatsG, error : errorUpdateStatsG}] = useMutation(gql`${mutations.updateGeneralStats}`);


    /*
how many people are meditating
the times they meditate
which meditations are played most
how many minutes for each 

*/




    const colors = useTheme().colors;
    const { url, title, author, image, sections, section } = route.params;
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false)
    const multipliers = [1.0, 1.25, 1.5, 2]
    const [multiplierIndex, setMultiplierIndex]  = useState(0)
    const [speedMultiplier, setSpeedMultiplier] = useState(multipliers[0])
    const [bookmarked, setBookmarked] = useState(false)
    const [hasPlayed, setHasPlayed] = useState(false)
    const [length, setLength] = useState(section.length)
    const [finished, setFinished] = useState(false)
    const [pointsAdded, setPointsAdded] = useState(false)


    function str_pad_left(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    

    useEffect(() => {
        if (isPlaying) {
            const id = setInterval(() => {
                setCurrentTime((oldTime) => {
                    if(oldTime > length - 20 && !pointsAdded){
                            const statsInput = {
                                id: `stats-${global.userId}`,
                                mindfulMinutes: dataGetStats.getUserStats.mindfulMinutes + Math.floor(length / 60),
                                meditationStreak: dataGetStats.getUserStats.meditationStreak + 1,
                                workoutsCompleted: dataGetStats.getUserStats.workoutsCompleted
                            }
                    
                            updateUserStats({ variables : {input : statsInput} })

                            const today = new Date();
                            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            const generalStatsInput = {
                                id: `gymind-master-user-stats`,
                                usersMeditating: [global.userId],
                                timesMeditating: time,
                                meditationEntryListenMinutes: ['' + (length / 60)]
                            }


                            updateGeneralStats({ variables : {input : generalStatsInput} })
                        setPointsAdded(true)
                    }
                    if (oldTime >= length) {
                        clearInterval(id)
                        return oldTime
                    }
                    return oldTime + ((1 / 10) * speedMultiplier)
                })
            }, ((1000 / 10)))
            return () => {
                clearInterval(id);
            };
        }

    }, [isPlaying, speedMultiplier]);



    const sound = useRef(new Audio.Sound());


    const [pauseSound, setPauseSound] = useState(false)

    const ResumeAudio = async ()=>{
        try{
          const result = await sound.current.getStatusAsync();
          if(result.isLoaded){
            if(result.isPlaying === false){
              sound.current.playAsync();
            }
          }
        }catch(e){
          console.log('error while playing the audio',e)
        }
    };

    const PauseAudio = async() =>{
        try{
          const result = await sound.current.getStatusAsync();
          if(result.isLoaded){
            if(result.isPlaying === true){
              sound.current.pauseAsync();
            }
          }
        }catch(e){
          console.log("error while pausing the audio",e)
        }
    }

    async function LoadAudio() {
        await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

        const { sound: playbackObject, status: status } = await sound.current.loadAsync(
        { uri: url }
        );        
    
        const result = await sound.current.getStatusAsync();
          if(result.isLoaded){
            setLength(result.durationMillis / 1000)
          }
    }

    async function SkipAhead(){
        setCurrentTime(Math.min(currentTime + 15, length))
        try{
          const result = await sound.current.getStatusAsync();
          if(result.isLoaded){
            sound.current.playFromPositionAsync(Math.min(result.positionMillis + 15000), result.durationMillis);
          }
        }catch(e){
          console.log('error while playing the audio',e)
        }
    }

    async function SkipBehind(){
        setCurrentTime(Math.max(0, currentTime - 15))
        try{
          const result = await sound.current.getStatusAsync();
          if(result.isLoaded){
            sound.current.playFromPositionAsync(Math.min(result.positionMillis - 15000), 0);
          }
        }catch(e){
          console.log('error while playing the audio',e)
        }
    }

    useEffect(()=>{
        LoadAudio();
    },[]);


    async function speedChange(){
        const oldIndex = multiplierIndex
        setMultiplierIndex((oldIndex + 1) % multipliers.length)
        setSpeedMultiplier(multipliers[(oldIndex + 1) % multipliers.length])
        sound.current.setRateAsync(multipliers[(oldIndex + 1) % multipliers.length], true)
    }



    return (
        <ScrollView style={styles.container}>

            {/* Back arrow */}
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate("VideoOverview", {title: title, author: author, image: image})
                    sound.current.unloadAsync()
                }}>
                    <Ionicons name="arrow-back" size={35} color="white" />
                </TouchableOpacity>
            </View>

            {/* Image */}
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image} />
            </View>


            <View style={styles.textContainer}>
                {/* Title  <Text style={styles.titleText}>{title}</Text> */}
                
                {/* Section Title */}
                <Text style={styles.sectionTitleText}>{title}</Text>

                {/* Author */}
                <Text style={styles.authorText}>{section.title} · {author}</Text>

                {/* Progress */}
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBarOuter}>

                        <View style={[styles.progressBarInner, { width: `${(currentTime / length) * 100}%` }]}>
                        </View>
                    </View>
                </View>

                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{Math.floor(speedMultiplier * currentTime / 60) < 10 ? "0" + Math.floor(currentTime / 60) : Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60) < 10 ? "0" + Math.floor(currentTime % 60) : Math.floor(currentTime % 60)}</Text>
                    <Text style={styles.timeText}>-{Math.floor((speedMultiplier * (length - currentTime)) / 60) < 10 ? "0" + Math.floor((length - currentTime) / 60) : Math.floor((length - currentTime) / 60)}:{Math.floor((length - currentTime) % 60) < 10 ? "0" + Math.floor((length - currentTime) % 60) : Math.floor((length - currentTime) % 60)}</Text>
                </View>
                {/* Play Button */}
                <View style={styles.playContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* Speed multiplier */}
                        <TouchableOpacity style={styles.opaqueButton} onPress={() => speedChange()}>
                            <Text style={styles.speedMultiplierText}>{multipliers[multiplierIndex]}x</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            SkipBehind()
                            setIsPlaying(true)
                        }} style={[styles.opaqueButton, {marginHorizontal: 25}]}>
                            <Feather name="skip-back" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setIsPlaying(!isPlaying)
                            isPlaying ? PauseAudio() : ResumeAudio()
                        }} style={styles.playButton}>
                            {
                                (!isPlaying) ? <FontAwesome name="play" size={24} color="white" style={{ paddingLeft: 5 }} />
                                : <AntDesign name="pause" size={24} color="white" />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            SkipAhead()
                            setIsPlaying(true)
                            }} style={[styles.opaqueButton, {marginHorizontal: 25}]}>
                            <Feather name="skip-forward" size={24} color="white" />
                        </TouchableOpacity>

                        {/* Bookmark */}
                        <TouchableOpacity style={styles.opaqueButton} onPress={() => setBookmarked(!bookmarked)}>
                            {bookmarked ? <Ionicons name="bookmark" size={24} color="white" />
                            : <Ionicons name="bookmark-outline" size={24} color="white" /> }
                        </TouchableOpacity>
                    </View>
                </View>

            
            </View>
            {/* Settings */}
            <View style={styles.settingsContainer}>
                
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
        width: '85%',
        height: 340,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 30
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
        fontSize: 12,
        marginBottom: 50
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 24,
    },
    authorText: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
        opacity: .8
    },
    descriptionText: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
    },
    textContainer: {
        marginTop: 40,
        marginHorizontal: 30,
    },
    playButton: {
        backgroundColor: "#CFB87B",
        width: 60,
        height: 60,
        borderRadius: 90,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lengthText: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
    },
    sectionContainer: {
        marginTop: 20,
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: 20,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 12,
    },
    sectionDescription: {
        color: 'white',
        fontSize: 12,
    },
    sectionLength: {
        color: 'white',
        fontSize: 12,
    },
    progressBarOuter: {
        width: '100%',
        height: 5,
        backgroundColor: 'rgba(112, 112, 113, 0.3)',
        borderRadius: 10
    },
    progressBarInner: {
        backgroundColor: '#CFB87B',
        borderRadius: 10,
        height: 5,
    },
    progressBarContainer: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 25
    },
    timeText: {
        color: 'white',
        marginTop: 10
    },
    playContainer: {
        alignItems: 'center',
    },
    opaqueButton: {
        marginTop: 25,
        borderRadius: 90,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    speedMultiplierText: {
        color: 'white',
        fontSize: 16
    },
    settingsContainer: {
        marginHorizontal: 15
    }
});