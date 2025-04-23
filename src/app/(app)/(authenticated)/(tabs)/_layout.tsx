import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
// https://github.com/EvanBacon/expo-router-forms-components/blob/main/components/ui/Tabs.tsx
export default function TabLayout() {
    return (
            <Tabs
                screenOptions={
                    {
                        tabBarActiveTintColor: '#16a34a',
                        tabBarInactiveTintColor: "#000000",
                    }
                }>
                    <StatusBar style='auto'/>
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
    );
}