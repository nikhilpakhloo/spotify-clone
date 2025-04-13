import { useAuth } from "@/src/context/AuthContext";
import { Stack, Redirect } from 'expo-router';


const Layout = () => {
  const {user} = useAuth();
  if (user) {
    return <Redirect href="/(app)/(authenticated)/(tabs)" />;
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