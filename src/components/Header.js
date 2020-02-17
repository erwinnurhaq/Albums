import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = props => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
})

export default Header
