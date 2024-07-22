

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  PermissionsAndroid,
  AppState,
  Alert
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './src/navigator/AuthStack';
import {COLORS} from './src/constants';
import StudentsStack from './src/navigator/StudentsStack';
import GuardianBottomTab from './src/navigator/GuardianBottomTab';
import GuardianStack from './src/navigator/GuardianStack';
import GuardianAuthStack from './src/navigator/GuardianAuthStack';



const App = ({}) => {
  const Stack = createNativeStackNavigator();




  return (
    <View style={{backgroundColor: COLORS.primary, flex: 1}}>
    <NavigationContainer>
        <StatusBar backgroundColor={COLORS.primary} />
       
          <Stack.Navigator
            initialRouteName="AuthStack"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="StudentsStack" component={StudentsStack} />
            <Stack.Screen name="GuardianBottomTab" component={GuardianBottomTab} />
            <Stack.Screen name="GuardianStack" component={GuardianStack} />
            <Stack.Screen name="GuardianAuthStack" component={GuardianAuthStack} />
          </Stack.Navigator>
       
    </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
