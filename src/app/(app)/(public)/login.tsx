import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/src/components/ThemedText';
import { ThemedTextInput } from '@/src/components/ThemedInputs';
import ThemedButton from '@/src/components/ThemedButton';
import { getAuth } from '@react-native-firebase/auth';
import { getApp } from '@react-native-firebase/app';

export default function SignInScreen() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSignInPress = async () => {
    if (!emailAddress.trim() || !password.trim()) return;

    setLoading(true);
    setError(null);

    try {
       const auth = getAuth(getApp());
       await auth.signInWithEmailAndPassword(emailAddress, password);
    } catch (err: any) {
     
      if (err.code === 'auth/user-not-found') {
        setError('No user found with this email!');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password!');
      } else {
        setError('Something went wrong. Please try again.');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center px-6 bg-white dark:bg-black">
      <View className="w-full items-center mb-8">
        <ThemedText type="title" className="text-3xl">Welcome Back</ThemedText>
        <ThemedText type="subtitle" className="mt-2 text-gray-500 dark:text-gray-400">
          Sign in to your account
        </ThemedText>
      </View>

      <View className="w-full gap-5">
        <ThemedTextInput
          type="default"
          placeholder="Email"
          value={emailAddress}
          onChangeText={setEmailAddress}
          autoCapitalize="none"
        />

        <ThemedTextInput
          type="default"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error && (
          <Text className="text-red-500 text-sm text-center">{error}</Text>
        )}

        <ThemedButton
          title="Sign In"
          onPress={onSignInPress}
          loading={loading}
          disabled={!emailAddress.trim() || !password.trim()}
          className="bg-green-600 rounded-xl py-4"
          textClassName="text-white text-lg font-bold text-center"
        />
      </View>

      <View className="flex-row mt-6">
        <Text className="text-gray-600 dark:text-gray-300 mr-2">Don't have an account?</Text>
        <Link href="/register" replace>
          <Text className="text-green-600 font-semibold">Sign up</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
