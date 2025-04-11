import { TextInput, TextInputProps } from 'react-native';
import React from 'react';

export type ThemedTextInputProps = TextInputProps & {
  type?: 'default' | 'underline' | 'rounded';
  className?: string;
};

export function ThemedTextInput({
  className = '',
  type = 'default',
  ...rest
}: ThemedTextInputProps) {
  const baseClasses = 'text-[16px] w-full';
  const typeClasses = {
    default: 'border rounded-md px-3 py-2',
    underline: 'border-b px-3 py-2',
    rounded: 'border rounded-full px-4 py-3',
  };

  const colorClasses =
    'bg-white text-black border-gray-300 placeholder:text-gray-400 ' +
    'dark:bg-black dark:text-white dark:border-gray-600 dark:placeholder:text-gray-500';

  return (
    <TextInput
      className={`${baseClasses} ${typeClasses[type]} ${colorClasses} ${className}`}
      {...rest}
    />
  );
}
