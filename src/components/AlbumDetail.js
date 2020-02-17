import React from 'react'
import { View, Text, Image, StyleSheet, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const styles = StyleSheet.create({
    thumbnailContainer: {
        marginHorizontal: 10,
        borderRadius: 5,
        overflow: "hidden"
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
    },
    image: {
        height: 300,
        flex: 1
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
            <CardSection>
                <Image
                    style={styles.image}
                    source={{ uri: album.image }}
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(album.url)}>Buy Now</Button>
            </CardSection>
        </Card>
    )
}