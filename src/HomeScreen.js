import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';

import DashboardScreen from './DashboardScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

  
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
                iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            
          },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',

        })}

      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} options={
            {  
                title: 'Dashboard',
                headerStyle: {
                    backgroundColor: '#81438B', // Specific background color for this screen
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
        } />
        <Tab.Screen name="Settings" component={SettingsScreen} options={
            {  
                title: 'Settings',
                headerStyle: {
                    backgroundColor: '#81438B', // Specific background color for this screen
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
        }/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={
            {  
                title: 'Profile',
                headerStyle: {
                    backgroundColor: '#81438B', // Specific background color for this screen
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
        }/>
      </Tab.Navigator>
    

  );
};

export default HomeScreen;
