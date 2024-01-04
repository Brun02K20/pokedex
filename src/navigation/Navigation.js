
import React from 'react'
import { Image } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorites } from '../screens/Favorites.js';
import { Account } from '../screens/Account.js';
import { Pokedex } from '../screens/Pokedex.js';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

// sistema de navegacion principal de la app

// las props: 
// name --> nombre clave de la pestaña, se la usa como un id digamos
// component --> que muestra esa pestaña
// options --> configuraciones
const Navigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Account" component={Account} options={{
                tabBarLabel: "Mi cuenta",
                tabBarIcon: ({ size }) => (
                    <Icon name="user" color="#000" size={size}></Icon> // aca, el color lo controlo yo, el tamaño lo controla la libreria externa
                )
            }} />

            <Tab.Screen name="Pokedex" component={Pokedex} options={{
                tabBarLabel: "", // asi no le aparece ningun texto
                tabBarIcon: () => renderPokeball()
            }} />

            <Tab.Screen name="Favorites" component={Favorites} options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({ size }) => (
                    <Icon name="heart" color="#000" size={size}></Icon> // aca, el color lo controlo yo, el tamaño lo controla la libreria externa
                )
            }} />
        </Tab.Navigator>
    )
}

// crear la funcion que me devuelva la imagen estilizada
const renderPokeball = () => {
    return (
        <Image
            source={require("../assets/pokeball.png")} // fuente de la imagen
            style={{ width: 60, height: 60, top: -15 }}
        />
    )
}

export { Navigation }