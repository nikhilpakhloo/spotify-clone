import { View, Text, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import BackButton from '@/src/components/BackButton'
import Button from '@/src/components/Button'
import { router } from 'expo-router'
import { useDispatch } from 'react-redux'
import { setEmail, nextStep, setUid } from '@/src/store/slices/onboardingSlice'

export default function Email() {
  const dispatch = useDispatch()
  const [email, setEmailInput] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const generateUid = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleEmailSignup = async () => {
    if (!email || !isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    setLoading(true)

    try {
      const uid = generateUid()
      dispatch(setEmail(email))
      dispatch(setUid(uid))
      dispatch(nextStep())
      router.navigate('/create-account/password')
    } catch (e) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
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
        value={email}
        onChangeText={setEmailInput}
        placeholder='Enter your email'
        placeholderTextColor='#ccc'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        className='w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 mt-10'
      />

      {error ? (
        <Text className='text-red-400 mt-2'>
          {error}
        </Text>
      ) : null}

      <View className='flex-row justify-center w-full mt-10'>
        <Button
          text={loading ? <ActivityIndicator color='#fff'/> : 'Next'}
          className={`bg-primaryButton p-3 w-[30%] rounded-full self-center ${(!email || !isValidEmail(email) || loading) ? 'opacity-50' : ''}`}
          onPress={handleEmailSignup}
          disabled={!email || !isValidEmail(email) || loading}
        />
      </View>
    </View>
  )
}
