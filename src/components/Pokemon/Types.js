import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { getColorOfOneType } from '../../utils/getColorPokemon.js'

const Types = ({ types }) => {

    const color = (type) => getColorOfOneType(type)
    return (
        <View style={styles.content}>
            {types.map(item => (
                <View
                    key={item.type.name}
                    style={{ backgroundColor: color(item.type.name), ...styles.pill }}
                >
                    <Text style={styles.typeName}>{item.type.name}</Text>
                </View>
            ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    typeName: {
        fontSize: 20,
        color: "white"
    }
})

export { Types }