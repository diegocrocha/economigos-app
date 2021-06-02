import axios from 'axios';

// const api = axios.create({baseURL: process.env.REACT_APP_API_URL});
// const filesApi = axios.create({baseFilesURL: process.env.REACT_APP_FILES_API_URL});
const api = axios.create({baseURL: "http://ip172-18-0-16-c2oki6fqf8u000arr8bg-8080.direct.labs.play-with-docker.com/"})
const api = axios.create({baseFilesURL: "http://ip172-18-0-71-c2ru2v7njsv000dqnueg-8081.direct.labs.play-with-docker.com/"})

export default api;
