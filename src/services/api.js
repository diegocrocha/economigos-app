import axios from 'axios';

const api = axios.create({baseURL: "http://ip172-18-0-52-c2av1u5mrepg008v8ndg-8080.direct.labs.play-with-docker.com/"});


export default api;