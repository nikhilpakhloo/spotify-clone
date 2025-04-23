import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';

type ButtonProps = {
  className: string;
  text: string;
  textStyle?: string;
  onPress: () => void;
  icon?: React.ReactNode;
};

export default function Button({
  className,
  text,
  textStyle = 'text-white text-lg text-center',
  onPress,
  icon,
}: ButtonProps) {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  return (
    <Pressable
      className={className}
      onPress={onPress}
      onPressIn={() => {
        setScale(0.95);
        setOpacity(0.7);
      }}
      onPressOut={() => {
        setScale(1);
        setOpacity(1);
      }}
      style={{
        transform: [{ scale }],
        opacity,
      }}
    >
      <View className="relative items-center justify-center">
        {icon &&
          <View className="absolute left-4">
            {icon}
          </View>}

        <Text className={textStyle}>{text}</Text>
      </View>
    </Pressable>
  );
}
