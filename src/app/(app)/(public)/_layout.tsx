import { useAuth } from "@/src/context/AuthContext";
import { Stack, Redirect, Href } from 'expo-router';
import { useLinkingURL } from "expo-linking";

const Layout = () => {
  const link = useLinkingURL();
  const { user } = useAuth();
  /** only for development purpose */
  const isDevLink = link?.includes("exp+project:");
  const redirectTarget = (!link || isDevLink) ? "/(app)/(authenticated)/(drawer)/(tabs)" : link;
  if (user) {

    if (redirectTarget.includes("register") || redirectTarget.includes("login")) {
      return <Redirect href={"/(app)/(authenticated)/(drawer)/(tabs)"} />
    };
    /** only for development purpose */

    return <Redirect href={redirectTarget as Href} />;
  }

  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="phone" options={{ headerShown: false }} />
      <Stack.Screen
        name="register"
        options={{ title: 'Create Account', headerShown: false }}
      />
    </Stack>
  );
};

export default Layout;
