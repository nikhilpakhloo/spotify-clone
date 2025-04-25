import { View } from 'react-native'
import React from 'react'
import BackButton from '@/src/components/BackButton'

export default function Profile() {
    return (
        <View className='flex-1 justify-center items-center bg-primary'>
            <View className='absolute top-14 left-5 z-10'>
                <BackButton />
            </View>
        </View>
    )
}