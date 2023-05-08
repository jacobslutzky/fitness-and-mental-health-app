import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';

export default function Top({navigation}){
      return(
        <View style = {styles.top}>
          <Image style = {styles.buffalo} source={require('../../assets/buffalo.png')} />
          <Text style = {[styles.text, styles.points]}>Total Points:{"\n"}850</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image style = {styles.caleb} source={require('../../assets/caleb.jpeg')} />
          </TouchableOpacity>
        
        </View>
      )}

      const styles = StyleSheet.create({
        top: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          } ,
        points : {
            justifyContent : "center",
            marginTop: 30,
        },
        buffalo: {
            height: 60,
            width: 80,
            marginLeft: 30,
            marginTop: 30,
        },
        
        caleb: {
            height: 80,
            width: 80,
            marginRight: 20,
            marginTop: 30,
            borderRadius: 125,
        
        },
        text : {
            color: "white",
            fontSize: 25,
            textAlign: 'center',
            marginBottom: 10,
            
          },

 
});


