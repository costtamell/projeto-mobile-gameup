import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Layout from './(tabs)/_layout';
import Explore from './(tabs)/explore';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Layout">
        <Stack.Screen 
          name="Layout" 
          component={Layout} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Explore" 
          component={Explore} 
          options={{ 
            title: 'Explorar',
            headerStyle: {
              backgroundColor: '#3f51b5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}