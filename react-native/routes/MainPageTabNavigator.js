import Home from '../screens/home/Home'
import Mindfulness from './MindfullnessPageNavigator';
import Community from '../screens/unused/Community';
import Fitness from './FitnessPageNavigator';
import Profile from '../screens/profile/Profile';
import Top from '../components/Top';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import SelectWorkoutProgram from '../screens/workout/SelectWorkoutProgram';
import { View } from "react-native";

const Tab = createBottomTabNavigator();


export default function Main() {
  colors = useTheme().colors
  
  return (
    
     <Tab.Navigator 
        screenOptions={({ route }) => ({
    
          header: props =>{
            if(route.name == "Profile"){
              return <></>
            }
            else{
              return <View style={{height: 30}}></View>
            }
             
          },

          tabBarStyle: {backgroundColor: colors.backgroundColor, opacity: .9},
          sceneContainerStyle: {height: '100%', flex: 1},
          tabBarIcon: ({color, size }) => {
            let icon;

            if (route.name === 'Home') {
              icon = <Ionicons name="home" size={size} color={color}/>
            } else if (route.name === 'Mindfulness') {
              icon = <FontAwesome5 name="brain" size={size} color={color} />
            } else if (route.name === 'Fitness') {
              icon = <Ionicons name="fitness" size={size} color={color}/>
            } else if (route.name === 'Community') {
              icon = <Ionicons name="chatbubbles" size={size} color={color}/>
            } else if (route.name === 'Profile') {
              icon = <Ionicons name="person" size={size} color={color}/>
            } 
            

            // You can return any component that you like here!
            return icon;
          },
          tabBarActiveTintColor: '#CFB87C',
          tabBarInactiveTintColor: 'gray',
        })} 
      >
        
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Mindfulness" component={Mindfulness} />
      <Tab.Screen name="Fitness" component={Fitness} />
      <Tab.Screen name="Profile" component={Profile} />
      
    
    </Tab.Navigator>
    
  );
}


