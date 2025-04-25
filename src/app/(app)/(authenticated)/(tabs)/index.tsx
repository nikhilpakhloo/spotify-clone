import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { getAuth } from '@react-native-firebase/auth';

export default function Logout() {
  const [user, setUser] = useState<any>(null);
  const auth = getAuth();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-primary">
      {user ? (
        <>
          <Text className="text-2xl font-semibold text-white">Hello, {user.displayName || user.email}!</Text>
          <Text className="text-xl font-semibold text-white mb-4">Are you sure you want to logout?</Text>
        </>
      ) : (
        <Text className="text-xl font-semibold text-white">No user is logged in</Text>
      )}

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
