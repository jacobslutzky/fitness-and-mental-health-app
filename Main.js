import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
export default function Main(){
    return(
    <View style = {styles.container}>
      <Text style = {styles.text}>Hello Jacob!</Text>
    <View style = {styles.tasks}>
      <View style = {styles.taskButton}>
      <TouchableOpacity>
        <Text style = {styles.text}> Complete Today's Workout</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.taskButton}>
      <TouchableOpacity>
        <Text style = {styles.text}> Post Shower Mediation</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.taskButton}>
      <TouchableOpacity>
        <Text style = {styles.text}> Share Results with Friend</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.taskButton}>
      <TouchableOpacity>
        <Text style = {styles.text}>Post Workout Yoga</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.taskButton}>
      <TouchableOpacity>
        <Text style = {styles.text}>Therapy Check-in</Text>
      </TouchableOpacity>
      </View>
    </View>
    <View style={styles.buttonContainer}>
       <StatusBar style="auto" />
       <View style={styles.bottomButtons}>
        <TouchableOpacity>
          <Image source={require('./assets/home.png')}  style={{height : 75, width: 75}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity>
          <Image source={require('./assets/brain.png')}  style={{height : 75, width: 75}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity>
          <Image source={require('./assets/dumbell.jpeg')}  style={{height : 75, width: 75}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity>
          <Image source={require('./assets/message.jpeg')}  style={{height : 75, width: 75}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity>
          <Image source={require('./assets/settings.webp')}  style={{height : 75, width: 75}}/>
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
    backgroundColor: "black",
    
  },
  tasks: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column"
  },
  taskButton: {
    textAlign: "center",
    alignItems :"center",
    justifyContent: "center",
    backgroundColor: "#4c4c4c",
    height: 75,
    width: 500,
    borderRadius: 100,
    marginVertical: 10
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: "row"
    
  },
  bottomButtons: {
    bottom: 10,
    right: 0,
    width: 100,
    height: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
    marginHorizontal: 15
    
  },
  text : {
    color: "white",
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  }
});