import axios from 'axios';

const api = axios.create({baseURL: "http://ip172-18-0-28-c2c5m8fqf8u0009kurpg-8080.direct.labs.play-with-docker.com/"});

export default api;