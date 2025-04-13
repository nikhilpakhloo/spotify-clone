/**
 * _layout.tsx
 *
 * This is the root layout component for the Expo Router application.
 * It sets up the application's providers, theme, and initial loading state.
 * The file serves as the entry point for the app's navigation structure.
 */
import { Slot } from 'expo-router';
import 'react-native-reanimated';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import "../../global.css";
import { AuthProvider } from '../context/AuthContext';





// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  fade:true,
})

/**
 * InitialLayout component that handles the initial loading state
 *
 * This component checks if the authentication state has been initialized.
 * If not, it displays a loading spinner. Once initialized, it renders the
 * child routes using Expo Router's Slot component.
 *
 * @returns Loading indicator or child routes based on auth initialization state
 */
const InitialLayout = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
 

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
      SplashScreen.hideAsync();
    });

    return unsubscribe;
  }, []);
  return <Slot />;
};


const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
 
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
              <StatusBar style="auto" />
              <InitialLayout />
          </ThemeProvider>
          </AuthProvider>            
      </GestureHandlerRootView>

  );
};

export default RootLayout;