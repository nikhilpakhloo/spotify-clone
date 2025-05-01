import React, { useState } from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import Button from '@/src/components/Button';
import BackButton from '@/src/components/BackButton';
import { useGoogleAuth } from '@/src/hooks/useGoogleAuth';
import { useSpotifyAuth } from '@/src/hooks/useSpotifyAuth';

export default function Register() {
  const [googleLoading, setGoogleLoading] = useState(false);
  const { googleAuth } = useGoogleAuth();
  const { request, promptAsync } = useSpotifyAuth();

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
      } finally {
      }
    } else {
      Alert.alert('Error', 'Spotify authentication is not ready.');
    }
  };

  return (
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
          Signup to start {'\n'} listening.
        </Text>
      </View>

      <View className="mb-10 w-[90%] gap-3">
        <Button
          className="bg-primaryButton p-4 rounded-full w-full"
          text="Sign up with Spotify"
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
          onPress={handleGoogleAuth}
          textStyle="text-white font-semibold text-lg text-center"
          icon={<Ionicons name="logo-google" size={25} color="white" />}
          loading={googleLoading}
        />
      </View>

      <View className="mb-10 gap-3">
        <Text className="text-white text-lg text-center">Already have an account?</Text>
        <Link href="/login" className="text-white text-lg text-center">
          Login
        </Link>
      </View>
    </View>
  );
}
