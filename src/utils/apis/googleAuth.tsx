import { GoogleSignin, isErrorWithCode, statusCodes } from '@react-native-google-signin/google-signin';
import { getAuth, GoogleAuthProvider } from '@react-native-firebase/auth';
import { getApp } from '@react-native-firebase/app';
import Constants from 'expo-constants';
import { useEffect } from 'react';

const configureGoogleSignin = () => {
  const webClientId = Constants.expoConfig?.extra?.googleWebClientId;
  GoogleSignin.configure({
    webClientId: webClientId,
    offlineAccess: true,
  });
};

const GoogleAuth = async () => {
  const auth = getAuth(getApp());


  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    await GoogleSignin.signOut(); 
    await GoogleSignin.signIn(); 
    const { idToken } = await GoogleSignin.getTokens();
    
    if (!idToken) {
      throw new Error('No ID token found');
    }

    const googleCredential = GoogleAuthProvider.credential(idToken);
    await auth.signInWithCredential(googleCredential); 

  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          console.log('Sign-in in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log('Play services not available');
          break;
        default:
          console.error('Google Sign-In Error:', error.message || error);
      }
    } else {
      console.error('Unexpected Error:', error);
    }
  }
};

export { GoogleAuth, configureGoogleSignin };
