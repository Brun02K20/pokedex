import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FAVORITE_STORAGE } from '../utils/constants.js'
// basicamente, el asyncStorage es una libreria que funcionaria a lo que es el equivalente al localStorage en la version web

const addPokemonFavoriteApi = async (id) => {
    try {
        const favorites = await getPokemonFavoriteApi()
        favorites.push(id);
        console.log("favoritos post agregado: ", favorites)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch (error) {
        throw error
    }
}


const getPokemonFavoriteApi = async () => {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
        return JSON.parse(response || '[]')
    } catch (error) {
        throw error
    }
}

const isPokemonFavoriteApi = async (id) => {
    try {
        const response = await getPokemonFavoriteApi();
        return response.includes(id)
    } catch (error) {
        throw error
    }
}


const removePokemonFavoriteApi = async (id) => {
    try {
        const favorites = await getPokemonFavoriteApi();
        const newFavorites = favorites.filter(fav => fav != id);
        console.log("favoritos postborrado: ", newFavorites)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))
    } catch (error) {
        throw error
    }
}

export { addPokemonFavoriteApi, getPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi }