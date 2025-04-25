
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/src/context/AuthContext";

export default function ProtectedLayout() {
  const {user} = useAuth();
  if (!user) {
    return <Redirect href="/welcome" />;
  }
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  )
}