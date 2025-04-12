import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  View,
} from 'react-native';

type ThemedButtonProps = TouchableOpacityProps & {
  title: string;
  loading?: boolean;
  className?: string;
  textClassName?: string;
  spinnerColor?: string;
};

export default function ThemedButton({
  title,
  loading = false,
  className = '',
  textClassName = '',
  spinnerColor = 'white',
  disabled,
  ...props
}: ThemedButtonProps) {
  const defaultButtonClasses =
    'bg-light-primary rounded-md py-3 mt-2 disabled:opacity-50 dark:bg-dark-primary';
  const defaultTextClasses =
    'text-light-primaryText text-center font-semibold text-base dark:text-dark-secondaryText';

  return (
    <TouchableOpacity
      className={`${defaultButtonClasses} ${className}`}
      activeOpacity={0.8}
      disabled={loading || disabled}
      {...props}
    >
      <View className="flex-row justify-center items-center">
        {loading ? (
          <ActivityIndicator size="small" color={spinnerColor} />
        ) : (
          <Text className={`${defaultTextClasses} ${textClassName}`}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
