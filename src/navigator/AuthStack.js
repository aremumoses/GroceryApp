import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import Splash from '../screens/Auth/Splash';
import IntroSlider from '../screens/Auth/IntroSlider';
import Register from '../screens/Auth/Register';
import Login from '../screens/Auth/Login';
import AddPin from '../screens/Auth/AddPin';
import AddFingerPrint from '../screens/Auth/AddFingerPrint';
import SelectContact from '../screens/Auth/SelectContact';
import ContactVerify from '../screens/Auth/ContactVerify';
import NewPassword from '../screens/Auth/NewPassword';


const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        headerShown: false,
      }}>
      {/* AUTHSCREENS */}
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="IntroSlider" component={IntroSlider} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Addpin" component={AddPin} />
      <Stack.Screen name="AddFingerPrint" component={AddFingerPrint} />
      <Stack.Screen name="SelectContact" component={SelectContact} />
      <Stack.Screen name="ContactVerify" component={ContactVerify} />
      <Stack.Screen name="NewPassword" component={NewPassword} />

      
    </Stack.Navigator>
  );
};

export default AuthStack;
