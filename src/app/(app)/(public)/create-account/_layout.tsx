
import React from 'react'
import { Stack } from 'expo-router'

export default function CreateLayout() {
  return (
  <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name='email' options={{headerShown:false, title:"Create Account"}}/>
    <Stack.Screen name='password' options={{headerShown:false, title:"Create Account"}}/>
    <Stack.Screen name='phone' options={{headerShown:false, title:"Create Account"}}/>
  </Stack>
  )
}