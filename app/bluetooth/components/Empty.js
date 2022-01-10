import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function Empty(props) {
    return (
        <View>
            <Text style={styles.text}>{ props.text }</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize:25
    }
})