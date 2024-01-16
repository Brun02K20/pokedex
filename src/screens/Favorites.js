import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect, useCallback } from 'react' // para que sirve useCallback? investigar en doc
import { getPokemonFavoriteApi } from '../api/favorite.js'
import { getPokemonDetailApi } from '../api/pokemon.js'
import useAuth from "../hooks/useAuth.js"
import { PokemonList } from '../components/PokemonList.js'

// para que servira esto? investigar mas a detalle ne la documentacion
import { useFocusEffect } from '@react-navigation/native'
import { NoLogged } from '../components/NoLogged.js'

const Favorites = () => {
    const [pokemons, setPokemons] = useState([])
    const { auth } = useAuth()

    useFocusEffect(
        useCallback(() => {
            if (auth) {
                (async () => {
                    const response = await getPokemonFavoriteApi()
                    const pokemonArray = [];

                    for await (const id of response) {
                        const pokDetail = await getPokemonDetailApi(id)
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
                })()
            }
        }, [auth])
    )

    useEffect(() => {
        console.log("pok in fav: ", pokemons)
    }, [pokemons])
    return (
        !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />
    )
}

export { Favorites }