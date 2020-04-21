import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import logoImg from '../../assets/logo_2X.png';
import styles from './styles';

export default function Detail(){
    const route = useRoute();
    const navigation = useNavigation();

    const favorite = route.params;

    function navigateToEdit(){
        navigation.navigate('Update');
    }

    function navigateToMain(){
        navigation.navigate('Main');
    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity style={styles.return} onPress={navigateToMain}>
                    <Feather name='arrow-left' size={20} color={'#FFF'}/>                    
                </TouchableOpacity>
            </View>
            
            <View style={styles.containerFavorite}>
                <View style={styles.favorite}>
                
                <Text style={styles.favoriteProperty}>Título:</Text>
                <Text style={styles.favoriteValue}>{favorite.title}</Text>

                <Text style={styles.favoriteProperty}>Descrição:</Text>
                <Text style={styles.favoriteValue}>{favorite.description}</Text>
                
                
                <Text style={styles.favoriteProperty}>Link:</Text>
                <TouchableOpacity onPress={()=>alert('WebView')}>
                    <Text style={styles.favoriteValue}>{favorite.url}</Text>                
                </TouchableOpacity>
                
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.button} onPress={navigateToEdit}>
                            <Text style={styles.buttonText}>Editar</Text>
                            <AntDesign style={styles.button} name='edit' size={20} color={'#FFF'}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert('Deletar.')}>
                            <Text style={styles.buttonText}>Apagar</Text>
                            <Feather style={styles.button}  name='trash-2' size={20} color={'#FFF'}/>
                        </TouchableOpacity>          
                    </View>       
                </View>       
            </View>
        </View>
    );
}

/*
                    
                    URL com webView ----- JShunt
                    Icone para imagem ----- ImageShare
                    Método Apagar ------ ToDo
                    Criar implementação do criar favorito na Página Create ------- ToDo
                    Criar implementação do atualizar favorito na Página Update -------- ToDO
*/