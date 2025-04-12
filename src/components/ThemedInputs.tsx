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
    'bg-light-background text-light-primaryText ' +
    'border-light-primary placeholder:text-light-placeholder ' + 
    'dark:bg-dark-background dark:text-dark-secondaryText ' +
    'dark:border-dark-primary dark:placeholder:text-dark-placeholder';

  return (
    <TextInput
      className={`${baseClasses} ${typeClasses[type]} ${colorClasses} ${className}`}
      {...rest}
    />
  );
}
