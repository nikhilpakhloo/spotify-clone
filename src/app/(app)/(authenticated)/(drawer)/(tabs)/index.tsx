import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { getAuth } from '@react-native-firebase/auth';
import Header from '@/src/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Logout() {
  const [user, setUser] = useState<any>(null);
  const auth = getAuth();


  // useEffect(() => {
  //   const currentUser = auth.currentUser;

  //   if (currentUser) {
  //     setUser(currentUser);
  //   }
  // }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  // {user ? (
  //   <>
  //     <Text className="text-2xl font-semibold text-white">Hello, {user.displayName || user.email || user.phoneNumber}!</Text>
  //     <Text className="text-xl font-semibold text-white mb-4">Are you sure you want to logout?</Text>
  //   </>
  // ) : (
  //   <Text className="text-xl font-semibold text-white">No user is logged in</Text>
  // )}

  // <Button title="Logout" onPress={handleLogout} />

  return (
    <SafeAreaView className="flex-1  bg-primary">
      <Header/>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
}
