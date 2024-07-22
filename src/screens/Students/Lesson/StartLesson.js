import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS,FONTS, SIZES, icons } from '../../../constants'
import Videoo from '../../../components/Video/Video'

export default function StartLesson() {


  
  return (
    <View style={styles.container}>
     <AppHeader
     title={'Start Learning'}
     />
    <Videoo/>
    <View>
      
    <Text style={{
               ...FONTS.h3,
                color:  COLORS.darkpurple,
                marginTop:SIZES.h5,
                marginLeft:SIZES.h5,
                marginRight:SIZES.h5,
            }}>
         Lesson Notes
            </Text>

            <Text style={{
              textAlign:'justify',
               ...FONTS.body4,
              //  lineHeight:SIZES.h4,
                color:  COLORS.textGray,
                marginTop:SIZES.h5,
                marginLeft:SIZES.h5,
                marginRight:SIZES.h5,
            }}>
           ICAN Professional Courses PracticeLorem ipsum dolor sit amet consectetur. Tincidunt a in elit molestie placerat sed mattis at 
           ICAN Professional Courses PracticeLorem ipsum dolor sit amet consectetur. Tincidunt a in elit molestie placerat sed mattis at 
           ICAN Professional Courses PracticeLorem ipsum dolor sit amet consectetur. Tincidunt a in elit molestie placerat sed mattis at 
           ICAN Professional Courses PracticeLorem ipsum dolor sit amet consectetur. Tincidunt a in elit molestie placerat sed mattis at 
           </Text>

           <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:SIZES.h1}}>
           <Image
          source={icons.rank}
          resizeMode='cover'
          style={{
            height: SIZES.h1*3,
            width: SIZES.h1*3
          }}
        />

<Image
          source={icons.growth}
          resizeMode='cover'
          style={{
            height: SIZES.h1*3,
            width: SIZES.h1*3
          }}
        />
           </View>

           <Text style={{
              textAlign:'justify',
               ...FONTS.body4,
              //  lineHeight:SIZES.h4,
                color:  COLORS.textGray,
                marginTop:SIZES.h5,
                marginLeft:SIZES.h5,
                marginRight:SIZES.h5,
            }}>
           ICAN Professional Courses PracticeLorem ipsum dolor sit amet consectetur. Tincidunt a in elit molestie placerat sed mattis at 
           ICAN Professional Courses PracticeLorem ipsum dolor sit amet consectetur. Tincidunt a in elit molestie placerat sed mattis at 
           ICAN Professional Courses PracticeLorem ipsum dolor sit amet consectetur. Tincidunt a in elit molestie placerat sed mattis at 
           ICAN Professional Courses PracticeLorem ipsum dolor sit amet consectetur. Tincidunt a in elit molestie placerat sed mattis at 
           </Text>
        
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:COLORS.white,
     },
})