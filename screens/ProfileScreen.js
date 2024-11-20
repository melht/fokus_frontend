import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const password = 'password123';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{email}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Username</Text>
        <Text style={styles.value}>{name}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Password</Text>
        <Text style={styles.value}>{'*'.repeat(password.length)}</Text>
      </View>

      <Button
        title="Edit Profile"
        color="#4CAF50"
        onPress={() => navigation.navigate('EditProfile', { name, email, password })}
      />
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
    marginBottom: 30,
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
});

