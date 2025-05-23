import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import UserCell from './UserCell';
import Divider from './Divider';
import { router } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import { LinearGradient } from "expo-linear-gradient";
import { getAuth } from '@react-native-firebase/auth';
import * as SecureStore from 'expo-secure-store';

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { user, setUser } = useAuth();
  const auth = getAuth();
  const [spotifyToken, setSpotifyToken] = useState<string | null>(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }

    // Load Spotify token
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync('spotify_access_token');
      setSpotifyToken(token);
    };

    loadToken();
  }, []);

  const goToProfile = () => {
    router.navigate('/profile');
    props.navigation.closeDrawer();
  };

  const handleLogout = async () => {
    try {
      const currentUser = auth.currentUser;
  
        if (currentUser) {
        await auth.signOut();
      }
  
      await SecureStore.deleteItemAsync('spotify_access_token');
   
  
      setUser(null);
  
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  

  return (
    <LinearGradient colors={["#040306", "#131624"]} className="flex-1 ">
      <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
        <UserCell user={user} onPress={goToProfile} isDrawer={true} {...props} />
        <Divider />
        <View className="absolute bottom-4 left-4">
          <Text className="text-white text-lg" onPress={handleLogout}>
            Sign out
          </Text>
        </View>
      </DrawerContentScrollView>
    </LinearGradient>
  );
}
