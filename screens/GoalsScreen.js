import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const initialGoals = [
  {
    id: '1',
    title: 'Learn React Native',
    description: 'Build a mobile app using React Native framework.',
    category: 'Education',
  },
  {
    id: '2',
    title: 'Exercise Regularly',
    description: 'Go to the gym 4 times a week to improve fitness.',
    category: 'Health',
  },
  {
    id: '3',
    title: 'Read More Books',
    description: 'Finish reading 5 books by the end of the year.',
    category: 'Personal Development',
  },
];

export default function GoalsScreen() {
  const [goals, setGoals] = useState(initialGoals);
  const navigation = useNavigation();

  const handleDeleteGoal = (id) => {
    Alert.alert('Delete Goal', 'Are you sure you want to delete this goal?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: () => setGoals(goals.filter((goal) => goal.id !== id)) },
    ]);
  };

  const renderGoalCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardCategory}>Category: {item.category}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tasks', { goal: item })}
        >
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => handleDeleteGoal(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>My Goals</Text>
        <FlatList
          data={goals}
          renderItem={renderGoalCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('CreateGoal')}
        >
          <Text style={styles.createButtonText}>+ Create New Goal</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    marginVertical: 16,
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 8, 
    color: '#333', 
  },
  cardCategory: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonDelete: {
    backgroundColor: '#f44336',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignSelf: 'center',
    marginVertical: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});