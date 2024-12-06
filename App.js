import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import LoginScreen from './screens/LoginScreen';
import GoalsScreen from './screens/GoalsScreen';
import TasksScreen from './screens/TasksScreen';
import ProfileScreen from './screens/ProfileScreen';
import CustomHeader from './components/CustomHeader';
import EditProfileScreen from './screens/EditProfileScreen';


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
        

        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>

        <Stack.Screen
          name="Goals"
          component={GoalsScreen}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader
                title="My Goals"
                onProfilePress={() => navigation.navigate('Profile')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
          options={({ navigation, route }) => ({
            header: () => (
              <CustomHeader
                title={route.params.goal.name}
                onProfilePress={() => navigation.navigate('Profile')}
              />
            ),
          })}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
