import { View } from 'react-native'
import React from 'react'

export default function Divider({
  color = '#D1D5DB', 
  height = 1, 
  marginVertical = 8, 
}) {
  return (
    <View
      style={{
        height,
        backgroundColor: color,
        marginVertical,
      }}
    />
  )
}
