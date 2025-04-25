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

    return (
        <DrawerContentScrollView contentContainerStyle={{}}>
            <UserCell user={user} className='w-14 h-14 rounded-full' onPress={goToProfile} isDrawer={true} {...props} />
            <Divider />
        </DrawerContentScrollView>
    )
}