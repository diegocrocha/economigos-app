import axios from 'axios';

const filesApi = axios.create({baseURL: process.env.REACT_APP_FILES_API_URL});
// const filesApi = axios.create({baseURL: "http://localhost:8081/"})

export default filesApi;
