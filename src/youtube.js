import axios from 'axios';

const KEY = 'AIzaSyDQ42B6uwxtiO-aQ_Pd4C8gv9N2CROEHgI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    },
});