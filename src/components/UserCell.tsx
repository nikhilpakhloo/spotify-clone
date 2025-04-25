import { Pressable, Text, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
type User = {
  displayName: string;
  photoURL: string;
};
type UserCellProps = {
  user: User;
  onPress?: () => void;
  className?: string
  isDrawer?: boolean
};

export default function UserCell({ user, onPress, className = "w-10 h-10 rounded-full mr-3", isDrawer = false }: UserCellProps) {
  const navigation = useNavigation();
  const toggledrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }


  return (
    <Pressable
      onPress={onPress || toggledrawer}
      className="flex-row items-center p-3 gap-5   "
    >
      <Image
        source={{ uri: user?.photoURL }}
        className={className}
      />
      {isDrawer &&
        (
          <View>
            <Text className=" font-medium text-2xl text-white">
              {user?.displayName}
            </Text>
            <Text className="text-sm font-medium text-secondaryText">
              View Profile
            </Text>
          </View>
        )
      }

    </Pressable>
  );
}
