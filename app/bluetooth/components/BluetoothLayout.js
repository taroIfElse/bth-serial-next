import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BluetoothLayout(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{ props.title }</Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: '#f5fcff'
    },
    title: {
        fontSize: 20,
        fontWeight:'bold'
    },
})