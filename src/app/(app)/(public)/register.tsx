import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import Button from '@/src/components/Button';
import BackButton from '@/src/components/BackButton';
import { configureGoogleSignin, GoogleAuth } from '@/src/lib/googleAuth';

export default function Register() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    configureGoogleSignin()
  }, [])
   const handleGoogleAuth = async () => {
     setLoading(true); 
     try {
       await GoogleAuth();
     } catch (error) {
       console.error("Google Authentication Error:", error);
     } finally {
       setLoading(false); 
     }
   };

  return (
    <View className='flex-1 bg-primary justify-center items-center'>
      <View className='absolute top-14 left-5 z-10'>
        <BackButton />
      </View>

      <View className='flex-1 justify-center items-center pt-12'>
        <Image
          source={require('@/src/assets/images/spotify2.png')}
          className='w-20 h-20 mb-6'
          style={{ tintColor: '#fff' }}
        />
        <Text className='text-primaryText text-4xl font-bold text-center'>
          Signup to start {'\n'} listening.
        </Text>
      </View>

      <View className='mb-10 w-[90%] gap-3'>
      <Button className="bg-primaryButton p-4 rounded-full w-full" text='Sign in with Spotify' textStyle='text-black font-semibold text-lg text-center' icon={<FontAwesome name="spotify" size={25} color="black" />} />


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
          text='Continue with Google'
          onPress={handleGoogleAuth}
          textStyle='text-white font-semibold text-lg text-center'
          icon={<Ionicons name="logo-google" size={25} color="white" />}
          loading={loading}
        />
      </View>

      <View className='mb-10 gap-3'>
        <Text className='text-white text-lg text-center'>Already have an account?</Text>
        <Link href={"/login"} className='text-white text-lg text-center'>Login</Link>
      </View>
    </View>
  );
}
