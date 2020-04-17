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

    actionsHeader:{
      marginTop: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    createButton: {
      flexDirection: 'row',
      alignItems: 'center',      
    },  

    createButtonText: {
      color: '#FFF',
      fontSize: 15,
      fontWeight: 'bold',
    },

    favoritesList:{
      marginTop: 30,
      paddingHorizontal: 20,
    },

    favorite:{
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#41414d',
      marginBottom: 16,
    },

    favoriteProperty:{
      fontSize: 14,
      color: '#FFF',
      fontWeight: 'bold',
    },

    favoriteValue:{
      marginTop: 8,
      fontSize: 15,
      marginBottom: 24,
      color: '#FFF',
    },

    detailsButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    detailsButtonText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }
  });
  