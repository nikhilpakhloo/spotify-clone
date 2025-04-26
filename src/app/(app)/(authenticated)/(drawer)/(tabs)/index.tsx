import React, { useState } from 'react';
import { Button } from 'react-native';
import { getAuth } from '@react-native-firebase/auth';
import Header from '@/src/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Logout() {
  const [user, setUser] = useState<any>(null);
  const auth = getAuth();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <SafeAreaView className="flex-1  bg-primary">
      <Header/>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
}
