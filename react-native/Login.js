import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ceil } from 'react-native-reanimated';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../src/graphql/queries";

export default function Login({navigation}){
  colors = useTheme().colors;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data, loading, error, refetch } = useQuery(gql`${queries.getUser}`, {
    variables: { id: email},
    enabled: false
  }); 

  const handleRegister = () => {
    global.userId = email
    refetch()
    while(loading){}
    console.log(data, loading, error)
    if(data.getUser && data.getUser.password == password){
        navigation.navigate("Main")
    }
  };

  return (
    <View style={styles.container}>
    <Image style = {styles.buffalo} source={require('../assets/buffalo.png')} />
    <View style={styles.inputContainer}>
    <Text style={[styles.aboveButtonText, {color:colors.text}]}> Email </Text>
    <TextInput
        style={[styles.input, {color:colors.text}]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />


      <Text style={[styles.aboveButtonText, {color:colors.text}]}> Password </Text>
      <TextInput
        style={[styles.input, {color:colors.text}]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={[styles.button, {backgroundColor:colors.primary}]} onPress={handleRegister}>
        <Text style={[styles.buttonText, {color:colors.backgroundColor}]}>Sign in</Text>
      </TouchableOpacity>
      

    </View>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buffalo: {
    resizeMode: "contain",
    height: "50%",
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
},
  SignInText: {
    paddingTop: 20,
    margin: 12,
    fontSize: 25
  },
  aboveButtonText: {
    fontSize: 20,
    margin: 12,
  },
  input: {
    height: 45,
    margin: 12,
    padding: 10,
    backgroundColor: "#333131",
    borderRadius: 15,
  },
  inputContainer: {
    flex:1,
    flexDirection:"column",
    width: "80%",
    justifyContent :" 80%"
  },
  button: {
    margin: 12,
    borderRadius: 15,
    marginTop: 20,

    height: 50,
    justifyContent: "center",
    textAlign: 'center',


  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
  