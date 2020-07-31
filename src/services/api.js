import axios from "axios";

const api = axios.create({
    baseURL : 'swapi.dev/api'
});

export default api;
