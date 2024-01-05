import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react'
import { getPokemonApi } from '../api/pokemon.js'

const Pokedex = () => {



    useEffect(() => {
        const loadPokemons = async () => {
            try {
                const response = await getPokemonApi()
                console.log(response)
            } catch (error) {
                console.error("ERROR AL SOLICITAR: ", error)
            }
        }
        loadPokemons()
    }, [])

    return (
        <SafeAreaView>
            <Text>Pokedex</Text>
        </SafeAreaView>
    )
}

export { Pokedex }