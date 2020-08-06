import actions from '../actions/lastActions'
import {InferActions} from '../../@types/redux.types'
import { TrackT, ArtistDetailT, SeachedTrackT} from '../../@types/lastFM.types'

export type ActionsT = ReturnType<InferActions<typeof actions>>

type InititalStateT = {
    tracks: TrackT[],
    searchedTrack: SeachedTrackT[],
    artist: ArtistDetailT | null
}

const initialState: InititalStateT = {
    tracks: [],
    searchedTrack: [],
    artist: null
}

export const lastReducers = (state = initialState, action: ActionsT): InititalStateT => {
    switch(action.type) {
        case 'GET_CHART_TRACK': return {
            ...state,
            tracks: action.tracks
        }
        case 'GET_ARTIST_INFO': return {
            ...state,
            artist: action.artist
        }

        case 'GET_SEARCHED_TRACK': return {
            ...state,
            searchedTrack: action.tracks
        }
        default: return state
    }
}