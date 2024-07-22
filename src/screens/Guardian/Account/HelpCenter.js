import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS,FONTS, SIZES, icons } from '../../../constants'
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../../components/Input/FormInput';
import { FormButton } from '../../../components/Button/FormButton';
import { icon } from '../../../constants/icons';

export default function HelpCenter() {
  const navigation = useNavigation();



  return (
    <View style={{backgroundColor:COLORS.white,flex:1}}>
   <AppHeader
   title={'Account Profile'}
   />
 <View style={{marginHorizontal:SIZES.body3 }}>
<Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.h4,
            color:  COLORS.darkpurple 
    }}> Help Center
    </Text>

       
    <Image
          resizeMode='contain'
          source={icons.chatt}
          style={{
            alignSelf:'center',
            height: SIZES.h1*7,
            width: SIZES.h1*7,
            marginVertical:SIZES.h1

          }}
        />

<Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.h2,
      textAlign:'center',
            color:  COLORS.darkpurple 
    }}> Get Support
    </Text>

    <Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.body4,
      width:'70%',
      textAlign:'center',
      alignSelf:'center',
            color:  COLORS.Gray 
    }}> For any support request regards your orders or deliveries please feel free to speak with us at below.
    </Text>

    <Text style={{
      marginHorizontal: SIZES.base,
      ...FONTS.body3,
      width:'70%',
      marginTop:SIZES.body1,
      textAlign:'center',
      alignSelf:'center',
            color:  COLORS.Gray 
    }}> Call us - +234 7838XXXXXX

    </Text>

    <Text style={{
      marginHorizontal: SIZES.base,
      ...FONTS.body3,
      width:'70%',
      textAlign:'center',
      alignSelf:'center',
            color:  COLORS.Gray 
    }}> 
Mail us - celma@info.com
    </Text>

</View>
<View style={{alignItems:'center'}}>

</View>


    </View>
  )
}
const styles = StyleSheet.create({
 
  item: {

    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
    padding: SIZES.h4, // Adjust padding as needed
// justifyContent:'space-between' 
 },
  flex: {
    // alignItems: 'center', // Center items vertically
    // flexDirection: 'row',
  },
});