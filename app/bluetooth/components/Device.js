import React from 'react'
import { View, Text,TouchableOpacity,Image,StyleSheet } from 'react-native'

export default function Device(props) {
    return (
        <TouchableOpacity style={styles.wraper} onPress={props.onPress}>
            <View styles={styles.wraperLeft}>                
            <Image styles={styles.iconLeft} source={props.iconLeft}/>
            </View>
              <View styles={styles.wraperName}>               
                <Text style={styles.name}>{props.name }</Text>
            </View>
            <Image styles={styles.iconRight} source={props.iconRight}/>
        </TouchableOpacity>
      
    )
}
const styles = StyleSheet.create({
    wraper: {

    },
    wraperLeft: {

    },
    iconLeft: {
        
    },
    wraperName: {

    },
    name: {

    },
    iconRight: {
        
    },
})
