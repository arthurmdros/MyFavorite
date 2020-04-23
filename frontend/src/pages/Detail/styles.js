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
    justifyContent: 'space-between',    
  },

  return: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    marginTop: 30,
  },

  imageContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',    
  },

  image:{
    width: 200,
    height: 140,    
    resizeMode: "contain",
  },
  
  containerFavorite:{    
    paddingHorizontal: 20,
  },

  favorite:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#41414d',
    marginTop: 20,            
  },

  favoriteProperty:{
    fontSize: 13,
    color: '#27ae60',
    fontWeight: 'bold',
    marginTop: 10,        
  },

  favoriteValue: {    
    fontSize: 14,
    color: '#FFF',    
    fontWeight: 'bold',
  },
  
  favoriteValueLink: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',    
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
    color: '#27ae60',    
  },
});