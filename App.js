import { createStackNavigator } from '@react-navigation/stack';
import Home from './react-native/screens/home/Home';
import Landing from './react-native/screens/authentication/Landing';
import Main from './react-native/routes/MainPageTabNavigator';
import Register from './react-native/screens/authentication/Register';
import Login from './react-native/screens/authentication/Login';
//import FitnessFavorites from './react-native/FitnessFavorites';
//import FitnessWorkouts from './react-native/FitnessWorkouts';
//import FitnessYoga from './react-native/FitnessYoga';
//import VideoOverview from './react-native/VideoOverview';
//import VideoPlay from './react-native/screens/mindfulness/VideoPlay';
import WorkoutProgramInfo from './react-native/screens/workout/WorkoutProgramInfo'
import PreviewSplit from './react-native/screens/workout/PreviewSplit'
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './react-native/constants/Colors';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { Amplify, Auth } from 'aws-amplify';
import { AuthLink, createAuthLink } from "aws-appsync-auth-link"
import awsmobile from './src/aws-exports.js'
import { onError } from "@apollo/client/link/error";
import { Ionicons } from '@expo/vector-icons';
import { LogBox } from 'react-native';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
LogBox.ignoreAllLogs();

Amplify.configure(awsmobile);

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
/*
const awsGraphqlFetch = async(uri, options) => {
  const token = (await Auth.currentSession()).getIdToken().getJwtToken()
  options.headers["Authorization"] = token;
  return fetch(uri, options);
};
*/

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const awsLink = new AuthLink({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    type: awsmobile.aws_appsync_authenticationType,
    apiKey: awsmobile.aws_appsync_apiKey,
    credentials: () => Auth.currentCredentials(),
    jwtToken: async () =>
      (await Auth.currentSession()).getAccessToken().getJwtToken()
  },
  complexObjectsCredentials: () => Auth.currentCredentials()
 })

 const httpLink = new HttpLink({ 
  uri: awsmobile.aws_appsync_graphqlEndpoint,
  credentials: 'same-origin'
});

const link = ApolloLink.from([
  errorLink,
  awsLink,
  httpLink
])


const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    typePolicies: {
      Exercise: {
        keyFields: false
      },
      Workout: {
        keyFields: false,
        fields: {
          exercises: { // Non-normalized Author object within Book
            merge(existing, incoming, { mergeObjects }) {
              return existing;
            },
          },
        },
      },
      ProgramWeek: {
        keyFields: false,
        fields: {
          workouts: { // Non-normalized Author object within Book
            merge(existing, incoming, { mergeObjects }) {
              return existing;
            },
          },
        },
      },
      Program: {
        
      },
      User : {
        keyField: ["id"]
      },
      ExerciseLog : {
        keyField: ["id"]
      }
    },
  })
});
client.resetStore() 
function App() {
  
  return ( 
    <Authenticator.Provider>
      <Authenticator signUpAttributes={[
          "email",
          "name",
          "updated_at"
        ]}>
    <ApolloProvider client={client}>
      <NavigationContainer theme = {MyTheme}>
        <Stack.Navigator cardStyle= {{height: "100%"}} screenOptions={{headerShown: false, headerStyle: {
          backgroundColor: MyTheme.colors.background
        }, headerBackTitle: "Back",headerBackImage: () => (
          <Ionicons name="arrow-back" size={24} marginLeft={"10%"} color={Colors.primary}/>
        ),
        }}> 
            <Stack.Screen name="Landing" component={Landing} />
            
            <Stack.Screen name = "Register" component={Register} options={{
              headerShown:true,  headerShadowVisible: false, title: ""
            }}/>
            <Stack.Screen name = "Login" component={Login} options={{
              headerShown:true,  headerShadowVisible: false,  title: "",
            }}/>
            <Stack.Screen name="Main" component={Main} options={{gestureEnabled: false}}/>
            {/* <Stack.Screen name = "VideoPlay" component={VideoPlay}/>
            <Stack.Screen name = "VideoOverview" component={VideoOverview}/> */}
            
          </Stack.Navigator>
        </NavigationContainer>
    </ApolloProvider>
    </Authenticator>
    </Authenticator.Provider>
  );
 }
 export default App;