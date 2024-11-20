import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CustomHeader({ title, onProfilePress }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity onPress={onProfilePress} style={styles.profileButton}>
          <Text style={styles.profileText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#007BFF', 
  },
  headerContainer: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: '#0056b3',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  profileText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

