import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Foundation';
import Feather from '@expo/vector-icons/Feather';
import Material from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import { BlurView } from 'expo-blur';
// https://github.com/EvanBacon/expo-router-forms-components/blob/main/components/ui/Tabs.tsx
export default function TabLayout() {
  return (
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          height: 55
        },
        tabBarBackground: () => (
          <BlurView
            intensity={30}
            tint='dark'
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.9)'
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Your Library',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Material name="bookshelf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="premium"
        options={{
          title: 'Premium',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="workspace-premium" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}