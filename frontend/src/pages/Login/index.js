import React, { useRef } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import api from '../../services/api';
import Input from '../component/Input';
import logoImg from '../../assets/logo_3X.png';
import styles from './styles';

export default function Login() {

    const formRef = useRef(null);
    const navigation = useNavigation();

    function navigateToMain(user){
        navigation.navigate('Main', { user });
    }

    function resetForm() {
        formRef.current.reset();
    }

    function navigateToCreateUser(){   
        resetForm();
        navigation.navigate('User');
    }

    async function handleSubmit(data, { reset }){
        if(data.login === "" && data.senha === ""){
            alert('Informe os campos obrigatórios.');
        }else{            
           if(data.senha.length >= 8){
                try{
                    const user = await api.post('login', data);                                        
                    alert(`Bem-vindo! ${user.data.login}`);
                    reset();
                    navigateToMain(user);
                }catch(err){
                    alert("Usuário não cadastrado.");
                    reset();
                }
            }else{
                alert("Campo senha tem que possuir no mínimo 8 caracteres.");
                reset();
            }
        }
    }

    return (        
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
            </View>

            <View style={styles.loginContainer}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Text style={styles.text}>Login: </Text>
                    <Input style={styles.login} name="login" type="login" />

                    <Text style={styles.text}>Senha: </Text>
                    <Input secureTextEntry={true} style={styles.senha} name="senha" type="senha" />

                    <View style={styles.action}>
                        <TouchableOpacity style={styles.button} onPress={() => formRef.current.submitForm()}>
                            <Text style={styles.buttonText} >Login</Text>
                        </TouchableOpacity>      
                        
                        <TouchableOpacity style={styles.buttonRegister} onPress={navigateToCreateUser}>
                            <Text style={styles.buttonRegisterText}>Cadastrar-se</Text>
                        </TouchableOpacity>
                    </View>
                </Form>
            </View>
        </View>
    );
}