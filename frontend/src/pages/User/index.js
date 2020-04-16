import React, { useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import api from '../../services/api';
import Input from '../component/Input';
import styles from './styles';

export default function User() {

    const formRef = useRef(null);
    const navigation = useNavigation();

    function navigateToLogin(){
        navigation.navigate('Login');
    }

    async function handleSubmit(data){
        if(data.login === "" && data.senha === "" && data.confirmar === ""){
            alert("Informe os campos obrigatórios.");
        }else{
            if(data.confirmar === data.senha){
                try{
                    await api.post('users', data);
                    alert('Cadastro realizado com sucesso.');
                    navigateToLogin();
                }catch(err){
                    alert("Usuário informado já existe.");
                }
            }else{
                alert('Senhas diferentes. Informe a senha correta!')
            }
        }
    }

    return (        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Cadastrar usuário</Text>
            </View>

            <View style={styles.loginContainer}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Text style={styles.text}>Login: </Text>
                    <Input style={styles.login} name="login" type="login" />

                    <Text style={styles.text}>Senha: </Text>
                    <Input style={styles.senha} name="senha" type="senha" />
                    
                    <Text style={styles.text}>Confirmar senha: </Text>
                    <Input style={styles.senha} name="confirmar" type="confirmar" />

                    <View style={styles.action}>
                        <TouchableOpacity style={styles.button} onPress={() => formRef.current.submitForm()}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>                                                     
                        
                        <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>                                                     
                    </View>
                </Form>
            </View>
        </View>
    );
}