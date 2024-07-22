import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../../constants';
import React, {useContext, useState} from 'react';
import {ThemeContext} from '../../components/Utils/ThemeContext';
import {useNavigation} from '@react-navigation/native';

const AppHeader = ({title}) => {
  const navigation = useNavigation();
  const isDarkMode = useContext(ThemeContext);
  const styles = StyleSheet.create({});
  return (
    <View
      style={{
        backgroundColor:COLORS.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SIZES.h2,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: SIZES.h5,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.arrowleft}
          style={{
            height: SIZES.h4,
            width: SIZES.h4,
            tintColor:  COLORS.white ,
            marginRight: SIZES.h5,
          }}
        />
        <Text
          style={{
            ...FONTS.body3,
            color:  COLORS.white 
          }}>
          {title}
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Image
    //   resizeMode='contain'
          source={icons.profile}
          style={{
            height: SIZES.h1,
            width: SIZES.h1,
            // tintColor: isDarkMode ? COLORS.white : COLORS.black,
            marginRight: SIZES.h5,
          }}
        />
        <TouchableOpacity >
        <Image
          source={icons.notifications}
          style={{
            height: SIZES.h2,
            width: SIZES.h2,
            tintColor:COLORS.white,
            marginRight: SIZES.h5,
          }}
        />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;
