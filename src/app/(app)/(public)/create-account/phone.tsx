import { View, Text } from 'react-native'
import React from 'react'
import BackButton from '@/src/components/BackButton'

export default function Phone() {
  return (
    <View className='flex-1 bg-primary justify-center items-center'>
        <View className='absolute top-14 left-5 z-10'>
          <BackButton />
        </View>
      </View>
  )
}