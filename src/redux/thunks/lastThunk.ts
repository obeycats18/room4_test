import { Dispatch } from 'react'

import actions from '../actions/lastActions'
import {lastAPI} from '../../api'
import { ActionsT } from '../reducers/lastReducer'
import { TrackT, ArtistDetailT, SeachedTrackT } from '../../@types/lastFM.types'

const {getChartTrackAction, getArtistInfoAction, getSearchedTrackAction} = actions

const getChartTracks = () => async (dispath: Dispatch<ActionsT>) => {
    try{
        const track: TrackT[] = await lastAPI.getCharTracks()

        if(track && !(track instanceof Promise)) {
            dispath(getChartTrackAction(track))
        }
    }catch(error){
        console.log(error)
    }
}

const getArtistInfo = (artistName: string) => async (dispath: Dispatch<ActionsT>) => {
    try{
        const artist: ArtistDetailT = await lastAPI.getArtistInfo(artistName)

        if(artist && !(artist instanceof Promise)) {

            dispath(getArtistInfoAction(artist))
        }
    }catch(error){
        console.log(error)
    }
}

const searchTrack = (query: string) => async (dispath: Dispatch<ActionsT>) => {
    try{
        const track: SeachedTrackT[] = await lastAPI.searchTrack(query)
        if(track && !(track instanceof Promise)) {

            dispath(getSearchedTrackAction(track))
        }
    }catch(error){
        console.log(error)
    }
}

export default {getChartTracks, getArtistInfo, searchTrack}

