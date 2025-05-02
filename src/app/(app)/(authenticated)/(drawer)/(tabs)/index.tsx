import React, { useCallback, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import ArtistCard from "@/src/components/ArtistCard";
import RecentlyPlayedCard from "@/src/components/RecentlyPlayedCard";
import UserCell from "@/src/components/UserCell";
import { useAuth } from "@/src/context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { useTranslation } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import i18n from "../../../../../i18n"



const Home: React.FC = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  return (
    <LinearGradient colors={["#040306", "#131624"]} className="flex-1 ">
      <SafeAreaView>
        <UserCell user={user} />

        <View>
      <Text className="text-white">{t('welcome')}</Text>
      <Text className="text-white">{t('greeting', { name: 'John' })}</Text>
    </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
