import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserCell from './UserCell'
import { getAuth } from '@react-native-firebase/auth';

export default function Header() {
    const [user, setUser] = useState<any>(null);
     useEffect(() => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);
    const auth = getAuth();
  
    return (
        <View className='flex-row'>
            <UserCell  user={user} />
        </View>
    )
}