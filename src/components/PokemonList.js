import { View, Text, FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import { PokemonCard } from './PokemonCard.js'
const PokemonList = ({ pokemons, loadPokemons, isNext, isLoading }) => {

    // como inicialmente se cargan 20 pokemon, esto va a servir para cargar los 20 sgtes sucesivamente
    const loadMorePokemon = () => {
        loadPokemons()
    }

    console.log(Platform.OS)

    return (
        <FlatList
            data={pokemons} // datos a mostrar en el listado
            numColumns={2} // cantidad de items por filas
            showsVerticalScrollIndicator={false} // para que cuando hagamos scroll no aparezca la barrita de scroll
            keyExtractor={(pokemon, index) => String(index)} // obligatorio
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={!isLoading && isNext && loadMorePokemon} // cuando alcance el final de la lista, 
            onEndReachedThreshold={0.1} // cuando este a punto de llegar a ese final de la listadigamos
            ListFooterComponent={
                isLoading &&
                isNext &&
                <ActivityIndicator size="large" color="#AEAE" style={styles.spinner} />
            }
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginBottom: Platform.OS === "android" ? 30 : 15,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 60 : 40,
    },
});

export { PokemonList }