import { Pressable, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface Track {
  track: {
    name: string;
    album: {
      images: { url: string }[];
    };
  };
}

interface RecentlyPlayedCardProps {
  item: Track;
}

const RecentlyPlayedCard: React.FC<RecentlyPlayedCardProps> = ({ item }) => {
  const navigation = useNavigation();
  
  return (
    <Pressable
      // On press action can be added here
      // onPress={() => /* your navigation logic */}
      className="m-2"
    >
      <Image
        className="w-32 h-32 rounded-sm"
        source={{ uri: item.track.album.images[0].url }}
      />
      <Text
        numberOfLines={1}
        className="text-white text-xs font-medium mt-2"
      >
        {item?.track?.name}
      </Text>
    </Pressable>
  );
};

export default RecentlyPlayedCard;
