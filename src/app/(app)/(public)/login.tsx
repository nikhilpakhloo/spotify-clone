import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '@/src/components/Button';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import BackButton from '@/src/components/BackButton';
import { useSpotifyAuth } from '@/src/hooks/useSpotifyAuth';
import { useGoogleAuth } from '@/src/hooks/useGoogleAuth';
export default function Login() {
  const [googleLoading, setGoogleLoading] = useState(false);
  
  const {googleAuth} = useGoogleAuth();
  const { request, promptAsync } = useSpotifyAuth();
  const handleSpotifyAuth = async () => {
    if (request) {
      try {
        const result = await promptAsync();
     
        if (result.type === 'success') {
          console.log('Spotify auth succeeded');
        } else {
          console.log('Spotify auth cancelled or failed');
        }
      } catch (error) {
        console.error('Error during Spotify authentication:', error);
      }
    } else {
      console.log('Auth request is not ready.');
    }
  };


  const handleGoogleAuth = async () => {
    setGoogleLoading(true);
    try {
      await googleAuth();
    } catch (error) {
      console.error('Google Authentication Error:', error);
    } finally {
      setGoogleLoading(false);
    }
  };


  //   setSpotifyLoading(true);
  //   try {
  //     const accessToken = await spotifyAuth();

  //     if (accessToken) {
  //       console.log('Successfully authenticated! Token:', accessToken);
  //     } else {
  //       console.log('Authentication failed or was canceled.');
  //     }
  //   } catch (error) {
  //     console.error('Error during Spotify authentication:', error);
  //   } finally {
  //     setSpotifyLoading(false);
  //   }
  // };

  return (
    <>
      <View className="flex-1 bg-primary justify-center items-center">
        <View className="absolute top-14 left-5 z-10">
          <BackButton />
        </View>

        <View className="flex-1 justify-center items-center pt-12">
          <Image
            source={require('@/src/assets/images/spotify2.png')}
            className="w-20 h-20 mb-6"
            style={{ tintColor: '#fff' }}
          />
          <Text className="text-primaryText text-4xl font-bold text-center">
            Log in to Spotify
          </Text>
        </View>

        <View className="mb-10 w-[90%] gap-3">
          <Button
            className="bg-primaryButton p-4 rounded-full w-full"
            text="Sign in with Spotify"
            textStyle="text-black font-semibold text-lg text-center"
            icon={<FontAwesome name="spotify" size={25} color="black" />}
            onPress={handleSpotifyAuth}
          />

          <Link href="/phone" asChild>
            <Button
              className="bg-transparent p-4 border-[1px] border-white rounded-full w-full"
              text="Continue with number"
              textStyle="text-white font-semibold text-lg text-center"
              icon={<Ionicons name="phone-portrait-outline" size={25} color="white" />}
            />
          </Link>

          <Button
            className="bg-transparent p-4 border-[1px] border-white rounded-full w-full"
            text="Continue with Google"
            textStyle="text-white font-semibold text-lg text-center"
            loading={googleLoading}
            onPress={handleGoogleAuth}
            icon={<Ionicons name="logo-google" size={25} color="white" />}
          />
        </View>

        <View className="mb-10 gap-3">
          <Text className="text-white text-lg text-center">Don't have an account?</Text>

          <Link href="/register" className="text-white text-lg text-center">
            Sign up
          </Link>
        </View>
      </View>


    </>
  );
}
