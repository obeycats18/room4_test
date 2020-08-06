const GET_CHART_ARTIST = 'GET_CHART_ARTIST'

const getChartArtistAction = (artists: any) => ({type: GET_CHART_ARTIST, artists} as const) 

export default {getChartArtistAction}