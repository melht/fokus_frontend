import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function TasksScreen({ route }) {
  const { goal } = route.params;

  const [tasks, setTasks] = useState([
    { id: '1', name: 'Setup React Native environment', completed: false },
    { id: '2', name: 'Create a basic Hello World app', completed: false },
    { id: '3', name: 'Learn navigation in React Native', completed: false },
    { id: '4', name: 'Connect app to an API', completed: false },
  ]);

  const markAsCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const undoCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: false } : task
      )
    );
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskCard}>
      <Text style={[styles.taskName, item.completed && styles.completedTask]}>
        {item.name}
      </Text>

      {/* If the task is not completed, show the 'Mark as Done' button */}
      {!item.completed && (
        <TouchableOpacity
          style={styles.completeButton}
          onPress={() => markAsCompleted(item.id)}
        >
          <Text style={styles.completeButtonText}>Done</Text>
        </TouchableOpacity>
      )}

      {/* If the task is completed, show the 'Undone' button */}
      {item.completed && (
        <TouchableOpacity
          style={styles.undoneButton}
          onPress={() => undoCompletion(item.id)}
        >
          <Text style={styles.undoneButtonText}>Undone</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{goal.name} - Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
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
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  taskName: {
    fontSize: 16,
    color: '#333',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  undoneButton: {
    backgroundColor: '#f44336',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  undoneButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

