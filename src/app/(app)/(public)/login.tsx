import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '@/src/components/Button'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, router } from 'expo-router';
import BackButton from '@/src/components/BackButton';

export default function Login() {
  const ContinueWithMail = () => {
    router.navigate("/(app)/(public)/log-in/email-login")

  }
  const ContinueWithPhone = () => {

  }
  const ContinueWithGoogle = () => {

  }
  const ContinueWithFb = () => {

  }
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
          Log in to Spotify
        </Text>
      </View>
      <View className='mb-10 w-[90%] gap-3'>
        <Button className="bg-primaryButton p-4 rounded-full w-full" text='Continue with mail' onPress={ContinueWithMail} textStyle='text-black font-semibold text-lg text-center' icon={<Ionicons name="mail-outline" size={25} color="black" />} />
        <Button className="bg-transparent p-4 border-[1px] border-white rounded-full w-full" text='Continue with number' onPress={ContinueWithPhone} textStyle='text-white font-semibold text-lg text-center' icon={<Ionicons name="phone-portrait-outline" size={25} color="white" />} />
        <Button className="bg-transparent p-4 border-[1px] border-white rounded-full w-full" text='Continue with Google' onPress={ContinueWithGoogle} textStyle='text-white font-semibold text-lg text-center' icon={<Ionicons name="logo-google" size={25} color="white" />} />
        <Button className="bg-transparent p-4 border-[1px] border-white rounded-full w-full" text='Continue with Facebook' onPress={ContinueWithFb} textStyle='text-white font-semibold text-lg text-center' icon={<Ionicons name="logo-facebook" size={25} color="white" />} />
      </View>
      <View className='mb-10 gap-3'>
        <Text  className='text-white text-lg text-center'>Don't have an account?</Text>

        <Link href={"/register"} className='text-white text-lg text-center'>Sign up</Link>
      </View>
    </View>

  )
}