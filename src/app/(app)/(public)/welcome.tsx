import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native'
import Button from '@/src/components/Button'
import { router } from 'expo-router'

export default function Welcome() {
    const gotoSignUp = ()=>{
        router.navigate("/register")
    }
    const gotoLogin=()=>{
        router.navigate("/login")
    }
    return (
        <View className='flex-1'>
            <LinearGradient
                colors={['#1e1e1e', '#121212', '#000000']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                className='flex-1 items-center justify-between'
            >

                <View className='flex-1 justify-center items-center pt-12'>
                    <Image
                        source={require('@/src/assets/images/spotify2.png')}
                        className='w-24 h-24 mb-6'
                        style={{ tintColor: '#fff' }}
                    />
                    <Text className='text-primaryText text-4xl font-bold text-center'>
                        Millions of songs. {'\n'}Free on Spotify.
                    </Text>
                </View>


                <View className='mb-20 w-[90%]'>
                    <Button className="bg-primaryButton p-4 rounded-full w-full" text='Sign up for free' textStyle='text-black font-semibold text-lg text-center' onPress={gotoSignUp} />
                 
                    <Button
                        className="bg-transparent border-[1px] border-white p-4 rounded-full mt-2 w-full"
                        text='Log in'
                        textStyle='text-white font-semibold text-lg text-center'
                        onPress={gotoLogin}
                    />
                </View>
            </LinearGradient>
        </View>
    )
}
