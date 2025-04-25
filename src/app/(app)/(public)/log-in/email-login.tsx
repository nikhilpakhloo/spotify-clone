import { View, Text, TextInput, ActivityIndicator, Pressable } from 'react-native'
import React, { useState } from 'react'
import BackButton from '@/src/components/BackButton'
import Button from '@/src/components/Button'
import { router } from 'expo-router'
import { useDispatch } from 'react-redux'
import { setEmail, nextStep, setUid } from '@/src/store/slices/onboardingSlice'
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth'
import { Feather } from '@expo/vector-icons'


export default function EmailLogin() {
  const [email, setEmailInput] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()
  const auth = getAuth()

  const handleEmailSignin = async () => {
    if (!email.trim() || !password.trim()) return

    setLoading(true)
    setError(null)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      dispatch(setEmail(user.email || ''))
      dispatch(setUid(user.uid))
      dispatch(nextStep())


    } catch (err: any) {
      if (err.code === 'auth/user-not-found') {
        setError('No user found with this email.')
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password.')
      } else {
        setError('Something went wrong. Please try again.')
      }
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className="flex-1 bg-primary px-6 justify-start">
      <View className="absolute top-14 left-5 z-10">
        <BackButton />
      </View>

      <Text className="text-white text-2xl font-semibold mb-4 mt-32">
        Email or Username
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmailInput}
        placeholder="Enter your email"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
        autoCapitalize="none"
        className="w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20"
      />

      <Text className="text-white text-2xl font-semibold mt-5 mb-4">
        Password
      </Text>
      <View className='w-full relative '>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor="#ccc"
          secureTextEntry={!showPassword}
          className="w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20"
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

      {error && (
        <Text className="text-red-500 text-sm text-center mt-4">{error}</Text>
      )}

      <View className="flex-row justify-center w-full mt-10">
        <Button
          text={loading ? <ActivityIndicator color={"white"} /> : 'Log in'}
          className="bg-primaryButton p-3 w-[40%] rounded-full self-center"
          onPress={handleEmailSignin}
          disabled={loading || !email.trim() || !password.trim()}
        />
      </View>
    </View>
  )
}
