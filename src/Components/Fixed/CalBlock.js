import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export const Block = ({children}) =>{
    return (
        <View style={styles.block}>
            <Text>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        // backgroundColor: '#000',
        width: 20,
        height: 20,
        borderRadius: 25
    }
})