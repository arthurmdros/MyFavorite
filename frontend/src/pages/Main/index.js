import React from 'react';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo_2X.png';
import styles from './styles';

export default function Main() {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

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

                <View style={styles.actionsHeader}>
                    <TouchableOpacity style={styles.createButton} onPress={() => alert('Cadastrar novo.')}>
                        <Text style={styles.createButtonText}> Adicionar novo </Text>
                        <Feather name='plus-circle' size={20} color={'#FFF'}/>
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList 
                data = {DATA}
                style={styles.favoritesList}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                    <View style={styles.favorite}>
                        <Text style={styles.favoriteProperty}>Título:</Text>
                        <Text style={styles.favoriteValue}>{item.title}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={()=> alert('Detalhes do item.')}
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