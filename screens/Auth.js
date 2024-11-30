import api from './Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

//----------------------------------USER----------------------------------
// Register
export const registerUser = async (userData) => {
    try {
        const response = await api.post('/register', userData);
        return response.data;
    } catch (error) {
        console.error('Registration error: ', error.response.data);
        throw error;
    }
};

// Login
export const loginUser = async (email, password) => {
    try {
        const response = await api.post('/login', { email, password });
        const { access_token } = response.data;

        await AsyncStorage.setItem('token', access_token); // Guardamos el token en AsyncStorage
        return response.data;

    } catch (error) {
        console.error('Login error: ', error.response.data);
        throw error;
    }
};

// User data
export const getUserData = async () => {
    try {
        const response = await api.get('/userdata');
        return response.data;
    } catch (error) {
        console.error('Error when getting data: ', error.response.data);
        throw error;
    }
};

//----------------------------------GOAL----------------------------------

// Add goal
export const addGoal = async (goalData) => {
    try {
        const response = await api.post('/goals', goalData);
        return response.data;
    } catch (error) {
        console.error('Error creating goal: ', error.response.data);
        throw error;
    }
};

// Get goals
export const getGoals = async () => {
    try {
        const response = await api.get('/goals');
        return response.data;
    } catch (error) {
        console.error('Error getting goals: ', error.response.data);
        throw error;
    }
};