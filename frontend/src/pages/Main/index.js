import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo_2X.png';
import styles from './styles';

export default function Main() {
    const navigation = useNavigation();

    function navigateToLogin(){
        alert('Saindo...');
        navigation.navigate('Login');
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
                <Text style={styles.title}> Bem-Vindo, fulano!</Text>
                <Text style={styles.description}> 
                Crie sua lista de séries, filmes, documentários favoritos. 
                Adicione comentários sobre ela ou adicione para lembrar-se de assistir depois.
                </Text>
            </View>

            <View style={styles.favoritesList}>                
                    <TouchableOpacity style={styles.button} onPress={() => alert('Cadastrar')}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => alert('Atualizar')}>
                    <Text style={styles.buttonText}>Atualizar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => alert('Deletar')}>
                    <Text style={styles.buttonText}>Deletar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => alert('Listar')}>
                    <Text style={styles.buttonText}>Listar</Text>
                    </TouchableOpacity>                               
            </View>
        </View>
    );
}