import axios from 'axios';

const api = axios.create({baseURL: process.env.REACT_APP_API_URL});
//const api = axios.create({baseURL: "http://ip172-18-0-8-c2ruo9vnjsv000dqo0s0-8080.direct.labs.play-with-docker.com/"})

export default api;