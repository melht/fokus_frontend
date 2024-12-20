import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { getGoals } from './Auth';

export default function GoalsScreen() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  // func delete goal
  const handleDeleteGoal = (id) => {
    Alert.alert('Delete Goal', 'Are you sure you want to delete this goal?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: () => setGoals(goals.filter((goal) => goal.id !== id)) },
    ]);
  };

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const data = await getGoals();  // Llama a la función que trae los objetivos del backend
        setGoals(data);  // Guarda los objetivos en el estado
      } catch (error) {
        console.error('Error fetching goals:', error);
        Alert.alert('Error', 'Could not fetch goals.');
      } finally {
        setLoading(false);  // Detiene el indicador de carga cuando la solicitud haya terminado
      }
    };

    fetchGoals();
  }, []);

  
  const renderGoalCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardCategory}>Category: {item.category}</Text>
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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

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