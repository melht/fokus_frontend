import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Button, Alert } from 'react-native';
import { registerUser } from './Auth';


export default function SignInScreen({ navigation }) {

  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');

  const handleSignIn = async() => {
    console.log("Sign in button pressed");
    try {
      const response = await registerUser(name, email, password);
      Alert.alert('Successful sign in ', 'Proceed with log in');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Wrong info');
    }
  }

  return (
    <ImageBackground source={require('../assets/5.png')} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter name" 
          placeholderTextColor="#aaa" 
          value={name} 
          onChangeText={setName} />

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
          secureTextEntry/>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSignIn}
          >
            <Text style={styles.buttonText}>Sign In</Text>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

