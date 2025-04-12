import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserCell from './UserCell';
import { useUser } from '@clerk/clerk-expo';
import { SignOutButton } from './SignOutButton';

export default function Header() {
  const { user } = useUser();

  const handlePress = () => {
    console.log('User pressed');
  };

  return (
    <SafeAreaView className="bg-light-primary dark:bg-dark-primary rounded-b-xl px-6 py-5 shadow-md flex-row justify-between items-center">
      {user && (
        <UserCell
          avatarUrl={user.imageUrl || ''}
          onPress={handlePress}
        />
      )}
      <SignOutButton />
    </SafeAreaView>
  );
}
