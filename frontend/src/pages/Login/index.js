import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Login() {
    const navigation = useNavigation();

    function navigateToMain(){
        navigation.navigate('Main');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateToMain}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}