import Home from './Home'
import Mindfulness from './Mindfulness';
import Community from './Community';
import Fitness from './Fitness';
import Profile from './Profile';
import Top from './components/Top';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import SelectWorkoutProgram from './SelectWorkoutProgram';



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
              return <Top {...props} />
            }
             
          },

          tabBarStyle: {backgroundColor: colors.backgroundColor},
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
      <Tab.Screen name="Fitness" component={SelectWorkoutProgram} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Profile" component={Profile} />
    
    </Tab.Navigator>
    
  );
}


