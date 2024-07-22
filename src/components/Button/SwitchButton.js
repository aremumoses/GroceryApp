import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState, useContext } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants';
import { ThemeContext } from '../Utils/ThemeContext';



const SwitchButton = ({ value, onValueChange, thumbColor }) => {
  const isDarkMode  = useContext(ThemeContext)



  return (

  
<View
style={{
  ...styles.switch,
  backgroundColor: value ? COLORS.primary : '#CDE1FF',
}}>
<Switch
    value={value}
    onValueChange={onValueChange}
    thumbColor={value? COLORS.white: COLORS.primary}
    trackColor={{ false: '#CDE1FF', true: COLORS.primary}}
/>
</View>

  )
}

export default SwitchButton

const styles = StyleSheet.create({
  switch: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 24,
    width: 47,
  },

})