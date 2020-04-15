import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Login() {
    const navigation = useNavigation();

    function navigateToLogin(){
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateToLogin}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}