import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
// https://github.com/EvanBacon/expo-router-forms-components/blob/main/components/ui/Tabs.tsx
export default function TabLayout() {
    return (
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000', 
           height:55,
            borderTopWidth: 0, 
          },
          tabBarBackground: () => (
            <BlurView
              intensity={30} 
              style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: 20, 
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
              <Ionicons name="home-outline" size={size} color={color} />
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