import React from 'react';
import { Text, TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  className?: string;
};

export function ThemedText({
  className = '',
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const typeClasses: Record<NonNullable<ThemedTextProps['type']>, string> = {
    default: 'text-light-primaryText dark:text-dark-secondaryText text-[16px] leading-[24px]',
    defaultSemiBold: 'text-light-primaryText dark:text-dark-secondaryText text-[16px] leading-[24px] font-semibold',
    title: 'text-light-primaryText dark:text-dark-secondaryText text-[32px] font-bold leading-[32px]',
    subtitle: 'text-light-primaryText dark:text-dark-secondaryText text-[20px] font-bold',
    link: 'text-light-primary dark:text-dark-primary text-[16px] leading-[30px] underline',
  };

  return (
    <Text className={`${typeClasses[type]} ${className}`} {...rest} />
  );
}
