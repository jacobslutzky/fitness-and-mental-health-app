import { StyleSheet, TouchableOpacity, ImageBackground, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

export default function AchievementBubble( {achievementName, achievementProgress, achievementProgressText} ) {
    return (
        <View style={styles.achievementBubbleContainer}>
          <View style={styles.achievementBubble}>
            <Text style={styles.achievementName}>{achievementName}</Text>
            <Text style={styles.achievementProgressText}>{achievementProgressText}</Text>

            {/* Progress Bar */}
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarOuter}>
                <View style={[styles.progressBarInner, {width: `${achievementProgress}%`}]}>
                </View>
              </View>
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    achievementBubble : {
        backgroundColor: '#CFB87B',
        height: 125,
        width: "95%",
        borderRadius: 20,
        justifyContent: 'center',
      },
    achievementBubbleContainer : {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
      },
      achievementName : {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 5,
        paddingLeft: 20
      },
      achievementProgressText : {
        color: 'rgb(51, 52, 54)',
        fontSize: 16,
        paddingLeft: 20,
      },
      progressBarOuter : {
        width: '90%',
        height: 10,
        backgroundColor: '#707071',
        borderRadius: 10
      },
      progressBarInner : {
        backgroundColor: '#1A1A1A',
        borderRadius: 10,
        height: 10,
      },
      progressBarContainer : {
        width : '100%',
        alignItems: 'center',
        paddingTop: 15
      },
});


