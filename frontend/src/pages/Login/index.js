import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Login() {
    const navigation = useNavigation();

    function navigateToMain(){
        navigation.navigate('Main');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={navigateToMain}>
                <Text style={styles.buttonText} >Login</Text>
            </TouchableOpacity>
        </View>
    );
}