import axios from 'axios';

const api = axios.create({baseURL: "http://ip172-18-0-3-c26uh3vqf8u00080k9q0-8080.direct.labs.play-with-docker.com/"});


export default api;