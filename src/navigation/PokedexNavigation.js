import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Pokedex } from '../screens/Pokedex.js'
import { PokemonScreen } from '../screens/PokemonScreen.js'

const Stack = createNativeStackNavigator();

// sistema de navegacion que estara solamente en la pantalla de la pokedex, que muestra inicialmente
// la pantalla general de la pokedex, y posteriormente la pantalla de un pokemon puntual
const PokedexNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen name="Pokedex" component={Pokedex} options={{
                headerTitle: "Pokedex",
                headerTitleAlign: "center"
            }} />

            <Stack.Screen name="Pokemon" component={PokemonScreen} options={{
                headerTitle: "Pokemon",
                headerTitleAlign: "center"
            }} />

        </Stack.Navigator>
    )
}

export { PokedexNavigation }