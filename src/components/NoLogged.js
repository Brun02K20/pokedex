import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NoLogged = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Para ver tus pokemons favoritos tenés que iniciar sesión</Text>
            <Button title='Ir a LogIn' onPress={() => navigation.navigate("Account")}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        paddingHorizontal: 50
    },
    text: {
        textAlign: "center",
        marginBottom: 10
    }
})
export { NoLogged }