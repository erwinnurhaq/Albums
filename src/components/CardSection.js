import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: '#ddd'
    }
})

export default ({ children }) => {
    return (
        <View style={styles.containerStyle}>
            {children}
        </View>
    )
}
