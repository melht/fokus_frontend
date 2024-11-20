import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/5.png')} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="Enter email" placeholderTextColor="#aaa" />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Goals')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
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
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
