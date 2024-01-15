import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Favorite = ({ pokemonId }) => {
    const addFavorite = () => {
        console.log("añadir a favoritos: ", pokemonId)
    }

    return (
        <Icon
            name="heart"
            color="#fff"
            size={20}
            onPress={() => addFavorite()}
            style={{ marginRight: 20 }}
        />
    )
}

export { Favorite }