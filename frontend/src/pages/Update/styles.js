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

  return: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 30,
  },
  
  description:{
    fontSize: 16,    
    marginBottom: 16,
    marginTop: 20,
    lineHeight: 24,
    color: '#FFF'
  },

  headerTitle:{    
    marginLeft: 20
  },

  text:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },

  newFavorite:{
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },

});