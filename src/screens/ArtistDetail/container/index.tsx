import React, {useEffect} from 'react'

import {connect, ConnectedProps} from 'react-redux'

import {SafeAreaView, ActivityIndicator} from 'react-native'

import thunk from '../../../redux/thunks/lastThunk'
import { GlobalState } from '../../../redux/store';
import {ArtistDetail} from '../index';

import styled from 'styled-components/native'
import { useRoute } from '@react-navigation/native';

const {getArtistInfo} = thunk

type ParamsT = {
    key: string,
    params: {
        artistName: string
    },
    name: string
} 

type ConnectedPropsT = ConnectedProps<typeof _connector>

const CenteredContainer = styled.View`
    justify-content: center;
    align-items: center;
`

const _mapStateToProps = ({lastFm}: GlobalState) => ({
    artist: lastFm.artist
})

const _connector = connect(_mapStateToProps, {getArtistInfo})

const ArtistDetailContainer: React.FC<ConnectedPropsT> = ({getArtistInfo, artist}) => {

    const {params} = useRoute<ParamsT>()
    const _artistName = (params) && params.artistName

    useEffect(() => {
        getArtistInfo(_artistName)
    }, [])

    return (
        <SafeAreaView>
            {
                artist
                    ? <ArtistDetail artist={artist}/>
                    : <CenteredContainer><ActivityIndicator /></CenteredContainer>
            }
        </SafeAreaView>
    )
}

export default _connector(ArtistDetailContainer);
