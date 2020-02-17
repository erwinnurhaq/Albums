import React from 'react'
import { View, ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends React.Component {

    state = {
        albumList: []
    }

    componentDidMount() {
        console.log('album list')
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => {
                console.log(res.data)
                this.setState({ albumList: res.data })
            })
            .catch(err => console.log(err))
    }

    renderAlbumList = () => {
        return this.state.albumList.map((item, index) => {
            return (
                <AlbumDetail album={item} key={index} />
            )
        })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'whitesmoke' }}>
                <ScrollView>
                    {this.renderAlbumList()}
                </ScrollView>
            </View>
        )
    }
}

export default AlbumList