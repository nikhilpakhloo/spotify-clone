import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import BackButton from '@/src/components/BackButton'
import Button from '@/src/components/Button'
import { Feather } from '@expo/vector-icons'
import { createUserWithEmailAndPassword, getAuth } from '@react-native-firebase/auth'
import { useSelector } from 'react-redux'
import { RootState } from '@/src/store'

export default function Password() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const email = useSelector((state: RootState) => state.onboarding.email)

  const handlePasswordSubmit = async () => {
    if (!password || !email) return

    setLoading(true)

    const auth = getAuth()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className='flex-1 bg-primary items-start px-6'>
      <View className='absolute top-14 left-5 z-10'>
        <BackButton />
      </View>

      <Text className='text-white text-4xl font-semibold mt-32'>
        Create a password
      </Text>

      <View className='w-full relative mt-10'>
        <TextInput
          placeholder='Enter your password'
          placeholderTextColor='#ccc'
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          className='bg-white/10 text-white px-4 py-3 pr-12 rounded-xl border border-white/20'
        />
        <Pressable
          className='absolute right-4 top-4'
          onPress={() => setShowPassword(prev => !prev)}
        >
          <Feather
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color="#ccc"
          />
        </Pressable>
      </View>

      <View className='flex-row justify-center w-full mt-10 relative'>
        <Button
          text={loading ? <ActivityIndicator color="#fff" /> : 'Done'}
          className={`bg-primaryButton p-3 w-[30%] rounded-full self-center ${(!password || loading) ? 'opacity-50' : ''}`}
          onPress={handlePasswordSubmit}
          disabled={!password || loading}
        />
      </View>
    </View>
  )
}
