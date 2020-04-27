import React, { useRef }from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Image, View, Text} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import * as ImagePicker from 'expo-image-picker';

import logoImg from '../../assets/logo_2X.png';
import styles from './styles';
import api from '../../services/api';
import Input from '../component/Input';

export default function Update(){
    const navigation = useNavigation();
    const formRef = useRef(null);    
    const route = useRoute();

    const userId = route.params.favorite.user_id;
    const id = route.params.favorite.id;
    

    function navigateToBack(){
        navigation.navigate('Main');
    }

    async function handleSubmit(data,{reset}) {  
        if(data.image === ""){
            data.image = "https://i.imgur.com/8u3skSq.png";
        }                
        try{
            await api.put(`favorites/${id}`, data, 
                {headers: {
                        Authorization:  userId,
                    }
                }     
            );
            alert('Alterado com sucesso!');
            navigateToBack();

        }catch(err){
            reset();
            alert('Erro ao atualizar, tente novamente.');
        }
    }

    let openImagePickerAsync = async (form) => {                
        
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false){
            alert("Permissão obrigatória");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true){
            return;
        }

        form.current.setFieldValue("image", pickerResult.uri);        
        return;
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

                    <TouchableOpacity onPress={() => openImagePickerAsync(formRef)} style={styles.btnImage}>
                        <Text style={styles.btnImgText}>Selecionar Imagem</Text>
                        <Input style={styles.textImg} name='image' type='image' editable={false} selectTextOnFocus={false} />
                    </TouchableOpacity>

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