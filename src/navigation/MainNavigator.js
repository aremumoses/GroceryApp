import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import ItemsScreen from '../screens/Items/ItemsScreen';
import ItemDetailsScreen from '../screens/Items/ItemDetailsScreen';
import CartScreen from '../screens/Cart/CartScreen';
import TrackOrderScreen from '../screens/TrackOrder/TrackOrderScreen';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Items" component={ItemsScreen} />
    <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="TrackOrder" component={TrackOrderScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
