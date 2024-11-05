// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './proList';
import ColorSelection from './colorSelection';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ColorSelection" component={ColorSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
