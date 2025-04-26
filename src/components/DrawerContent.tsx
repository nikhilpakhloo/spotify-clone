import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import UserCell from './UserCell'
import { getAuth } from '@react-native-firebase/auth';
import Divider from './Divider';
import { router } from 'expo-router';


export default function CustomDrawerContent(props: DrawerContentComponentProps) {
    const [user, setUser] = useState<any>(null);
    const auth = getAuth();
    useEffect(() => {
        const currentUser = auth.currentUser;

        if (currentUser) {
            setUser(currentUser);
        }
    }, []);
    const goToProfile = () => {
        router.navigate("/profile")
        props.navigation.closeDrawer()
    }
    
      const handleLogout = async () => {
        try {
          await auth.signOut();
          setUser(null);
        } catch (error) {
          console.error("Logout error:", error);
        }
      };

    return (
        <DrawerContentScrollView contentContainerStyle={{flex:1}} className=''>
            <UserCell user={user}  onPress={goToProfile} isDrawer={true} {...props} />
            <Divider />
            <View className='absolute bottom-4 left-4'>
                <Text className='text-white' onPress={handleLogout}>Sign out</Text>

            </View>
        </DrawerContentScrollView>
    )
}