import React from 'react'
import { View, Text,StyleSheet,Switch } from 'react-native'

export default function Subtitle(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.line} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems:'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'gray'
    },
    line: {
        borderBottomWidth: 1,
        width:50
    },
})
