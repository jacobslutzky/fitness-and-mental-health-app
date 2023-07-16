import { createStackNavigator } from '@react-navigation/stack';
import Landing from './react-native/Landing';
import Main from './react-native/Main';
import Register from './react-native/Register';
import Login from './react-native/Login';
import FitnessFavorites from './react-native/FitnessFavorites';
import FitnessWorkouts from './react-native/FitnessWorkouts';
import FitnessYoga from './react-native/FitnessYoga';
import WorkoutProgramInfo from './react-native/WorkoutProgramInfo'
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './react-native/constants/Colors';
import PreviewSplit from './react-native/PreviewSplit';
import VideoOverview from './react-native/VideoOverview';
import VideoPlay from './react-native/VideoPlay';

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
    }, headerBackTitle: "Back"
    }}> 
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name = "Register" component={Register} options={{
          headerShown:true,  headerShadowVisible: false, headerBackTitle: "Back", title: ""
        }}/>
        <Stack.Screen name = "Login" component={Login} options={{
          headerShown:true,  headerShadowVisible: false, headerBackTitle: "Back",  title: ""
        }}/>
        <Stack.Screen name = "FitnessWorkouts" component={FitnessWorkouts}/>
        <Stack.Screen name = "FitnessYoga" component={FitnessYoga}/>
        <Stack.Screen name = "FitnessFavorites" component={FitnessFavorites}/>
        <Stack.Screen name = "WorkoutProgramInfo" component={WorkoutProgramInfo} options={{ title: "Program Information",
          headerShown:true,  headerShadowVisible: false, headerBackTitle: "Back"
        }}/>
        <Stack.Screen name = "PreviewSplit" component={PreviewSplit} options={{ title: "Preview Split",
          headerShown:true,  headerShadowVisible: false, headerBackTitle: "Back"
        }}/>
        <Stack.Screen name = "VideoOverview" component={VideoOverview}/>
        <Stack.Screen name ="VideoPlay" component={VideoPlay}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}
