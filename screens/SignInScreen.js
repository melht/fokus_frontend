import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function SignInScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/5.png')} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} placeholder="Enter email" placeholderTextColor="#aaa" />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
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

