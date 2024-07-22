import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/Guardian/Auth/Register';
import Login from '../screens/Guardian/Auth/Login';


const GuardianAuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator

      screenOptions={{
        headerShown: false,
      }}>
      {/* AUTHSCREENS */}
 
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default GuardianAuthStack;
