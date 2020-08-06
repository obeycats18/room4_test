import React, {useEffect} from 'react'

import {connect, ConnectedProps} from 'react-redux'

import {SafeAreaView, ActivityIndicator} from 'react-native'

import thunk from '../../../redux/thunks/lastThunk'
import { GlobalState } from '../../../redux/store';
import { Home } from '../index';

import styled from 'styled-components/native'

const {getChartTracks} = thunk

type ConnectedPropsT = ConnectedProps<typeof _connector>

const CenteredContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const _mapStateToProps = ({lastFm}: GlobalState) => ({
    tracks: lastFm.tracks
})

const _connector = connect(_mapStateToProps, {getChartTracks})

const HomeContainer: React.FC<ConnectedPropsT> = ({getChartTracks, tracks}) => {
    
    useEffect(() => {
        getChartTracks()
    }, [tracks.length]);

    return (
        <SafeAreaView>
            {(tracks && tracks.length) ? <Home tracks={tracks}/> : <CenteredContainer><ActivityIndicator/></CenteredContainer>}
        </SafeAreaView>
    )
}

export default _connector(HomeContainer);
