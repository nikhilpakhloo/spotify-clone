/**
 * _layout.tsx
 *
 * This is the root layout component for the Expo Router application.
 * It sets up the application's providers, theme, and initial loading state.
 * The file serves as the entry point for the app's navigation structure.
 */
import { Slot } from 'expo-router';
import 'react-native-reanimated';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import "../../global.css";
import { AuthProvider } from '../context/AuthContext';
import { getApp } from "@react-native-firebase/app";
import { getAuth } from "@react-native-firebase/auth";
import { PlayerContext } from '../context/PlayerContext';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  fade: true,
})

/**
 * InitialLayout component that handles the initial loading state
 * @returns  child routes based on auth initialization state
 */
const InitialLayout = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const auth = getAuth(getApp());


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
      SplashScreen.hideAsync();
    });

    return unsubscribe;
  }, []);
  return <Slot />;
};


const RootLayout = () => {

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
          <PlayerContext>
          <StatusBar style="auto" />
          <InitialLayout />
          </PlayerContext>
        </AuthProvider>
    </GestureHandlerRootView>

  );
};

export default RootLayout;