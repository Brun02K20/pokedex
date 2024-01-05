import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react'
import { getPokemonApi, getPokemonDetailByUrlApi } from '../api/pokemon.js'
import { PokemonList } from '../components/PokemonList.js'

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        console.log("bichos en el estado: ", pokemons)
    }, [pokemons])

    useEffect(() => {
        const loadPokemons = async () => {
            try {
                const response = await getPokemonApi()
                console.log(response)
                const pokemonArray = [];

                for await (const pok of response.results) {
                    const pokDetail = await getPokemonDetailByUrlApi(pok.url)
                    console.log("detalle del bicho: ", {
                        id: pokDetail.id,
                        name: pokDetail.name,
                        types: [
                            pokDetail.types[0].type.name,
                            pokDetail.types.length > 1
                                ? pokDetail.types[1].type.name
                                : null,
                        ],
                        order: pokDetail.order,
                        image: pokDetail.sprites.other['official-artwork'].front_default
                    })
                    pokemonArray.push({
                        id: pokDetail.id,
                        name: pokDetail.name,
                        types: [
                            pokDetail.types[0].type.name,
                            pokDetail.types.length > 1
                                ? pokDetail.types[1].type.name
                                : null,
                        ],
                        order: pokDetail.order,
                        image: pokDetail.sprites.other['official-artwork'].front_default
                    })
                }
                setPokemons([...pokemons, ...pokemonArray])
            } catch (error) {
                console.error("ERROR AL SOLICITAR: ", error)
            }
        }
        loadPokemons()
    }, [])

    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons} />
        </SafeAreaView>
    )
}

export { Pokedex }