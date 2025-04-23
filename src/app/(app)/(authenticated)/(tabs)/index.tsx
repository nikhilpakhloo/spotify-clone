import React from 'react';
import { View, Text, Button } from 'react-native';
import { getAuth } from '@react-native-firebase/auth';


export default function Logout() {
  const auth = getAuth();
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-semibold">Are you sure you want to logout?</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
