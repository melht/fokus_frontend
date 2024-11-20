import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Enter email" />
      <TextInput style={styles.input} placeholder="Enter password" secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Goals')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', padding: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5 },
});