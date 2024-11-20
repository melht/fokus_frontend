import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TasksScreen({ route }) {
  const { goal } = route.params;

  const [tasks, setTasks] = useState([
    { id: '1', name: 'Setup React Native environment', completed: false },
    { id: '2', name: 'Create a basic Hello World app', completed: false },
    { id: '3', name: 'Learn navigation in React Native', completed: false },
    { id: '4', name: 'Connect app to an API', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') {
      Alert.alert('Error', 'Task name cannot be empty.');
      return;
    }
    const newTaskObj = {
      id: (tasks.length + 1).toString(),
      name: newTask,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
    setNewTask(''); // Limpiar el campo de texto
  };

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
      {!item.completed && (
        <TouchableOpacity
          style={styles.completeButton}
          onPress={() => markAsCompleted(item.id)}
        >
          <Text style={styles.completeButtonText}>Done</Text>
        </TouchableOpacity>
      )}
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
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.goalTitle}>{goal.title}</Text>
          <Text style={styles.goalCategory}>Category: {goal.category}</Text>
          <Text style={styles.goalDescription}>{goal.description}</Text>
        </View>
        <FlatList
          data={tasks}
          renderItem={renderTaskItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder="Enter new task"
            value={newTask}
            onChangeText={setNewTask}
          />
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => navigation.navigate('CreateTask')}>
          <Text style={styles.createButtonText}>+ Add Task</Text>
      </TouchableOpacity>
      
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  goalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  goalCategory: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  goalDescription: {
    fontSize: 14,
    color: '#555',
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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

