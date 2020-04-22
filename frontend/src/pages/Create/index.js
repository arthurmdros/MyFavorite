import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Image, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo_2X.png';
import styles from './styles';

export default function Create(){
    const navigation = useNavigation();

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

                     
            <Text style={styles.description}>
                Insira as informações abaixo:
            </Text>
            

            <View style={styles.newFavorite}>
                <Text style={styles.text}> Formulario </Text>
            </View>
            
        </View>
    );
}