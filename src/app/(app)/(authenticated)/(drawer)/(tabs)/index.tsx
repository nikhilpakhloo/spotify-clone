import React, { useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import ArtistCard from "@/src/components/ArtistCard";
import RecentlyPlayedCard from "@/src/components/RecentlyPlayedCard";
import UserCell from "@/src/components/UserCell";
import { useAuth } from "@/src/context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";



const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <LinearGradient colors={["#040306", "#131624"]} className="flex-1 ">
      <SafeAreaView>
        <UserCell user={user} />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
