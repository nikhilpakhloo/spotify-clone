import { Pressable, Text, View } from 'react-native';
import { Image } from 'expo-image'; // Import from expo-image
import React from 'react';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

type User = {
  displayName: string;
  photoURL: string;
  phoneNumber:string
};

type UserCellProps = {
  user: User;
  onPress?: () => void;
  isDrawer?: boolean;
};
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function UserCell({ user, onPress,  isDrawer = false }: UserCellProps) {
  const navigation = useNavigation();
  const toggledrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };


  return (
    <Pressable onPress={onPress || toggledrawer} className="flex-row items-center p-3 gap-5  ">
      <Image
        source={user?.photoURL || "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"} 
        style={[{ width: 40, height: 40, borderRadius: 999 }]}  
        placeholder={{ blurhash }}
        contentFit="cover" 
        transition={300} 
        
      />
      {isDrawer && (
        <View>
          <Text className="font-medium text-2xl text-white">
            Hi,  {user?.displayName || user?.phoneNumber}
          </Text>
          <Text className="text-sm font-medium text-secondaryText">
            View Profile
          </Text>
        </View>
      )}
    </Pressable>
  );
}
