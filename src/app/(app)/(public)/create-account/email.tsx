import { View, Text, TextInput } from 'react-native'
import React from 'react'
import BackButton from '@/src/components/BackButton'
import Button from '@/src/components/Button'
import { router } from 'expo-router'

export default function Email() {

  const handleEmailSignup=()=>{
    router.navigate("/create-account/password")

  }
  return (
    <View className='flex-1 bg-primary items-start px-6'>
      <View className='absolute top-14 left-5 z-10 '>
        <BackButton />
      </View>

      <Text className='text-white text-4xl font-semibold mt-32'>
        What's your email address?
      </Text>

      <TextInput
        placeholder='Enter your email'
        placeholderTextColor='#ccc'
        keyboardType='email-address'
        className='w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 mt-10'
      />
      <View className='flex-row justify-center w-full mt-10'>


      <Button text='Next' className='bg-primaryButton p-3 w-[30%] rounded-full self-center' onPress={handleEmailSignup}/>
      </View>
    </View>
  )
}
