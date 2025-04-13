
import { Text, TouchableOpacity } from 'react-native'
import { getApp } from '@react-native-firebase/app';
import { getAuth } from '@react-native-firebase/auth';

export const SignOutButton = () => {

  const handleSignOut = async () => {
    try {
       const auth = getAuth(getApp());
      await auth.signOut()
      .then(()=>console.log("Logged Out"))
    } catch (err) {
      console.error("Error signing out", err)
    }
  }

  return (
    <TouchableOpacity onPress={handleSignOut}>
      <Text className='text-light-primaryText dark:text-dark-secondaryText'>Sign out</Text>
    </TouchableOpacity>
  )
}