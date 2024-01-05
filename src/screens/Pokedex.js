import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react'
import { getPokemonApi, getPokemonDetailByUrlApi } from '../api/pokemon.js'
import { PokemonList } from '../components/PokemonList.js'

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([])
    const [nextUrl, setNextUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("bichos en el estado: ", pokemons)
    }, [pokemons])

    const loadPokemons = async () => {
        try {
            setLoading(true);
            const response = await getPokemonApi(nextUrl)
            setNextUrl(response.next) // setear la url de los sgtes 20 pokemons de la carga actual
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
        } finally {
            // regresamos loading a false
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPokemons()
    }, [])

    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} isLoading={loading} />
        </SafeAreaView>
    )
}

export { Pokedex }