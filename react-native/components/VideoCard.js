import { StyleSheet, TouchableOpacity, ImageBackground, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
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
            <View style={styles.cardTimeContainer}>
              <Text style={styles.cardTimeText}>{item.time}</Text>
            </View>
            <View style={styles.cardHeartContainer}>
              <AntDesign name="heart" size={13} color="white" />
            </View>
            <View style={styles.cardStarsContainer}>
              <FontAwesome name="star" size={15} color="white" style = {{marginLeft: 10}}/>
              <Text style={styles.cardStarsText}>{item.stars}</Text>
            </View>
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
        width: 375,
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
        backgroundColor: '#707071',
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
        backgroundColor: "#707071"
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
        backgroundColor: "#707071"
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
        backgroundColor: "#707071"
      },
      cardTimeText : {
        color: 'white',
      },
      cardStarsText : {
        color: 'white',
        marginLeft: 10,
      }


});


