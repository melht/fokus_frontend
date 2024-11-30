import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fokus-backend-ioll.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token'); 
    if (token) { config.headers.Authorization = `Bearer ${token}`; }
    return config;
});

export default api;