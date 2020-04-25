import React, { useRef }from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Image, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import logoImg from '../../assets/logo_2X.png';
import styles from './styles';
import api from '../../services/api';
import Input from '../component/Input';

export default function Update(){
    const navigation = useNavigation();
    const formRef = useRef(null);    

    function navigateToBack(){
        navigation.goBack();
    }

    function handleSubmit(data){
        console.log(data);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity style={styles.return} onPress={navigateToBack}>
                    <Feather name='arrow-left' size={20} color={'#FFF'}/>                    
                </TouchableOpacity>
            </View>

            
            <Text style={styles.description}>
                Insira as informações abaixo:
            </Text>

            <View style={styles.newFavorite}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Text style={styles.text}>Novo título:</Text>
                    <Input style={styles.newText} name="title" type="title"/>
                    
                    <Text style={styles.text}>Nova descrição:</Text>
                    <Input style={styles.newText} name="description" type="description"/>
                    
                    <Text style={styles.text}>Novo link:</Text>
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