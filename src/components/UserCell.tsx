import { Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

type UserCellProps = {
  avatarUrl: string;
  onPress?: () => void;
};


export default function UserCell({
  avatarUrl ,
  onPress,
}: UserCellProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center  rounded-full self-start"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image
        source={{uri:avatarUrl}}
        className="w-10 h-10 rounded-full"
       
      />
    </TouchableOpacity>
  );
}
