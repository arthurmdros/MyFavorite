import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6c4fbb',
      paddingTop: Constants.statusBarHeight + 10,      
    },

    header:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    logout: {
      flexDirection: 'row',
      paddingHorizontal: 24,
      marginTop: 30,
    },

    logoutText: {
      color: '#FFF',
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: 15,
      marginTop: 5,
    },

    headerTitle:{
      paddingHorizontal: 12,
      marginTop: 10,
    },

    title:{
      fontSize: 20,
      marginBottom: 16,
      marginTop: 20,
      color: '#FFF',
      fontWeight: 'bold',
    },

    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#FFF',
    },

    favoritesList:{
      marginTop: 30,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button:{
        marginTop: 10,
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
    }
  });
  