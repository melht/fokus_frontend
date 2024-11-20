import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function EditProfileScreen({ route, navigation }) {
  const { name: initialName, email, password: initialPassword } = route.params;
  const [name, setName] = useState(initialName);
  const [password, setPassword] = useState(initialPassword);

  const handleSave = () => {
    Alert.alert('Profile Updated', `Username: ${name}\nPassword: ${password}`);
    navigation.goBack(); // Return to the profile screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{email}</Text>
      </View>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      <Button title="Save Changes" color="#4CAF50" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

