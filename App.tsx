import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, DefaultTheme as NavLight } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, MD3LightTheme, Icon } from 'react-native-paper';

import Header from './src/components/Header';
import HomeScreen from './src/screens/HomeScreen';
import FeedScreen from './src/screens/FeedScreen';
import DetalhesScreen from './src/screens/DetalhesScreen';
import SobreScreen from './src/screens/SobreScreen';

// ✅ Tipos para rotas
export type RootDrawerParamList = {
  Principal: undefined;
  Sobre: undefined;
};

export type RootStackParamList = {
  Tabs: undefined;
  Detalhes: { from?: string } | undefined;
};

export type RootTabsParamList = {
  Home: undefined;
  Feed: undefined;
};

// ✅ Navegadores tipados
const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<RootTabsParamList>();

// ✅ Temas
const paperTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    background: '#FAFAFA',
    surface: '#FFFFFF',
  },
};

const navTheme = {
  ...NavLight,
  colors: {
    ...NavLight.colors,
    background: '#FAFAFA',
    card: '#FFFFFF',
    text: '#1F2937',
    border: '#E5E7EB',
  },
};

// ✅ Tabs com tipagem
function TabsScreen() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }: { route: { name: keyof RootTabsParamList } }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarStyle: { backgroundColor: '#FFFFFF' },
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          const icon = route.name === 'Home' ? 'pokeball' : 'rss';
          return <Icon source={icon as any} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Feed" component={FeedScreen} />
    </Tabs.Navigator>
  );
}

// ✅ Stack Principal com tipagem
function StackPrincipal({ navigation }: { navigation: any }) {
  return (
    <>
      <Header title="Principal" navigation={navigation} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabsScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
    </>
  );
}

// ✅ App
export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navTheme}>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerActiveTintColor: '#2563EB',
            drawerStyle: { backgroundColor: '#FFFFFF' },
          }}
        >
          <Drawer.Screen
            name="Principal"
            component={StackPrincipal}
            options={{
              drawerIcon: ({ color, size }: { color: string; size: number }) => (
                <Icon source="view-dashboard" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Sobre"
            component={SobreScreen}
            options={{
              drawerIcon: ({ color, size }: { color: string; size: number }) => (
                <Icon source="information-outline" size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
