import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react'
import { getPokemonFavoriteApi } from '../api/favorite.js'

const Favorites = () => {
    const [favorites, setFavorites] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await getPokemonFavoriteApi();
            console.log(response)
        })()
    })

    return (
        <SafeAreaView>
            <Text>Favorites</Text>
        </SafeAreaView>
    )
}

export { Favorites }