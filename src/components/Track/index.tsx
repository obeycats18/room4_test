import React from 'react'

import {Image, Linking} from 'react-native'
import { TrackT, SeachedTrackT } from '../../@types/lastFM.types'

import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { getImage } from '../../utilits/getImage'

type _TrackPropsT = {
    track: TrackT | SeachedTrackT
}

const TrackName = styled.Text`
    font-size: 16px;
    font-weight: bold;
`

const TrackArtist = styled.Text`
    font-size: 14px;
    font-weight: normal;
`

const TrackArtistUrl = styled.Text`
    font-size: 12px;
    font-weight: normal;
    color: blue;
`

const TrackInfo = styled.View`
    flex-direction: column;
`

const TrackContainer = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 20px;
`

const _toUrl = (link: string) => Linking.openURL(link)

const Track: React.FC<_TrackPropsT> = ({track}) => {

    const _smallImg = getImage('small', track.image)//track.image && track.image.find( img => img.size === 'small' )

    const {navigate} = useNavigation()

    const _navigateTo = () => {
        navigate('ArtistDetail', {artistName: (track.artist instanceof Object) ? track.artist.name : track.artist})
    }    

    return (
        <TrackContainer onPress={_navigateTo}>
            {_smallImg && <Image style={{width: 50, height: 50, marginRight: 15}} source={{uri: _smallImg['#text']}}/>}
            <TrackInfo>
                <TrackName>{track.name}</TrackName>
                <TrackArtist>{(track.artist instanceof Object) ? track.artist.name : track.artist}</TrackArtist>
                {
                    (track.artist instanceof Object) &&
                    <TouchableOpacity onPress={() => _toUrl((track.artist instanceof Object) ? track.artist.url : '')}>
                        <TrackArtistUrl>{track.artist.url}</TrackArtistUrl>
                    </TouchableOpacity>
                }
            </TrackInfo>
        </TrackContainer>
    )
}

export default Track;
