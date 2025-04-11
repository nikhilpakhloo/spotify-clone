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
    default: 'text-[16px] leading-[24px] text-black dark:text-white',
    defaultSemiBold: 'text-[16px] leading-[24px] font-semibold text-black dark:text-white',
    title: 'text-[32px] font-bold leading-[32px] text-black dark:text-white',
    subtitle: 'text-[20px] font-bold text-black dark:text-white',
    link: 'text-[16px] leading-[30px] text-[#0a7ea4] underline',
  };

  return (
    <Text className={`${typeClasses[type]} ${className}`} {...rest} />
  );
}
