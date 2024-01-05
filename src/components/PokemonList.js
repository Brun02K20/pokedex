import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { PokemonCard } from './PokemonCard.js'
const PokemonList = ({ pokemons }) => {
    return (
        <FlatList
            data={pokemons} // datos a mostrar en el listado
            numColumns={2} // cantidad de items por filas
            showsVerticalScrollIndicator={false} // para que cuando hagamos scroll no aparezca la barrita de scroll
            keyExtractor={(pokemon, index) => String(index)} // obligatorio
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    }
})

export { PokemonList }