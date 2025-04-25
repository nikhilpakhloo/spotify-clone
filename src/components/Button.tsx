import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import React, { useState, forwardRef } from 'react';

type ButtonProps = {
  className: string;
  text: React.ReactNode;
  textStyle?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?:boolean
};

// ✅ Forwarding the ref to <Pressable>
const Button = forwardRef<any, ButtonProps>(
  ({ className, text, textStyle = 'text-white text-lg text-center', onPress, icon, disabled = false, loading }, ref) => {
    const [scale, setScale] = useState(1);
    const [opacity, setOpacity] = useState(1);

    return (
      <Pressable
        ref={ref}
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
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <>
              {icon && <View className="mr-2">{icon}</View>}
              <Text className={textStyle}>{text}</Text>
            </>
          )}
        </View>
      </Pressable>
    );
  }
);

export default Button;
