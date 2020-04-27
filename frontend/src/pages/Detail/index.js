import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';
import logoImg from '../../assets/logo_2X.png';
import styles from './styles';

export default function Detail(){
    const route = useRoute();
    const nav = useNavigation();
    
    const favorite = route.params.favorite;
    const userId = route.params.favorite.user_id;
    

    async function deleteFavorite(id){
        try{
            await api.delete(`favorites/${id}`, {
                headers: {
                    Authorization: userId,
                }                                
            });
            alert('Deletado com sucesso');

            navigateToMain();
        }catch(err){
            alert('Erro ao deletar favorito, tente novamente.');
        }
    }
    

    function navigateToEdit(favorite){        
        nav.navigate('Update', {favorite});
    }

    function navigateToMain(){
        nav.navigate('Main');
    }

    function navigateToWebView(favorite){
        nav.navigate('WebPage', {favorite});
    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity style={styles.return} onPress={navigateToMain}>
                    <Feather name='arrow-left' size={20} color={'#FFF'}/>                    
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => alert(favorite.title)}>
                    <Image source={{uri: favorite.image}} 
                    style={styles.image}/>
                </TouchableOpacity>
            </View>
            
            <View style={styles.containerFavorite}>
                <View style={styles.favorite}>
                
                    <Text style={styles.favoriteProperty}>Título:</Text>                    
                    <Text style={styles.favoriteValue}>{favorite.title}</Text> 

                    <Text style={styles.favoriteProperty}>Descrição:</Text>                                        
                    <Text style={styles.favoriteValue}>{favorite.description}</Text> 
                    
                    
                    <Text style={styles.favoriteProperty}>Link:</Text>
                    <TouchableOpacity onPress={() => navigateToWebView(favorite)}>
                        <Text style={styles.favoriteValueLink}>{favorite.url}</Text>                
                    </TouchableOpacity>
                    
                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.button} onPress={() => navigateToEdit(favorite)}>
                                <Text style={styles.buttonText}>Editar</Text>
                                <AntDesign style={styles.button} name='edit' size={20} color={'#FFF'}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteFavorite(favorite.id)}>
                                <Text style={styles.buttonText}>Apagar</Text>
                                <Feather style={styles.button}  name='trash-2' size={20} color={'#FFF'}/>
                            </TouchableOpacity>          
                        </View>       
                </View>       
            </View>
        </View>
    );
}
