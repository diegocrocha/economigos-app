import axios from 'axios';

// const filesApi = axios.create({baseURL: process.env.REACT_APP_FILES_API_URL});
const filesApi = axios.create({baseURL: "http://ip172-18-0-71-c2ru2v7njsv000dqnueg-8081.direct.labs.play-with-docker.com/"})

export default filesApi;
