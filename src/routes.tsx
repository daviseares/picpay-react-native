import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './pages/Home';
import WalletScreen from './pages/Wallet';
import PayScreen from './pages/Pay';

import PayButton from './components/PayButton';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: '#131418',
        borderTopColor: 'rgba(255,255,255,0.2)',
      },
      activeTintColor: '#fff',
      inactiveTintColor: '#92929c',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Início',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={WalletScreen}
      options={{
        title: 'Carteira',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="creditcard" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Pay"
      component={PayScreen}
      options={{
        title: '',
        tabBarIcon: ({ focused }) => <PayButton focused={focused} />,
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={PayScreen}
      options={{
        title: 'Notificações',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name="ios-notifications-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={PayScreen}
      options={{
        title: 'Ajustes',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="setting" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Routes;
