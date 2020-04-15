import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Main from './pages/Main';

const AppStack = createStackNavigator();

export default function Rotues(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name='Login' component={Login}/>
                <AppStack.Screen name='Main' component={Main}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}