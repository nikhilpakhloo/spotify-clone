import { View, Text, Image } from "react-native";
import React from "react";

interface Artist {
  name: string;
  images: { url: string }[];
}

interface ArtistCardProps {
  item: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ item }) => {
  return (
    <View className="m-2">
      <Image
        className="w-32 h-32 rounded-sm"
        source={{ uri: item.images[0].url }}
      />
      <Text className="text-white text-xs font-medium mt-2">
        {item?.name}
      </Text>
    </View>
  );
};

export default ArtistCard;
