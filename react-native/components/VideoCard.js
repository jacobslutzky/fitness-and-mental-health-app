import { StyleSheet, TouchableOpacity, ImageBackground, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function VideoCard( {item, index} ) {
  const navigation = useNavigation();
  const handlePress = ( item ) => {
    navigation.navigate('VideoOverview', {
      title: item.title,
      author: item.author,
      image: item.img,
    });
  }

    return (
        <View style={[styles.communityCard]} key={index} >
          <ImageBackground source = {item.img}>
          <TouchableOpacity style={{position: 'relative', height: "100%"}} onPress={() => handlePress(item)}>
            <View style={styles.cardBottom}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardAuthor}>{item.author}</Text>
            </View>
          </TouchableOpacity>
          </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    communityCard : {
        height: 250,
        width: 350,
        marginBottom: 30,
        borderRadius: 20,
        backgroundColor: "white",
        overflow: "hidden",
        marginLeft: 10,
        marginRight: 10
      },
      cardBottom : {
        height: "35%",
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#a3956f',
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
        backgroundColor: "#a3956f"
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
        backgroundColor: "#a3956f"
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
        backgroundColor: "#a3956f"
      },
      cardTimeText : {
        color: 'white',
      },
      cardStarsText : {
        color: 'white',
        marginLeft: 10,
      }


});


