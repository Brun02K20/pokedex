import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonDetailApi } from '../api/pokemon.js'
import { Header } from '../components/Pokemon/Header.js'

const PokemonScreen = ({ route, navigation }) => {
    console.log(route.params.id)

    const [pokemon, setPokemon] = useState(null)

    const loadPokemon = async () => {
        try {
            const response = await getPokemonDetailApi(route.params.id);
            console.log("pokemon especifoc: ", response)
            setPokemon(response)
        } catch (error) {
            navigation.goBack()
        }
    }

    useEffect(() => {
        loadPokemon()
    }, [route])

    if (!pokemon) return null
    return (
        <ScrollView>
            <Header
                name={pokemon.name}
                order={pokemon.order}
                image={pokemon.sprites.other['official-artwork'].front_default}
                types={
                    [pokemon.types[0].type.name,
                    pokemon.types.length > 1
                        ? pokemon.types[1].type.name
                        : null,
                    ]
                }
            />
        </ScrollView>
    )
}

export { PokemonScreen }