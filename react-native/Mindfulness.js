import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function Mindfulness() {
    const colors = useTheme().colors;
    const Tab = createMaterialTopTabNavigator();
   
    
    return(
      <View>
    <Text style={{ color: colors.text }}>Mindfulness</Text>
      </View>
    )
    
  
  
  
  }