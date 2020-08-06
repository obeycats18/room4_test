import React, { useState } from 'react'

import {TextInput} from 'react-native'
import { SeachedTrackT } from '../../@types/lastFM.types'

import styled from 'styled-components/native'
import { TrackList } from '../../components'

type SearchPropsT = {
    track: SeachedTrackT[],
    searchTrack: (query: string) => any
}

const Row = styled.View`
    flex-direction: row;
`

const Button = styled.TouchableOpacity`
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 3px; 
    background-color: #2ecc71; 
    margin-right: 5px;
    margin-bottom: 5px;
`
const ButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
`
const ArtistContainer = styled.ScrollView`
    padding: 20px;
`

const _renderTrack = (track: SeachedTrackT[]) => {
    if(track && track.length){
        return <TrackList tracks={track}/>
    }
}

export const SearchTrack: React.FC<SearchPropsT> = ({track, searchTrack}) => {
    
    const [query, setQuery] = useState<string>('')
    
    const _onChange = (value: any) => {
        setQuery(value)
    } 

    const _onSubmit = () => {
        searchTrack(query)
    }

    return (
        <ArtistContainer>
            <Row>
                <TextInput
                    style={{ width: 280, height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 15 }}
                    onChangeText={_onChange}
                    value={query}
                />
                <Button onPress={_onSubmit}><ButtonText>Искать</ButtonText></Button>
            </Row>

           {_renderTrack(track)}
           
        </ArtistContainer>
    )
}
