import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { ThemeContext } from '../components/Utils/ThemeContext';
import HomeScreen from '../screens/Students/Home/HomeScreen';
import LessonScreen from '../screens/Students/Lesson/LessonScreen';
import SearchScreen from '../screens/Students/Search/SearchScreen';
import ChatScreen from '../screens/Students/Chat/ChatScreen';
import AccountScreen from '../screens/Students/Account/AccountScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const isDarkMode = useContext(ThemeContext);
  console.log('isdark mode inside btoo', isDarkMode);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          ...FONTS.h5,
          height: SIZES.h1 * 2.5,
          backgroundColor: isDarkMode? COLORS.dark : COLORS.white,
          borderTopWidth: 0,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route, focused }) => ({
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ size, color, focused }) => (
            <Image
              source={focused ? icons.home : icons.home}
              style={{
                height:  focused ? size * 0.8 : size * 0.6,
                width:focused ? size * 0.8 : size * 0.6, 
                tintColor: focused ? COLORS.primary : '#9DB2CE',
               
              }}
            />
          ),
          tabBarLabel: ({ focused }) =>
           (
            <Text style={{ ...FONTS.body5, color: focused? COLORS.primary: '#9DB2CE',marginBottom:SIZES.h4}}>

               Home
              </Text>
            ) 
        })}
      />
      <Tab.Screen
        name="Lessons"
        component={LessonScreen}
        options={({ route, focused }) => ({
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ size, color, focused }) => (
            <Image
              source={focused ? icons.lessons : icons.lessons}
              style={{
                height:  focused ? size * 0.8 : size * 0.6,
                width:focused ? size * 0.8 : size * 0.6, 
                tintColor: focused ? COLORS.primary : '#9DB2CE',
                
              }}
            />
          ),
          tabBarLabel: ({ focused }) =>
            (
                <Text style={{ ...FONTS.body5, color: focused? COLORS.primary: '#9DB2CE',marginBottom:SIZES.h4}}>

                {route.name}
              </Text>
            ) 
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={({ route, focused }) => ({
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ size, color, focused }) => (
            <Image
              source={focused ? icons.search : icons.search}
              resizeMode='contain'
              style={{
                height:'100%',
                width:'100%',
                tintColor: focused? COLORS.primary : '#9DB2CE',
                // height: focused ? size * 3 : size * 0.6,
                // width: focused ? size * 0.8 : size * 0.6,
                tintColor: focused ? COLORS.primary : '#9DB2CE',
              }}
            />
          ),
          tabBarLabel: ({ focused }) =>
           (
            <Text style={{ ...FONTS.body5, color: focused? COLORS.primary: '#9DB2CE',marginBottom:SIZES.h4}}>

                {route.name}
              </Text>
            ) 
        })}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={({ route, focused }) => ({
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ size, color, focused }) => (
            <Image
              source={focused ? icons.chat : icons.chat}
              style={{
                height: focused ? size * 0.8 : size * 0.6,
                width: focused ? size * 0.8 : size * 0.6,
                tintColor: focused ? COLORS.primary : '#9DB2CE',
             
              }}
            />
          ),
          tabBarLabel: ({ focused }) =>
          (
            <Text style={{ ...FONTS.body5, color: focused? COLORS.primary: '#9DB2CE',marginBottom:SIZES.h4}}>


                {route.name}
              </Text>
            ) 
        })}
      />

<Tab.Screen
        name="My Account"
        component={AccountScreen}
        options={({ route, focused }) => ({
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ size, color, focused }) => (
            <Image
              source={focused ? icons.myAccount : icons.myAccount}
              style={{
                height: focused ? size * 0.8 : size * 0.6,
                width: focused ? size * 0.8 : size * 0.6,
                tintColor: focused ? COLORS.primary : '#9DB2CE',
              }}
            />
          ),
          tabBarLabel: ({ focused }) =>
           (
              <Text style={{ ...FONTS.body5, color: focused? COLORS.primary: '#9DB2CE',marginBottom:SIZES.h4}}>
                {route.name}
              </Text>
            ) 
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

// const BottomTab = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route, focused }) => ({

//                 tabBarStyle: {
//                     ...FONTS.h5,
//                     height: SIZES.h1 * 2,
//                     backgroundColor: COLORS.white,
//                     borderTopWidth: 1,
//                 },
//                 tabBarLabel: ({ focused }) => {
//                     if (focused) {
//                         return <Text>{route.name}</Text>;
//                     } else {
//                         return null;
//                     }
//                 },
//                 tabBarLabelPosition: "below-icon",
//                 tabBarIcon: ({ focused, size, colour }) => {
//                     let iconName;
//                     if (route.name === 'Home') {
//                         iconName = focused ? icons.home : icons.home
//                         size = focused ? SIZES.h1 * 0.7 : SIZES.h1 * 0.7,
//                             colour = focused ? COLORS.primary : "#9DB2CE"
//                     }
//                     else if (route.name === 'Service') {
//                         iconName = focused ? icons.services : icons.services
//                         size = focused ? SIZES.h1 * 0.6 : SIZES.h1 * 0.6,
//                             colour = focused ? COLORS.primary : "#9DB2CE"
//                     }
//                     else if (route.name === 'Wallet') {
//                         iconName = focused ? icons.history : icons.history
//                         size = focused ? SIZES.h1 * 0.7 : SIZES.h1 * 0.7,
//                             colour = focused ? COLORS.primary : "#9DB2CE"
//                     } else if (route.name === 'Profile') {
//                         iconName = focused ? icons.profile : icons.profile
//                         size = focused ? SIZES.h1 * 0.7 : SIZES.h1 * 0.7,
//                             colour = focused ? COLORS.primary : "#9DB2CE"
//                     }
//                     return <Image source={iconName} style={{ height: size, width: size, tintColor: colour }} />
//                 },
//                 headerShown: false,
//                 tabBarLabel: focused ? route.name : 'null', // Show label only when tab is focused

//             })}
//         >
//             <Tab.Screen name='Home' component={HomeScreen}
//             // options={{
//             //     tabBarLabel: 'Home',
//             // }}
//             />
//             <Tab.Screen name='Service' component={ServiceScreen}
//                 options={{
//                     tabBarLabel: 'Service',
//                 }} />
//             <Tab.Screen name='Wallet' component={WalletScreen}
//                 options={{
//                     tabBarLabel: 'History',
//                 }} />
//             <Tab.Screen name='Profile' component={ProfileScreen}
//                 options={{
//                     tabBarLabel: 'Profile',
//                 }} />
//         </Tab.Navigator>
//     )
// }

const styles = StyleSheet.create({});
