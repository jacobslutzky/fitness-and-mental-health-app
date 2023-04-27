import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';


export default function Home({navigation}){

  const colors = useTheme().colors;
 
  
    const handlePress = ( item ) => {
      navigation.navigate(item.screen);
    }
  

  const taskLabels = [
    {label: "Complete Today's Workout", screen: "Fitness"},
    {label: "Post Shower Meditation", screen: "Mindfulness"},
    {label: "Share Results with Friend", screen: "Community"},
    {label: "Post Workout Yoga", screen: "Mindfulness"},
    {label: "Therapy Check-in", screen: "Mindfulness"}
    
  ]

    return(
    <View style = {styles.container}>
      
      <View style={styles.tasks}>
  {taskLabels.map((item, index) => (
    <View style={styles.taskButton} key={index} >
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Text style={[styles.text, {color: colors.text}]}>{item.label}</Text>
      </TouchableOpacity>
    </View>
  ))}
    </View>
   
     </View>
    )
}


const styles = StyleSheet.create({
  
  container:{
    flex: 1,
  },
  

  tasks: {
    
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
    width: '90%',
    borderRadius: 100,
    marginVertical: 10
  },
  text : {
    
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
    
  },
  
  
});
