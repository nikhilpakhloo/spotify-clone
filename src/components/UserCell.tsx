import { Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

type UserCellProps = {
  
  onPress?: () => void;
};


export default function UserCell({

  onPress,
}: UserCellProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center  rounded-full self-start"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image
        source={{uri:"https://picsum.photos/seed/696/3000/2000"}}
        className="w-10 h-10 rounded-full"
       
      />
    </TouchableOpacity>
  );
}
