import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import User from './pages/User';
import Main from './pages/Main';
import Create from './pages/Create';
import Detail from './pages/Detail';
import Update from './pages/Update';

const AppStack = createStackNavigator();

export default function Rotues(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name='Login' component={Login}/>
                <AppStack.Screen name='Main' component={Main}/>
                <AppStack.Screen name='User' component={User}/>
                <AppStack.Screen name='Create' component={Create}/>
                <AppStack.Screen name='Detail' component={Detail}/>
                <AppStack.Screen name='Update' component={Update}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}