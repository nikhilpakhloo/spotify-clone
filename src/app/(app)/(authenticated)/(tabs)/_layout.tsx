import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SignOutButton } from '@/src/components/SignOutButton';


// https://github.com/EvanBacon/expo-router-forms-components/blob/main/components/ui/Tabs.tsx
export default function TabLayout() {

    return (
        <Tabs
            screenOptions={
                {
                    tabBarActiveTintColor: '#0d6c9a',
                    tabBarInactiveTintColor: '#8E8E93',
                    headerShown: true,
                }
            }>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: 'Home',
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                    headerRight:()=><SignOutButton/>
                }}
            />
   
        </Tabs>
    );
}