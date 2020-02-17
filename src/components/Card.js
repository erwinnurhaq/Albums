import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginHorizontal: 5,
        marginTop: 10,
        overflow: 'hidden'
    }
})

export default ({ children }) => {
    return (
        <View style={styles.containerStyle}>
            {children}
        </View>
    )
}
