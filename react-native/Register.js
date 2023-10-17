import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as mutations from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";
import { Auth } from 'aws-amplify';


export default function Register({navigation}){
  colors = useTheme().colors;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [createUser, { data, loading, error }] = useMutation(gql`${mutations.createUser}`);
  const [createUserStats, { data : dataCreateStats, loading : loadingCreateStats, error : errorCreateStats}] = useMutation(gql`${mutations.createUserStats}`);
  const [focusedInput, setFocusedInput] = useState('')

  const handleInputFocus = (input) => {
    setFocusedInput(input)
  }

  if (loading) console.log('Submitting...');
  if (error) console.log(`Submission error! ${error.message}`);
  const handleRegister = () => {
    const input = {
      id: email,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      profilePicture: 'buffalo.png',
    }
    //signUp()
    if(email && firstName && lastName && email && password == confirmPassword){
      global.userId = email
      createUser({ variables : {input : input} })
      navigation.navigate("Main")
    }
    const statsInput = {
      id: `stats-${global.userId}`,
      mindfulMinutes: 0,
      meditationStreak: 0,
      workoutsCompleted: 0
    }

    createUserStats({ variables : {input : statsInput} })
  };

/*
  async function signUp() {
      console.log(email)
      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email
        },
      });
      console.log(user);
  }
  */

  return (
    <View style={styles.container}>
    <Image style = {styles.buffalo} source={require('../assets/buffalo.png')} />
    <View style={styles.inputContainer}>
    <View style={styles.name}>
    <View style = {{flexDirection: "column", flex:1,width: "100%", gap: 12}}>
    <Text style={[styles.aboveButtonText, {color:colors.text}]}>First Name</Text>
      <TextInput
        style={[styles.input, {width: "97%",color:colors.text,borderColor: focusedInput=="first" ? 'white' : 'transparent'}]}
        value={firstName}
        onChangeText={setFirstName}
        onFocus={() => handleInputFocus("first")}
        onBlur={() => handleInputFocus("")}
      />
     
      </View>
      <View style = {{flexDirection: "column", flex: 1,width: "100%", gap: 12}}>
      <Text style={[styles.aboveButtonText, {color:colors.text}]}>Last Name</Text>
      <TextInput
        style={[styles.input, {width: "97%",color:colors.text,borderColor: focusedInput=="last" ? 'white' : 'transparent'}]}
        value={lastName}
        onChangeText={setLastName}
        onFocus={() => handleInputFocus("last")}
        onBlur={() => handleInputFocus("")}
      />
      </View>
      </View>
      <Text style={[styles.aboveButtonText, {color:colors.text}]}>Email</Text>
      <TextInput
        style={[styles.input, {color:colors.text, borderColor: focusedInput=="email" ? 'white' : 'transparent'}]}
        value={email}
        autoCapitalize='none'
        onChangeText={setEmail}
        keyboardType="email-address"
        onFocus={() => handleInputFocus("email")}
        onBlur={() => handleInputFocus("")}
      />
       <Text style={[styles.aboveButtonText, {color:colors.text}]}>Password</Text>
      <TextInput
        style={[styles.input, {color:colors.text, borderColor: focusedInput=="password" ? 'white' : 'transparent'}]}
        value={password}
        autoCapitalize='none'
        onChangeText={setPassword}
        secureTextEntry
        onFocus={() => handleInputFocus("password")}
        onBlur={() => handleInputFocus("")}
      />
      <Text style={[styles.aboveButtonText, {color:colors.text}]}>Repeat Password</Text>
      <TextInput
        style={[styles.input, {color:colors.text, borderColor: focusedInput=="repeat" ? 'white' : 'transparent'}]}
        value={confirmPassword}
        autoCapitalize='none'
        onChangeText={setConfirmPassword}
        secureTextEntry
        onFocus={() => handleInputFocus("repeat")}
        onBlur={() => handleInputFocus("")}
      />
      <TouchableOpacity style={[styles.button, {backgroundColor:colors.primary}]} onPress={handleRegister}>
        <Text style={[styles.buttonText, {color:colors.backgroundColor}]}>Register</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    justifyContent: 'center',
   
  },
  name: {
    flexDirection: "row",
    gap: "6%"
  },
  
  buffalo: {
    resizeMode: "contain",
    height: "30%",
    width: "80%",
    alignSelf: "center",
    
},
  createAccountText: {
    fontSize: 20
  },
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: "#333131",
    borderRadius: 15,
    padding: 10,
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
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  aboveButtonText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  inputContainer: {
    flex:1,
    flexDirection:"column",
    width: "90%",
    justifyContent :"center",
    alignSelf: "center",
    gap:12
    
  },
});

