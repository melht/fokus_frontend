import axios from 'axios';

const api = axios.create({
    baseURL: "https://fokus-backend-ioll.onrender.com",
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token && config.url !== '/login') {
        console.log('Añadiendo token para:', config.url);
        config.headers.Authorization = `Bearer ${token}`;
    } else if (!token) {
        console.log('No token found para:', config.url);
    }
    return config;
});


/*
// Interceptor para incluir el token en las peticiones
api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token'); // Guarda y obtén el token usando AsyncStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
*/
  export default api;
