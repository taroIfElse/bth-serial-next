import React from 'react'
import { View, Text,Switch,StyleSheet } from 'react-native'

export default function Togle(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ON</Text>
            <Switch style={styles.switch}
            value={props.value}
            onValueChange={props.onValueChange}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        flexDirection:'row'
    },
    switch: {
        width: 50
        
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex:1
    }
})