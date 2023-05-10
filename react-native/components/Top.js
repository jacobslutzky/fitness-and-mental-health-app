import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';

export default function Top({navigation}){
      return(
        <View style={{alignItems: 'center'}}>
        <View style = {styles.top}>
          <Image style = {styles.buffalo} source={require('../../assets/buffalo.png')} />
          <Text style = {[styles.text, styles.points]}>Total Points:{"\n"}850</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{width: 60}}>
            <Image style = {styles.caleb} source={require('../../assets/caleb.jpeg')} />
          </TouchableOpacity>
        
        </View>
        </View>
      )}

      const styles = StyleSheet.create({
        top: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            width: '95%',
          } ,
        points : {
            justifyContent : "center",
            marginTop: 30,
            marginHorizontal: 'auto'
        },
        buffalo: {
            height: 45,
            width: 60,
            marginTop: 30,
        },
        
        caleb: {
            height: 45,
            width: 45,
            marginRight: 0,
            marginTop: 30,
            borderRadius: 125,
        
        },
        text : {
            color: "white",
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 10,
            
          },

 
});


