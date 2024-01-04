
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorites } from '../screens/Favorites.js';
import { Account } from '../screens/Account.js';
import { Pokedex } from '../screens/Pokedex.js';


const Tab = createBottomTabNavigator();

// sistema de navegacion principal de la app
const Navigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Account" component={Account} />
            <Tab.Screen name="Pokedex" component={Pokedex} />
            <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
    )
}

export { Navigation }