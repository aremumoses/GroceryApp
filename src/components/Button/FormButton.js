import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

export const FormButton = ({title, onPress, btnStyle}) => {
  return (
    <TouchableOpacity
    
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, btnStyle,{marginHorizontal:SIZES.h1*2.5}]}>
      <Text style={{...FONTS.body3a, color: COLORS.white}}>{title}</Text>
    </TouchableOpacity>
  );
};


export const PinButton = ({title, onPress, btnStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, btnStyle,{marginHorizontal:SIZES.h1,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:SIZES.base}]}>
<View></View>
      <Text style={{...FONTS.body3a, color: COLORS.white}}>{title}</Text>
      <View 
      style={{backgroundColor:COLORS.white,borderRadius:20,paddingHorizontal:10,paddingVertical:10}}>
      <Image 
      resizeMode='contain'
      source={icons.forwardArrow}
      tintColor={SIZES.white}     
      style={{height: 20, width: 20,}}
      />
      </View>
    </TouchableOpacity>
  );
};

export const TransactionButton = ({title, onPress, btnStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.transactionCtn, btnStyle]}>
      <Text style={{...FONTS.body3a, color: COLORS.secondary}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.h1 * 1.7,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.h1 * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionCtn: {
    height: SIZES.h1 * 1.7,
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    borderColor: COLORS.secondary,
    borderRadius: SIZES.h1 * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
