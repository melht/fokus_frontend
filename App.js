import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import LoginScreen from './screens/LoginScreen';
import GoalsScreen from './screens/GoalsScreen';
import TasksScreen from './screens/TasksScreen';
import ProfileScreen from './screens/ProfileScreen'; // Importa la pantalla de perfil
import { TouchableOpacity, Text } from 'react-native'; // Importa TouchableOpacity y Text

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Goals"
          component={GoalsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
                style={{ marginRight: 20 }}
              >
                <Text style={{ fontSize: 16, color: '#007BFF' }}>Profile</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
                style={{ marginRight: 20 }}
              >
                <Text style={{ fontSize: 16, color: '#007BFF' }}>Profile</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
