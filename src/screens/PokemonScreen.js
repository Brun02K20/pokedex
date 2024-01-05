import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonDetailApi } from '../api/pokemon.js'
import { Header } from '../components/Pokemon/Header.js'
import { Types } from '../components/Pokemon/Types.js'
import { Stats } from '../components/Pokemon/Stats.js'
import Icon from 'react-native-vector-icons/FontAwesome5';

const PokemonScreen = ({ route, navigation }) => {
    console.log(route.params.id)

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => <Icon name='arrow-left' color="white" size={20} style={{ marginLeft: 20 }} onPress={() => navigation.goBack()}></Icon>
        })
    }, [navigation, route])

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

            <Types
                types={pokemon.types}
            />

            <Stats
                stats={pokemon.stats}
            />
        </ScrollView>
    )
}

export { PokemonScreen }