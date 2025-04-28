import {  Text } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '@/src/components/BackButton';


export default function Profile() {
  return (
    <LinearGradient colors={["#040306", "#131624"]} className="flex-1 ">
      <SafeAreaView>
        <BackButton/>
      <Text className='text-white'>Profile</Text>
      </SafeAreaView>
    </LinearGradient>
  )
}