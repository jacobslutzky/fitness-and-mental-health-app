import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Top({navigation}){
      return(
        <View style={{alignItems: 'center',marginHorizontal: 10,}}>
        <View style = {styles.top}>
          <Image style = {styles.buffalo} source={require('../../assets/buffalo.png')} />
          <View style={{flexDirection: "column",alignItems: 'center', gap: 2}}>
          

          <Text style = {styles.text}>Total Points:</Text>
          <View style = {{flexDirection:"row", gap: 12}}>
          <FontAwesome5 name="coins" size={18} color="white" />
          <Text style = {styles.points}>850</Text>
          </View>
          </View>
          
          
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
            color: "white",
            fontSize: 20,
           
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
            fontSize: 18,
            textAlign: 'center',
            marginTop: 30,
            fontStyle: "italic"
          },

 
});


