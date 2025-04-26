import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import UserCell from './UserCell';
import { getAuth } from '@react-native-firebase/auth';
import Chips from './Chips';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store/slices/dataSlice';
import { RootState } from '../store';

export default function Header() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [user, setUser] = useState<any>(null);
  const selectedCategory = useSelector((state: RootState) => state.data.selectedCategory);
  /** Set current user */
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const chipData = ["All", "Music", "Podcasts"];

  const handleChipPress = (category: string) => {

    dispatch(setCategory(category));

  };
  return (
    <View className="flex-row items-center gap-4">
      <UserCell user={user} />
      {chipData.map((item) => (
        <Chips
          key={item}
          text={item}
          onPress={() => handleChipPress(item)}
          className={`py-2 px-4 rounded-full ${selectedCategory === item ? "bg-primaryButton" : "bg-secondaryButton"
            }`}
          textStyle={`${selectedCategory === item ? "text-black" : "text-secondaryText"
            }`}
        />
      ))}
    </View>
  );
}
