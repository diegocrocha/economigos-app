import axios from 'axios';

const api = axios.create({baseURL: "http://ip172-18-0-27-c26asb7qf8u00080jcqg-8080.direct.labs.play-with-docker.com/"});


export default api;