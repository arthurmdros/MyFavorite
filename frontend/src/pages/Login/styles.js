import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6c4fbb',        
      paddingTop: Constants.statusBarHeight + 40,
      paddingHorizontal: 24,
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    loginContainer: {
      marginTop: 60,
      flexDirection: 'column',
    },

    text: {
      fontSize: 15,
      lineHeight: 24,
      color: '#FFF',
      fontWeight: 'bold',
      marginTop: 10,
    },

    login: {
      marginTop: 10,
      borderBottomWidth: 1.5,
      borderRadius: 8,
      fontSize: 16,
      backgroundColor: '#FFF',
    },

    senha: {
      borderBottomWidth: 1.5,
      borderRadius: 8,
      marginTop: 10,
      fontSize: 16,
      backgroundColor: '#FFF',
    },

    action: {
      marginTop: 80,
      flexDirection: 'column',
      alignItems: 'center',
    },

    button:{
        backgroundColor: '#FFF',
        borderRadius: 8,
        height: 40,
        width: '38%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText:{
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
    },
    
    buttonRegister:{
      marginTop: 80,
    },

    buttonRegisterText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
  });
  