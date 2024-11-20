import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function SignInScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/5.png')} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} placeholder="Enter email" />
        <TextInput style={styles.input} placeholder="Enter password" secureTextEntry />
        <Button title="Sign Up" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', padding: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5 },
});