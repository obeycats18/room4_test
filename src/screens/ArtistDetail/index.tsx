import React from 'react'

import {Image, Linking} from 'react-native'
import { ArtistDetailT } from '../../@types/lastFM.types'

import styled from 'styled-components/native'
import { getImage } from '../../utilits/getImage'

type ArtistDetailPropsT = {
    artist: ArtistDetailT
}

const ArtistHeader = styled.View`
    flex: 1;
    flex-direction: row;
`

const ArtistInfo = styled.View`
    flex-direction: column;
`

const TagsRow = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 300px;
    margin-top: 10px;
`

const ArtistName = styled.Text`
    font-size: 18px;
    font-weight: bold;
`
const Tag = styled.TouchableOpacity`
    padding: 8px;
    align-items: center;
    justify-content: center;
    border-radius: 3px; 
    background-color: #9b59b6; 
    margin-right: 5px;
    margin-bottom: 5px;
`
const TagName = styled.Text`
    font-size: 14px;
    font-weight: normal;
    color: #fff;
`

const ArtistDescrtion = styled.Text`
    font-size: 14px;
    font-weight: normal;
    margin: 8px 0;
`

const ArtistContainer = styled.ScrollView`
    padding: 20px;
`

const _goTo = (link: string) => Linking.openURL(link)

export const ArtistDetail: React.FC<ArtistDetailPropsT> = ({artist}) => {
    
    const _mediumImage = getImage('medium', artist.image)!


    return (
        <ArtistContainer>
            <ArtistHeader>
                <Image style={{width: 100, height: 100, marginRight: 15}} source={{uri: _mediumImage['#text']}}/>
                <ArtistInfo>
                    <ArtistName>{artist.name}</ArtistName>
                    <TagsRow>{artist.tags.tag.map( (t, index) => <Tag key={index} onPress={() => _goTo(t.url)}><TagName>{t.name}</TagName></Tag>)}</TagsRow>
                </ArtistInfo>
            </ArtistHeader>
            
            <ArtistName>Биография</ArtistName>
            <ArtistDescrtion>
                {artist.bio.summary}
            </ArtistDescrtion>
            
            <ArtistName>Контент</ArtistName>
            <ArtistDescrtion>
                {artist.bio.content}
            </ArtistDescrtion>
        </ArtistContainer>
    )
}
