import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Stats = ({ stats }) => {

    const barStyles = (num) => {
        let bgColorized;

        if (num <= 25) {
            bgColorized = "#ff3e3e";
        } else if (num > 25 && num < 50) {
            bgColorized = "#F08700";
        } else if (num >= 50 && num < 75) {
            bgColorized = "#EFCA08";
        } else if (num >= 75) {
            bgColorized = "#6EEB83";
        }
        return {
            backgroundColor: bgColorized,
            width: `${num}%`,
        };
    };

    console.log("estadisticas: ", stats)
    return (
        <View style={styles.content}>
            <Text style={styles.title}>Base Stats</Text>
            {stats && stats.map((item, index) => (
                <View key={index} style={styles.block}>
                    <View style={styles.blockTitle}>
                        <Text style={styles.statName}>{item.stat.name}</Text>
                    </View>
                    <View style={styles.blockInfo}>
                        <Text style={styles.number}>{item.base_stat}</Text>
                        <View style={styles.bgBar}>
                            <View style={[styles.bar, barStyles(item.base_stat)]} />
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 60
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5
    },
    block: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    blockTitle: {
        width: '34%',
    },
    statName: {
        fontSize: 14,
        color: '#6b6b6b'
    },
    blockInfo: {
        width: '66%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    number: {
        width: '12%',
        fontSize: 14
    },
    bgBar: {
        backgroundColor: '#dedede',
        width: '88%',
        height: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },
    bar: {
        height: 10,
        borderRadius: 20,
    }
})

export { Stats }