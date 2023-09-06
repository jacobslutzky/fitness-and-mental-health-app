import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
export default function Profile() {
    const colors = useTheme().colors;
    
    return(
      <View>
    <Text style={{ color: colors.text }}>Profile</Text>
      </View>
    )
  
  
  }
