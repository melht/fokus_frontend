import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Button, Alert } from 'react-native';
import { loginUser } from './Auth';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    console.log("Removing token...");
    await AsyncStorage.removeItem('token'); // Limpia cualquier token existente
    console.log("Token removed");


    console.log("Login button pressed");
    try {
      console.log("Attempting login...");
      const response = await loginUser(email, password);
      Alert.alert('Successful login ', 'Welcome');
      navigation.navigate('Goals');

    } catch (error) {
      Alert.alert('Error', 'Wrong credentials');
    }
  }


  return (
    <ImageBackground source={require('../assets/5.png')} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter email" 
          placeholderTextColor="#aaa" 
          value={email} 
          onChangeText={setEmail}/>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="#aaa"
          value={password} 
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace('Home')}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
    marginHorizontal:10
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  }
});
