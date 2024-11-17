import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import LoginScreen from './screens/LoginScreen';
import GoalsScreen from './screens/GoalsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Hide the header for HomeScreen */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />

        {/* Show headers with back buttons for other screens */}
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="Goals" 
          component={GoalsScreen} 
          options={{ headerShown: false }} // Hide the header for GoalsScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
