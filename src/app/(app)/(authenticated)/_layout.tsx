
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/src/context/AuthContext";

export default function ProtectedLayout() {
  const {user} = useAuth();
  if (!user) {
    return <Redirect href="/login" />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}