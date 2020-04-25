import React, { useRef } from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Image, View, Text} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import api from '../../services/api';
import Input from '../component/Input';
import logoImg from '../../assets/logo_2X.png';
import styles from './styles';

export default function Create(){

    const route = useRoute();
    const formRef = useRef(null);
    const navigation = useNavigation();

    const userId = route.params;

    function navigateToMain(){
        navigation.navigate('Main');
    }

    async function handleSubmit(data) {        
        try{
            await api.post('favorites', data, 
                {headers: {
                        Authorization:  userId,
                    }
                }     
            );
            alert('Salvo com sucesso!');
            navigateToMain();

        }catch(err){
            alert('Erro ao cadastrar, tente novamente.');
        }
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
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Text style={styles.text}>Título:</Text>
                    <Input style={styles.newText} name="title" type="title"/>
                                    
                    <Text style={styles.text}>Descrição:</Text>
                    <Input style={styles.newText} name="description" type="description"/>
                    
                    <Text style={styles.text}>Link:</Text>
                    <Input style={styles.newText} name="url" type="url"/>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.btnSave} onPress={() => formRef.current.submitForm()}>
                            <Text style={styles.btnText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </Form>
            </View>            
        </View>
    );
}