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
import { ActivityIndicator, View } from 'react-native';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import * as SplashScreen from 'expo-splash-screen';
import "../../global.css";
import { useEffect } from 'react';



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
  const {isLoaded} = useAuth();
  useEffect(()=>{
    if(isLoaded){
      SplashScreen.hideAsync();
    }

  }, [isLoaded])
  return <Slot />;
};

const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
 
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ClerkProvider tokenCache={tokenCache}>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
              <StatusBar style="auto" />
              <InitialLayout />
          </ThemeProvider>            
        </ClerkProvider>
      </GestureHandlerRootView>

  );
};

export default RootLayout;