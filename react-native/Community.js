import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function Community({navigation}) {
    const colors = useTheme().colors;

    const handlePress = ( item ) => {
      navigation.navigate(item.screen);
    }

    const communityCards = [
      {title: "Find a Workout Partner", subtitle: "Accountability is key", img: require('../assets/calebCommunity.jpg')},
      {title: "Ask or Answer Questions", subtitle: "Increase your knowledge", img: require('../assets/calebCommunity2.jpg')},

      
    ]

    return(
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={[styles.header, {color: colors.text}]}>Commmunity</Text>
        </View>

        {/* Cards */}
        <View style={styles.cardsContainer}>
        {communityCards.map((item, index) => (
          <View style={styles.communityCard} key={index} >
            <TouchableOpacity onPress={() => handlePress(item)}>
              {(index % 2) 
                  ? <View style={styles.communityCardContents}>
                      <Image style = {styles.cardImages} source={item.img} />
                      <View style={[styles.cardMainV2, {backgroundColor: colors.primary}]}>
                        <Text style={[styles.title, styles.textRight]}>{item.title}</Text>
                        <Text style={[styles.subtitle, styles.textRight]}>{item.subtitle}</Text>
                      </View>
                    </View>
                : <View style={styles.communityCardContents}>
                    <View style={[styles.cardMainV1, {backgroundColor: colors.primary}]}>
                      <Text style={[styles.title, styles.textLeft]}>{item.title}</Text>
                      <Text style={[styles.subtitle, styles.textLeft]}>{item.subtitle}</Text>
                    </View>
                    <Image style = {styles.cardImages} source={item.img} />
                  </View>
            
              }
              <Text style={[styles.buttonText, {color: colors.text}]}>{item.label}</Text>
            </TouchableOpacity>
          </View>
        ))}
        </View>

      </View>
    )
  
  
  
  }

  const styles = StyleSheet.create({
  
    container : {
      flex: 1,
    },
    headerContainer : {
      alignItems: 'center',
      justifyContent: 'center',
    },
    header : {
      fontSize: 40,
      fontWeight: 'bold',
    },
    title : {
      fontSize: 40,
      fontWeight: 'bold',
      color: "rgb(22, 18, 17)",
    },
    subtitle : {
      fontSize: 12,
      color: "rgb(22, 18, 17)",
    },
    cardsContainer : {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    communityCard : {
      height: 250,
      width: "95%",
      marginBottom: 30,
      borderRadius: 20,
      backgroundColor: "white",
      overflow: "hidden",
    },
    cardImages : {
      height: "100%",
      width: 150,
    },
    cardMainV1 : {
      width: 225,
    },
    cardMainV2 : {
      width: 225,
      justfiyContent: 'center',
    },
    communityCardContents : {
      flexDirection: "row",
      height: 250,
    },
    textLeft : {
      textAlign: "left",
      marginLeft: 20,
    },
    textRight : {
      textAlign: "right",
      marginRight: 20,
    }
  });