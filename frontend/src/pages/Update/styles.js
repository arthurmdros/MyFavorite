import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#6c4fbb',
    paddingTop: Constants.statusBarHeight + 10,      
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
});