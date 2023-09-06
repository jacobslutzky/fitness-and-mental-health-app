import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function Register({navigation}){
  colors = useTheme().colors;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    navigation.navigate("Main")
  };

  return (
    <View style={styles.container}>
    <Image style = {styles.buffalo} source={require('../assets/buffalo.png')} />
    <Text style={[styles.createAccountText, {color:colors.text}]}>Create a New Account</Text>
    <View style={styles.name}>
      <TextInput
        style={styles.nameInput}
        placeholder="First Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.nameInput}
        placeholder="Last Name"
        value={name}
        onChangeText={setName}
      />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat Password"
        value={password}
        onChangeText={setPassword}
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

