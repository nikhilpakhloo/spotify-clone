import * as React from 'react';
import { Text, View } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/src/components/ThemedText';
import ThemedButton from '@/src/components/ThemedButton';
import { ThemedTextInput } from '@/src/components/ThemedInputs';

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState('');

  const onSignUpPress = async () => {
    if (!isLoaded || !emailAddress || !password) return;

    setLoading(true);
    try {
      await signUp.create({ emailAddress, password });
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setLoading(false);
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded || !code) return;

    setLoading(true);
    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({ code });
      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace('/');
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 px-6 justify-center bg-white dark:bg-black">
 
      {pendingVerification ? (
        <View className="gap-5">
          <ThemedText type="title" className="text-center ">Verify your email</ThemedText>
          <ThemedTextInput
            value={code}
            placeholder="Enter your verification code"
            onChangeText={setCode}
            keyboardType="numeric"
          />
          <ThemedButton
            title="Verify"
            onPress={onVerifyPress}
            loading={loading}
            disabled={!code}
            className="bg-green-600 rounded-xl py-4"
            textClassName="text-white text-lg font-bold text-center"
          />
        </View>
      ) : (
        <>
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
          </>
      
      )}
    </SafeAreaView>
  );
}
