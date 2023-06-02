import axios from 'axios';

const instance = axios.create({
    baseURL:'http://127.0.0.1:5001/clone-8c9a8/us-central1/api'  //API (clod function) URL
});

export default instance;