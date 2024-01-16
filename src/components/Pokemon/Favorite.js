import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite.js'

const Favorite = ({ pokemonId }) => {

    const [isFavorite, setIsFavorite] = useState(undefined)
    const [reloadCheck, setReloadCheck] = useState(false) // interruptor para que se pinte o se despinte el corazoncito

    useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavoriteApi(pokemonId)
                setIsFavorite(response)
            } catch (error) {
                setIsFavorite(false)
            }
        })()
        console.log("es favorito: ", isFavorite)
    }, [pokemonId, reloadCheck])

    const addFavorite = async () => {
        try {
            await addPokemonFavoriteApi(pokemonId)
            onReloadCheckFavorite()
        } catch (error) {
            console.log("error al agregar a favoritos: ", error);
        }
    }

    const removeFavorite = async () => {
        try {
            await removePokemonFavoriteApi(pokemonId)
            onReloadCheckFavorite()
        } catch (error) {
            console.log("error al eliminar de favoritos: ", error);
        }
    }

    const onReloadCheckFavorite = () => {
        setReloadCheck((prevState) => !prevState)
    }

    return (
        <Icon
            name="heart"
            color="#fff"
            size={20}
            onPress={isFavorite ? removeFavorite : addFavorite}
            style={{ marginRight: 20 }}
            solid={isFavorite}
        />
    )
}

export { Favorite }