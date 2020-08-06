import axios from './settings'

const _apiKey = '263aab99fb5c367b2a0a9016330450ed'

export const lastAPI = {
    getCharArtist: () => {
        const response = axios.get(`chart.gettopartists&api_key=${_apiKey}&format=json`)
        console.log(response)
        return response
    }
}