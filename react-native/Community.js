import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function Community() {
    const colors = useTheme().colors;
    
    return(
      <View>
    <Text style={{ color: colors.text }}>Community</Text>
      </View>
    )
  
  
  
  }