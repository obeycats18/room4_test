import React, {useEffect} from 'react'

import {connect, ConnectedProps} from 'react-redux'

import thunk from '../../../redux/thunks/lastThunk'
import { GlobalState } from '../../../redux/store';
import { Home } from '../index';

import {Text} from 'react-native'

const {getChartArtists} = thunk

type ConnectedPropsT = ConnectedProps<typeof _connector>

const _mapStateToProps = ({lastFm}: GlobalState) => ({
    artists: lastFm.artists
})

const _connector = connect(_mapStateToProps, {getChartArtists})

const HomeContainer: React.FC<ConnectedPropsT> = ({getChartArtists, artists}) => {
    
    useEffect(() => {
        getChartArtists()
    }, []);

    
    return (
        <>
            <Text>{artists}</Text>
            <Home/>
        </>
    )
}

export default _connector(HomeContainer);
