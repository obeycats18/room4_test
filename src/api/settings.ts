import axios from 'axios'


const _axios = axios.create({
    baseURL: `http://ws.audioscrobbler.com/2.0/?method=`
})

export default _axios