import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const initialGoals = [
  {
    id: '1',
    name: 'Learn React Native',
    description: 'Build a mobile app using React Native framework.',
    startDate: '2024-01-01',
    endDate: '2024-03-01',
  },
  {
    id: '2',
    name: 'Exercise Regularly',
    description: 'Go to the gym 4 times a week to improve fitness.',
    startDate: '2024-02-01',
    endDate: '2024-06-01',
  },
  {
    id: '3',
    name: 'Read More Books',
    description: 'Finish reading 5 books by the end of the year.',
    startDate: '2024-01-15',
    endDate: '2024-12-15',
  },
];

export default function GoalsScreen() {
  const [goals, setGoals] = useState(initialGoals);

  const renderGoalCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <Text style={styles.cardDates}>
        Start: {item.startDate} | End: {item.endDate}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Goal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => handleDeleteGoal(item.id)}
        >
          <Text style={styles.buttonText}>Delete Goal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleDeleteGoal = (id) => {
    Alert.alert('Delete Goal', 'Are you sure you want to delete this goal?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          setGoals(goals.filter((goal) => goal.id !== id));
        },
      },
    ]);
  };

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
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  cardDates: {
    fontSize: 12,
    color: '#777',
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
});
