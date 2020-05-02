import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import About from './pages/About';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Main} />
                <Stack.Screen name='About' component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

