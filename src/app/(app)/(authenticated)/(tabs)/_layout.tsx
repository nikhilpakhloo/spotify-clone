import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Header from '@/src/components/Header';
import { useColorScheme } from 'react-native';


// https://github.com/EvanBacon/expo-router-forms-components/blob/main/components/ui/Tabs.tsx
export default function TabLayout() {
    const colorScheme = useColorScheme();
    return (
        <>
            <Header />
            <Tabs
                screenOptions={
                    {
                        tabBarActiveTintColor: '#16a34a',
                        tabBarInactiveTintColor: `${colorScheme === "dark" ? "#ffffff" : "#000000"}`,
                    }
                }>
                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarLabel: 'Home',
                        headerShown: false,
                        title: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="create"
                    options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="create-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        title: 'Settings',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="cog-outline" size={size} color={color} />
                        ),
                    }}
                />


            </Tabs>
        </>
    );
}