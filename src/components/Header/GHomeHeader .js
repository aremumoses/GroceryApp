import {StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../../constants';
import React, {useContext, useState} from 'react';
import {ThemeContext} from '../Utils/ThemeContext';
import {useNavigation} from '@react-navigation/native';

const GHomeHeader = ({title}) => {
  const navigation = useNavigation();
  const isDarkMode = useContext(ThemeContext);
  const styles = StyleSheet.create({});
  return (
    <ImageBackground source={icons.Background} resizeMode="cover"
    style={{ 
 height:SIZES.h1*6,
      paddingBottom: SIZES.h4,
     
      }}>
        <View style={{ 
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: SIZES.h4,
      alignItems: 'center'
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
        <TouchableOpacity>
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
      <View style={{marginLeft:SIZES.h4}}>
      <Text
          style={{
            ...FONTS.h2,
            color:  COLORS.white 
          }}>
    Check your student progress ?
        </Text>
        <Text
          style={{
            ...FONTS.body3,
            color:  COLORS.white 
          }}>
       Start today!
        </Text>
      </View>


      </ImageBackground>
  );
};

export default GHomeHeader;
