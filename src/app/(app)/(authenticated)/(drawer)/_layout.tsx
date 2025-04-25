import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { SCREEN_WIDTH } from '@/src/utils/dimensions';
import CustomDrawerContent from '@/src/components/DrawerContent';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{
        headerShown: false, drawerStyle: {
          width: SCREEN_WIDTH * 0.9,
          backgroundColor: "#121212"
        }
      }} />
    </GestureHandlerRootView>
  );
}
