import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';

type ButtonProps = {
  className: string;
  text: React.ReactNode;
  textStyle?: string;
  onPress: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
};

export default function Button({
  className,
  text,
  textStyle = 'text-white text-lg text-center',
  onPress,
  icon,
  disabled = false,
}: ButtonProps) {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);


  return (
    <Pressable
      className={`${className} ${disabled ? 'opacity-50' : ''}`}
      onPress={onPress}
      onPressIn={() => {
        if (!disabled) {
          setScale(0.95);
          setOpacity(0.7);
        }
      }}
      onPressOut={() => {
        if (!disabled) {
          setScale(1);
          setOpacity(1);
        }
      }}
      style={{
        transform: [{ scale }],
        opacity,
      }}
      disabled={disabled}
    >
      <View className="relative items-center justify-center flex-row">
        {icon && <View className="mr-2">{icon}</View>}
        <Text className={textStyle}>{text}</Text>
      </View>
    </Pressable>
  );
}
