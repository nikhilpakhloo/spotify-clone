import React from 'react';
import {  FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '@/src/components/Header';
import { RootState } from '@/src/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Image} from "expo-image";


export default function Logout() {
  const data = useSelector((state: RootState) => state.data.allData);

  const renderItem = ({ item }: { item: any }) => (
    <View className="flex-row items-center gap-4 p-4 border-b">
      <Image source={{ uri: item.poster }} style={{ width: 50, height: 50 }} />
      <Text className="text-white">{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Header />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
        ListEmptyComponent={<Text className="text-white text-center">No items available</Text>}
      />
    </SafeAreaView>
  );
}
