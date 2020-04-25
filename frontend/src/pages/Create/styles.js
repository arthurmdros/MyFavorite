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
    paddingHorizontal: 40,
    marginTop: 30,
  },
  
  description:{
    fontSize: 16,    
    marginBottom: 16,
    marginTop: 20,
    lineHeight: 24,
    marginLeft: 20,
    color: '#FFF'
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#27ae60',
    fontWeight: 'bold',
    marginTop: 10,
  },

  newText:{
    fontSize: 16,
    marginTop: 10,
    borderBottomWidth: 1.5,
    borderRadius: 8,  
    color: '#FFF',
  },

  newFavorite:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#41414d',
    marginTop: 10,    
    marginHorizontal: 10,
  },
  

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  btnSave:{
    backgroundColor: '#FFF',
    borderRadius: 8,
    height: 40,
    width: '38%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText:{
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});