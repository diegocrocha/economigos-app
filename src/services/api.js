import axios from 'axios';

const api = axios.create({baseURL: "http://ip172-18-0-63-c29jo77njsv000atoa70-8080.direct.labs.play-with-docker.com/"});


export default api;