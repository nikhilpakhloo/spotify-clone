import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

type Props = {
  text: string;
  onPress: () => void;
  className?: string;
  textStyle?: string;
};

export default function Chips({ text, onPress, className = "", textStyle = "" }: Props) {
  return (
    <TouchableOpacity onPress={onPress} className={`  ${className}`}>
      <Text className={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}
