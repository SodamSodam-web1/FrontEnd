import axios from 'axios';
import { API_BASE_URL, DEFAULT_HEADERS } from './config';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: DEFAULT_HEADERS
});
client.interceptors.request.use(cfg => {
    const token = localStorage.getItem('token');
    if (token) cfg.headers.Authorization = `Bearer ${token}`;
    return cfg;
});

export default client;
