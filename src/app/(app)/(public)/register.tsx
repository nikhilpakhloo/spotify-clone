import * as React from 'react';
import { Text, View } from 'react-native';
import { getApp } from "@react-native-firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "@react-native-firebase/auth";
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/src/components/ThemedText';
import ThemedButton from '@/src/components/ThemedButton';
import { ThemedTextInput } from '@/src/components/ThemedInputs';

export default function SignUpScreen() {
  const [loading, setLoading] = React.useState(false);
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onSignUpPress= async()=>{
    try {
      setLoading(true)
      const auth = getAuth(getApp())
      await createUserWithEmailAndPassword(auth,emailAddress, password);
      
    } catch (error) {
      if ((error as any).code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if ((error as any).code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
      
    }
    setLoading(false)

  }



  return (
    <SafeAreaView className="flex-1 px-6 justify-center bg-white dark:bg-black">
      

        <View className="w-full gap-5">
          <ThemedText type="title" className="text-center">Create account</ThemedText>


          <ThemedTextInput
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Enter email"
            onChangeText={setEmailAddress}
          />
          <ThemedTextInput
            value={password}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={setPassword}
          />
          <ThemedButton
            title="Continue"
            onPress={onSignUpPress}
            loading={loading}
            disabled={!emailAddress || !password}
            className="bg-green-600 rounded-xl py-4"
            textClassName="text-white text-lg font-bold text-center"
          />
        </View>

        <View className="flex-row mt-6 justify-center ">
          <Text className="text-gray-600 dark:text-gray-300 mr-2">Already have an account?</Text>
          <Link href="/login" replace>
            <Text className="text-green-600 font-semibold">Log in</Text>
          </Link>
        </View>

    </SafeAreaView>
  );
}
