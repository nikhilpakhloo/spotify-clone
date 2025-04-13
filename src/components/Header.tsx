import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserCell from './UserCell';
import { SignOutButton } from './SignOutButton';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const {user} = useAuth();

  const handlePress = () => {
    console.log('User pressed');
  };

  return (
    <SafeAreaView className="bg-light-primary dark:bg-dark-primary rounded-b-xl px-6 py-5 shadow-md flex-row justify-between items-center">
      {user && (
        <UserCell
          /** can pass avatar here */
          // avatarUrl={}
          onPress={handlePress}
        />
      )}
      <SignOutButton />
    </SafeAreaView>
  );
}
