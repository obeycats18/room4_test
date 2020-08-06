import { TrackT, ArtistDetailT, SeachedTrackT } from "../../@types/lastFM.types"

const GET_CHART_TRACK = 'GET_CHART_TRACK'
const GET_ARTIST_INFO = 'GET_ARTIST_INFO'
const GET_SEARCHED_TRACK = 'GET_SEARCHED_TRACK'


const getChartTrackAction = (tracks: TrackT[]) => ({type: GET_CHART_TRACK, tracks} as const) 
const getArtistInfoAction = (artist: ArtistDetailT) => ({type: GET_ARTIST_INFO, artist} as const) 
const getSearchedTrackAction = (tracks: SeachedTrackT[]) => ({type: GET_SEARCHED_TRACK, tracks} as const) 

export default {getChartTrackAction, getArtistInfoAction, getSearchedTrackAction}