import axios from 'axios'

const _apiKey = '263aab99fb5c367b2a0a9016330450ed'

export const lastAPI = {
    getCharTracks: async (limit = 10) => {
        try{
            const {data} = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${_apiKey}&limit=${limit}&format=json`)
            if(!(data instanceof Promise)) {
                if(data.tracks) {return data.tracks.track} 
            }

        }catch(error) {
            console.log(error)
        }
    },

    getArtistInfo: async (artistName: string) => {
        try{
            const {data} = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${_apiKey}&format=json`)
            if(!(data instanceof Promise)) {
                if(data.artist) {return data.artist} 
            }

        }catch(error) {
            console.log(error)
        }
    },

    searchTrack: async (query: string, limit = 10) => {
        try{
            const {data} = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&limit=${limit}&api_key=${_apiKey}&format=json`)
            if(!(data instanceof Promise)) {
                if(data.results) {
                    const track = data.results.trackmatches.track
                    if(track) return track
                } 
            }

        }catch(error) {
            console.log(error)
        }
    }
}