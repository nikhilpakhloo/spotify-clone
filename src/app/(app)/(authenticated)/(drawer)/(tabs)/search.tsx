import {  Text } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Search() {
  return (
    <LinearGradient colors={["#040306", "#131624"]} className="flex-1 ">
      <SafeAreaView>
      <Text className='text-white'>Search</Text>
      </SafeAreaView>
    </LinearGradient>
  )
}