import api from './Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

//----------------------------------USER----------------------------------
// Register
export const registerUser = async (name, email, password) => {
    try {
        console.log("Sign In try");
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Password: ", password);

        const response = await api.post('/register', {name, email, password});
        return response.data;

    } catch (error) {
        console.error('Registration error: ', error.response.data);
        throw error;
    }
};

// Login
export const loginUser = async (email, password) => {
    try {

        console.log("login try");
        console.log("Email: ", email);
        console.log("Password: ", password);
        

        const response = await api.post('/login', { email, password });
        const { token } = response.data;
        console.log("Token: ", token);

        await AsyncStorage.setItem('token', token); // Guardamos el token en AsyncStorage
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