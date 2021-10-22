import axios from 'axios';

const api = axios.create({
    baseURL: "https://staging.jumpparkapi.com.br/api",
});

export default api;