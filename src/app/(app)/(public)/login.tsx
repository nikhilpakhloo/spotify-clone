import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '@/src/components/Button';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import BackButton from '@/src/components/BackButton';
import { configureGoogleSignin, GoogleAuth } from '@/src/lib/googleAuth';
import { spotifyAuth } from '@/src/lib/spotifyAuth';


export default function Login() {
  const [googleLoading, setGoogleLoading] = useState(false);
  const [spotifyLoading, setSpotifyLoading] = useState(false);
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);

  useEffect(() => {
    configureGoogleSignin();
  }, []);

  const handleGoogleAuth = async () => {
    setGoogleLoading(true);
    try {
      await GoogleAuth();
    } catch (error) {
      console.error('Google Authentication Error:', error);
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSpotifyAuth = async () => {
    setSpotifyLoading(true);
    try {
      const accessToken = await spotifyAuth();

      if (accessToken) {
        console.log('Successfully authenticated! Token:', accessToken);
      } else {
        console.log('Authentication failed or was canceled.');
      }
    } catch (error) {
      console.error('Error during Spotify authentication:', error);
    } finally {
      setSpotifyLoading(false);
    }
  };

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
            loading={spotifyLoading}
            onPress={() => setShowSpotifyModal(true)}
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

      <Modal
        transparent
        visible={showSpotifyModal}
        animationType="slide"
        onRequestClose={() => setShowSpotifyModal(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/60">
          <View className="bg-white p-6 rounded-2xl w-80 items-center">
            <Image
              source={require('@/src/assets/images/spotify2.png')}
              className="w-16 h-16 mb-4"
            />
            <Text className="text-lg font-semibold mb-4 text-center">
              Connect your Spotify Account
            </Text>

            <Button
              className="bg-primaryButton p-3 rounded-full w-full mb-3"
              text="Continue with Spotify"
              textStyle="text-black font-semibold text-center"
              loading={spotifyLoading}
              icon={<FontAwesome name="spotify" size={20} color="black" />}
              onPress={async () => {
                setShowSpotifyModal(false);
                await handleSpotifyAuth();
              }}
            />

            <TouchableOpacity onPress={() => setShowSpotifyModal(false)}>
              <Text className="text-gray-600">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
