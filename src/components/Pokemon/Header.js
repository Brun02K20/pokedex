import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { getColorPokemon } from '../../utils/getColorPokemon.js'
import { LinearGradient } from 'expo-linear-gradient'

const Header = ({ name, order, image, types }) => {
    const pokemonColor = getColorPokemon(types)
    // const bgStyles = 

    // ese view arriba del contenedor de la imagen, sirve para un fondo

    return (
        <>
            <LinearGradient
                colors={pokemonColor}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.bgStyles}
            />
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    bgStyles: {
        width: "100%",
        height: 400,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }]
    },

    content: {
        marginHorizontal: 20,
        marginTop: 30
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 26,
    },
    order: {
        color: 'white',
        fontWeight: 'bold',
    },
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 30
    },
    image: {
        width: 200,
        height: 300,
        resizeMode: "contain"
    }
})

export { Header }