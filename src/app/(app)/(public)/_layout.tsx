import { useAuth } from "@/src/context/AuthContext";
import { Stack, Redirect, Href } from 'expo-router';
import { useLinkingURL } from "expo-linking";

const Layout = () => {
  const link = useLinkingURL();
  const { user } = useAuth();
  const isDevLink = link?.includes("exp+project:");
  const redirectTarget = (!link || isDevLink) ? "/(app)/(authenticated)/(tabs)" : link;

  if (user) {
    return <Redirect href={redirectTarget as Href} />;
  }

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false, title: 'Login' }} />
      <Stack.Screen
        name="register"
        options={{ title: 'Create Account', headerShown: false }}
      />
    </Stack>
  );
};

export default Layout;
