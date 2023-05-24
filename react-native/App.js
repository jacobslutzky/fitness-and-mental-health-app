import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Landing';
import Main from './Main';
import Register from './Register';
import FitnessFavorites from './FitnessFavorites';
import FitnessWorkouts from './FitnessWorkouts';
import FitnessYoga from './FitnessYoga';
import VideoOverview from './VideoOverview';
import VideoPlay from './VideoPlay';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './constants/Colors';

const Stack = createStackNavigator();


const MyTheme = {

  colors: {
    primary: Colors.primary,
    background: Colors.background,
    text: Colors.text,
    card: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
export default function App() {
  
  return (
    
    <NavigationContainer theme = {MyTheme}>
    <Stack.Navigator cardStyle= {{height: "100%"}} screenOptions={{headerShown: false, headerStyle: {
       backgroundColor: MyTheme.colors.background
    }
    }}> 
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name = "Register" component={Register} options={{
          headerShown:true,  headerShadowVisible: false,
        }}/>
        <Stack.Screen name = "FitnessWorkouts" component={FitnessWorkouts}/>
        <Stack.Screen name = "FitnessYoga" component={FitnessYoga}/>
        <Stack.Screen name = "FitnessFavorites" component={FitnessFavorites}/>
        <Stack.Screen name = "VideoOverview" component={VideoOverview}/>
        <Stack.Screen name ="VideoPlay" component={VideoPlay}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}
