import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors } from './constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function FitnessWorkouts({navigation}){
    const colors = useTheme().colors;
    const navigateToFitness = () => {
        navigation.navigate("Fitness")
      }

    return(
    <View>
        <TouchableOpacity style={styles.button} onPress={navigateToFitness}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
      </View>
    )
};

const styles = StyleSheet.create({
    button: {
      width: 30,
      height: 50,
      backgroundColor: Colors.primary,
      borderRadius: 6,
      justifyContent: 'center',
      marginTop: 50
    },
  });