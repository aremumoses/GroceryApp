import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS,FONTS, SIZES, icons } from '../../constants'

import AppHeader from '../../components/Header/AppHeader'
import { FormButton } from '../../components/Button/FormButton'

export default function PerformanceDetails() {
  return (
    <View>
        <AppHeader
        title={'Performance'}
        />
        <View style={{padding:SIZES.base*2}}>
         <Text style={{
      ...FONTS.h4,
            color:  COLORS.darkpurple,
          }}>My Performance</Text>
          <View style={{alignItems:"center",justifyContent:'center'}}>
 <Image
 resizeMode="contain"
          source={icons.grade}
          style={{
            height: SIZES.h1*4,
            width: SIZES.h1*3.3,
            position:'relative'
          }}
        />
        <View style={{
            position:'absolute',
            justifyContent:'center',
            justifyContent:'center'
        }}>
        <Text style={{...FONTS.h1,color:COLORS.black}}>85%</Text>
        <Text  style={{...FONTS.h5,color:COLORS.black,bottom:8}}>Grade A</Text>
        </View>
        </View>
        <View style={{alignItems:'center'}}>
<Text  style={{...FONTS.h4,color:COLORS.black}}>You are Excellent,</Text>
        <Text style={{...FONTS.h2,color:COLORS.black}}>DEBBIE S, JOHNS !! </Text>
        <Image
 resizeMode="contain"
          source={icons.chart}
          style={{
            height: SIZES.h1*7,
            width: SIZES.h1*7,
            position:'relative'
          }}
        />
        </View>
<View style={{flexDirection:'row'}}>
    <View style={{backgroundColor:COLORS.primary}}>
        <Text style={{color:COLORS.white,paddingHorizontal:SIZES.base*2,paddingVertical:SIZES.base}}>Score</Text>
    </View>
    <View style={{backgroundColor:COLORS.gray70,borderWidth:0.5,marginLeft:SIZES.base}}>
    <Text style={{color:COLORS.black,paddingHorizontal:SIZES.base*2,paddingVertical:SIZES.base,...FONTS.h3}}>
            15
        </Text>
    </View>
</View>

<View style={{flexDirection:'row',marginVertical:SIZES.base*2}}>
    <View style={{backgroundColor:COLORS.primary}}>
        <Text style={{color:COLORS.white,paddingHorizontal:SIZES.base*2,paddingVertical:SIZES.base}}>Total Score</Text>
    </View>
    <View style={{backgroundColor:COLORS.gray70,borderWidth:0.5,marginLeft:SIZES.base}}>
    <Text style={{color:COLORS.black,paddingHorizontal:SIZES.base*2,paddingVertical:SIZES.base,...FONTS.h3}}>
            25
        </Text>
    </View>
</View>

<View style={{flexDirection:'row',
    marginBottom:SIZES.body3*3
}}>
    <View style={{backgroundColor:COLORS.primary}}>
        <Text style={{color:COLORS.white,paddingHorizontal:SIZES.base*2,paddingVertical:SIZES.base}}>Time Spent  </Text>
    </View>
    <View style={{backgroundColor:COLORS.gray70,borderWidth:0.5,marginLeft:SIZES.base}}>
    <Text style={{color:COLORS.black,paddingHorizontal:SIZES.base*2,paddingVertical:SIZES.base,...FONTS.h3}}>
       9 minutes 5 seconds
        </Text>
    </View>
</View>

<FormButton
title={"Download PDF"}/>
    </View>
    </View>
  )
}