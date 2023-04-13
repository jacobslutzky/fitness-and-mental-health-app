import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
export default function Main(){
    return(
    <View style = {styles.container}>
      <Text style = {styles.text}>Hello Jacob!</Text>
    <View style={styles.buttonContainer}>
       <StatusBar style="auto" />
       <View style={styles.button}>
        <TouchableOpacity>
          <Image source={require('./assets/home.png')}  style={{height : 40, width: 40}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Image source={require('./assets/brain.png')}  style={{height : 40, width: 40}}/>
        </TouchableOpacity>
      </View>
     </View>
     </View>
    )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: "row"
    
  },
  button: {
    bottom: 10,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    
  },
  text : {
    color: "white",
    textAlign: 'center',
    marginBottom: 10,
  }
});
