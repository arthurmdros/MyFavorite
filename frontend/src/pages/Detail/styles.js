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

  
  containerFavorite:{    
    paddingHorizontal: 20,
  },

  favorite:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#41414d',
    marginTop: 48,        
  },

  favoriteProperty:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 24,
  },

  favoriteValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#FFF',
  },
  
  actions:{
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button:{
    marginHorizontal:10,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
});