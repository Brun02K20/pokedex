import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { getColorPokemon } from '../utils/getColorPokemon.js'
import { LinearGradient } from 'expo-linear-gradient'

const PokemonCard = ({ pokemon }) => {

    const bgStyles = { backgroundColor: "#f0f", ...styles.bgStyles }
    const pokemonColor = getColorPokemon(pokemon.types)

    const goToPokemon = () => {
        console.log(`Es pokemon ${pokemon.name}`);
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={goToPokemon}>
                <View style={styles.card}>
                    <View style={styles.spacing}>
                        <LinearGradient
                            colors={pokemonColor}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={bgStyles}
                        >
                            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                            <Text style={styles.name}>{pokemon.name}</Text>
                            <Image source={{ uri: pokemon.image }} style={styles.image} />
                        </LinearGradient>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        flex: 1,
        height: 150
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    },
    name: {
        color: "#fff",
        paddingTop: 10,
        fontSize: 15,
        fontWeight: "bold",
        textTransform: 'capitalize'
    },
    number: {
        position: "absolute",
        top: 10,
        right: 10,
        fontSize: 11,
        color: "#fff"
    }
});



export { PokemonCard }