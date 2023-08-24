import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Landing';
import Main from './Main';
import Register from './Register';
import Login from './Login';
import FitnessFavorites from './FitnessFavorites';
import FitnessWorkouts from './FitnessWorkouts';
import FitnessYoga from './FitnessYoga';
import VideoOverview from './VideoOverview';
import VideoPlay from './VideoPlay';
import WorkoutProgramInfo from './WorkoutProgramInfo'
import PreviewSplit from './PreviewSplit'
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './constants/Colors';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { Amplify, Auth } from 'aws-amplify';
import { AuthLink, createAuthLink } from "aws-appsync-auth-link"
import awsconfig from '../Users/zachbreger/Desktop/gymind/gymind-app/src /aws-exports.js'
import { onError } from "@apollo/client/link/error";
Amplify.configure(awsconfig);


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
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: awsconfig.aws_appsync_authenticationType,
    apiKey: awsconfig.aws_appsync_apiKey,
    credentials: () => Auth.currentCredentials(),
    jwtToken: async () =>
      (await Auth.currentSession()).getAccessToken().getJwtToken()
  },
  complexObjectsCredentials: () => Auth.currentCredentials()
 })

 const httpLink = new HttpLink({ 
  uri: "https://dd26zmboqvgp5mx4eg4amtzpny.appsync-api.us-east-1.amazonaws.com/graphql",
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
export default function App() {
  
  return (
    <ApolloProvider client={client}>
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
            <Stack.Screen name = "VideoPlay" component={VideoPlay}/>
            <Stack.Screen name = "VideoOverview" component={VideoOverview}/>
            <Stack.Screen name = "WorkoutProgramInfo" component={WorkoutProgramInfo} options={{ title: "Program Information",
              headerShown:true,  headerShadowVisible: false, headerBackTitle: "Back"
            }}/>
            <Stack.Screen name = "PreviewSplit" component={PreviewSplit} options={{ title: "Preview Split",
              headerShown:true,  headerShadowVisible: false, headerBackTitle: "Back"
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
    </ApolloProvider>
    

  );
 }

