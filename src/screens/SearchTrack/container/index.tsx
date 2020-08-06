import React from 'react'
import {SearchTrack} from '../index';

import {connect, ConnectedProps} from 'react-redux'

import {SafeAreaView, ActivityIndicator} from 'react-native'

import thunk from '../../../redux/thunks/lastThunk'
import { GlobalState } from '../../../redux/store';

import styled from 'styled-components/native'

const {searchTrack} = thunk

type ConnectedPropsT = ConnectedProps<typeof _connector>

const CenteredContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const _mapStateToProps = ({lastFm}: GlobalState) => ({
    searchedTrack: lastFm.searchedTrack
})

const _connector = connect(_mapStateToProps, {searchTrack})

const SearchTrackContainer: React.FC<ConnectedPropsT> = ({searchedTrack, searchTrack}) => {
    return (
        <SearchTrack track={searchedTrack} searchTrack={searchTrack}/>
    )
}

export default _connector(SearchTrackContainer);
