import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Main() {
    const navigation = useNavigation();

    function navigateToLogin(){
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}