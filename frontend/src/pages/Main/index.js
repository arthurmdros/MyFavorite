import React, { useState, useEffect } from 'react';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/logo_2X.png';
import styles from './styles';

export default function Main() {
    
    const [favorites, setFavorites] = useState([]);    

    const navigation = useNavigation();
    const route = useRoute();

    const userId = route.params.user.data.id;
    const userName = route.params.user.data.login;
    
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {            
            setFavorites(response.data);            
        })
    }, [userId]);       

    function navigateToLogin(){
        alert('Saindo...');
        navigation.navigate('Login');
    }

    function navigateToCreate(){
        navigation.navigate('Create');
    }

    function navigateToDetail(favorite){
        navigation.navigate('Detail', favorite);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity style={styles.logout} onPress={navigateToLogin}>
                    <SimpleLineIcons name='logout' size={25} color={'#FFF'}/>
                    <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.headerTitle}>

                <Text style={styles.title}> Bem-Vindo, {userName}!</Text>
                <Text style={styles.description}> 
                    Crie sua lista de séries, filmes, documentários favoritos. 
                    Adicione comentários sobre ela ou adicione para lembrar-se de assistir depois.
                </Text>

                <View style={styles.actionsHeader}>
                    <TouchableOpacity style={styles.createButton} onPress={navigateToCreate}>
                        <Text style={styles.createButtonText}> Adicionar novo </Text>
                        <Feather name='plus-circle' size={20} color={'#FFF'}/>
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList 
                data = {favorites}
                style={styles.favoritesList}
                keyExtractor={favorite => String(favorite.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item : favorite})=>(
                    <View style={styles.favorite}>
                        <Text style={styles.favoriteProperty}>Título:</Text>
                        <Text style={styles.favoriteValue}>{favorite.title}</Text>
                                                
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(favorite)}
                        >
                            <Text style={styles.detailsButtonText}> Ver mais detalhes </Text>
                            <Feather name='arrow-right' size={16} color={'#FFF'}/>
                        </TouchableOpacity>
                    </View>
                )}                    
            />
        </View>
    );
}