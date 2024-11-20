import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon } from 'react-native-heroicons/solid';

export default function GoalsScreen() {
  return (
    <View className="flex-1 relative">
      <Image source={require('../assets/background.png')} className="absolute w-full h-full" />
      <SafeAreaView className="flex-1">
        <View className="flex-row justify-between items-center mx-4">
            <View className="bg-white shadow-md rounded-2x1 p-3">
                <Bars3CenterLeftIcon size="25" stroke="100" color="black" />
            </View>
            <View className="rounded-2x1" style={{backgroundColor: 'rgba(255,255,255,0.7)', pasding: 3}}>
                <Image className="h-12 w-12 rounded-2x1" source={require('../assets/avatar.png')}></Image>
            </View>
        </View>
        <View className="my-12 space-y-2">
            <Text className="mx-4 text-5xl font-medium text-gray-800">Goals</Text>
        </View>
        <View>
            <View className="flex-row flex-1 p-4 bg-white rounded-2xl">
                <MagnifyingGlassIcon stroke={40} color="gray" />
                <TextInput placeholder='Food' value="Search" className="ml-2 text-gray-800" />
            </View>
            <View className="bg-white rounded-2xl p-4">

            </View>
        </View>

      </SafeAreaView>
    </View>
  );
}