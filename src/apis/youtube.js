import axios from 'axios';

const KEY = 'AIzaSyAywV0q6LPEruU4h1XEsb91NaNqTv2Q35g'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})



