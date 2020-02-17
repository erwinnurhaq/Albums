import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const styles = StyleSheet.create({
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    thumbnail: {
        height: 50,
        width: 50
    },
    headerContent: {
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ({ album }) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainer}>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: album.thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>

        </Card>
    )
}