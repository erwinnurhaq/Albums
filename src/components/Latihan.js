import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Latihan extends React.Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.headerView}>
                </View>
                <View style={styles.bodyView} />
                <View style={styles.footerView} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: 'dimgray',
        flexDirection: 'column',
        flex: 1,
        padding: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerView: {
        backgroundColor: 'darkturquoise',
        height: 50,
        width: 50
        // flex: 1
    },
    bodyView: {
        backgroundColor: 'deepskyblue',
        borderRadius: 50,
        height: 50,
        width: 50
        // flex: 2
    },
    footerView: {
        backgroundColor: 'dodgerblue',
        height: 50,
        width: 50
        // flex: 1
    }
})

export default Latihan