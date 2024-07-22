import { AppState, Alert, ToastAndroid, InteractionManager } from 'react-native';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import GuardianBottomTab from './GuardianBottomTab';
import HomeScreen from '../screens/Guardian/HomeScreen';
import AllTutor from '../screens/Guardian/AllTutor';
import CheckPerformance from '../screens/Guardian/CheckPerformance';
import LoginStudent from '../screens/Guardian/LoginStudent';
import PerformanceDetail from '../screens/Guardian/PerformanceDetail';
import RegisterStudent from '../screens/Guardian/RegisterStudent';
import StudentPerformance from '../screens/Guardian/StudentPerformance';
import TutorDetails from '../screens/Guardian/TutorDetails';
import TermandConditionScreen from '../screens/Guardian/Account/TermandConditionScreen';
import SecurityScreen from '../screens/Guardian/Account/SecurityScreen';
import NotificationScreen from '../screens/Guardian/Account/NotificationScreen';
import HelpCenter from '../screens/Guardian/Account/HelpCenter';
import EditProfileScreen from '../screens/Guardian/Account/EditProfileScreen';
import TransactionPin from '../screens/Guardian/Account/TransactionPin';
import LanguageScreen from '../screens/Guardian/Account/LanguageScreen';
import PerformanceDetails from '../screens/Guardian/PerformanceDetails';
import PerformanceScreen from '../screens/Guardian/PerformanceScreen';





const inactiveTimeInMinute = 5
const millisecToMins = 60000


const GuardianStack = () => {
  const Stack = createNativeStackNavigator();

  const navigation = useNavigation();


  // const [appStateVisible, setAppStateVisible] = useState(AppState.currentState);
  const sessionTimeoutRef = useRef(null);
  const alertShownRef = useRef(false);


  const appState = useRef(AppState.currentState)
  const [appStateVisibl, setAppStateVisible] = useState(appState.current)

const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Session Timeout!',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }; 

  const onAppStateChange = useCallback(
    async (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        const storedInactiveTime = await EncryptedStorage.getItem('inactiveTime')
        const previousInactiveTime = parseInt(storedInactiveTime) || 0
        const differenceInElapsedTime = Date.now() - previousInactiveTime

        console.log('====================================');
        console.log({previousInactiveTime});
        console.log({differenceInElapsedTime});
        console.log('====================================');
      

        if (differenceInElapsedTime > 0) {
          const backgroundElapsedTime = Math.floor(differenceInElapsedTime / millisecToMins)
          console.log('====================================');
          console.log({backgroundElapsedTime});
          console.log('====================================');

          if (backgroundElapsedTime >= inactiveTimeInMinute) {
            FetchToken()
          }
        }
      }

      if (nextAppState === 'background') {
        await EncryptedStorage.setItem('inactiveTime', Date.now().toString())
      }

      appState.current = nextAppState
      setAppStateVisible(appState.current)
    },
    []
  )




  return (
    <Stack.Navigator
      //   initialRouteName='Auth'
      screenOptions={{
        headerShown: false,
      }}>
        
      {/* BOTTOM TAB */}
      <Stack.Screen name="GuardianBottomTab" component={GuardianBottomTab} />
      {/* HOME SCREEN */}
      <Stack.Screen name="AllTutor" component={AllTutor} />
      <Stack.Screen name="CheckPerformance" component={CheckPerformance} />
      <Stack.Screen name="LoginStudent" component={LoginStudent} />
      <Stack.Screen name="PerformanceDetail" component={PerformanceDetail} />
      <Stack.Screen name="PerformanceDetails" component={PerformanceDetails} />
      <Stack.Screen name="PerformanceScreen" component={PerformanceScreen} />
      <Stack.Screen name="RegisterStudent" component={RegisterStudent} />
      <Stack.Screen name="StudentPerformance" component={StudentPerformance} />
      <Stack.Screen name="TutorDetails" component={TutorDetails} />

         {/* Account Screens */}
         <Stack.Screen name="TermandConditionScreen" component={TermandConditionScreen} />
      <Stack.Screen name="SecurityScreen" component={SecurityScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="TransactionPin" component={TransactionPin} />
    </Stack.Navigator>
  );
};


export default GuardianStack;











