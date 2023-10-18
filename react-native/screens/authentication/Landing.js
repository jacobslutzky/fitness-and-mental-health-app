import { useTheme } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';


export default function Login({navigation}) {
    const colors = useTheme().colors
    const handleLogin = () => {
        navigation.navigate("Main")
      }
    return (
        <View style={styles.container}>
         <Image style = {styles.buffalo} source={require('../../../assets/buffalo.png')} />
         <Text style = {[styles.gymind, {color:colors.text}]}>GYMIND</Text>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Welcome</Text>
          </TouchableOpacity>
        </View>
      );
  }

  /*
          <View style={styles.container}>
         <Image style = {styles.buffalo} source={require('../assets/buffalo.png')} />
         <Text style = {[styles.gymind, {color:colors.text}]}>GYMIND</Text>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={handleRegister}>
            <Text style={[styles.register, {color:colors.primary}]}>Create a new account</Text>
          </TouchableOpacity>
        </View>
  */
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.background,
      flexDirection:'column',
     
      
      
    },
    buffalo: {

        resizeMode: "contain",
        height: "50%",
        width: "80%",
        justifyContent: "center",
        alignSelf: "center",
        
    },

    title: {
      fontSize: 24,
      marginBottom: 24,
    },
    input: {
      width:  20,
      height: 48,
      padding: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 6,
      marginBottom: 16,
    },
    button: {
      width: "40%",
      height: 50,
      backgroundColor: Colors.primary,
      borderRadius: 6,
      justifyContent: 'center',
      
    },
    buttonText: {
      fontSize: 20,
      alignSelf: "center"
    },
    gymind: {
        fontSize: 40,
        marginBottom: 40,
        fontWeight: "bold",
    },
    register: {
      alignSelf: "center",
      fontWeight: "bold",
      paddingTop: 50,
      fontSize: 20
    }
  });
  
  
  
  
  
  
  
  