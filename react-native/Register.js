import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as mutations from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";

export default function Register({navigation}){
  colors = useTheme().colors;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [createUser, { data, loading, error }] = useMutation(gql`${mutations.createUser}`);
  if (loading) console.log('Submitting...');
  if (error) console.log(`Submission error! ${error.message}`);
  const handleRegister = () => {
    const input = {
      id: email,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      profilePicture: ""
    }
    if(email && firstName && lastName && email && password == confirmPassword){
      global.userId = email
      createUser({ variables : {input : input} })
      navigation.navigate("Main")
    }
  };

  return (
    <View style={styles.container}>
    <Image style = {styles.buffalo} source={require('../assets/buffalo.png')} />
    <Text style={[styles.createAccountText, {color:colors.text}]}>Create a New Account</Text>
    <View style={styles.name}>
      <TextInput
        style={styles.nameInput}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.nameInput}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        autoCapitalize='none'
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        autoCapitalize='none'
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat Password"
        value={confirmPassword}
        autoCapitalize='none'
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={[styles.button, {backgroundColor:colors.primary}]} onPress={handleRegister}>
        <Text style={[styles.buttonText, {color:colors.backgroundColor}]}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  name: {
    
    alignItems: 'center',
    flexDirection: "row"
  },
  nameInput: {
    width: '38%%',
    height: 40,
    margin: "2%",
    borderWidth: 1,
    padding: 10,
    borderColor: "gold",
    backgroundColor: "white",
    borderRadius: 5,
  },
  buffalo: {
    resizeMode: "contain",
    height: "50%",
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
    
},
  createAccountText: {
    fontSize: 20
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "gold",
    backgroundColor: "white",
    borderRadius: 5,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "40%",
    height: 40,
    textAlign: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});

