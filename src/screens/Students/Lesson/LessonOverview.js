import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS,FONTS, SIZES, icons } from '../../../constants'
import { useNavigation } from '@react-navigation/native';

export default function LessonOverview() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <AppHeader
     title={'ICAN Lesson Overview'}
     />
      <Image
          source={icons.backround}
          resizeMode='cover'
          style={{
            height: SIZES.height/4,
            width: SIZES.width
          }}
        />

        <View style={{borderRadius:SIZES.radius*4,backgroundColor:COLORS.white, shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginHorizontal:SIZES.h1,
    bottom:20,
    marginBottom:SIZES.h1}}>
            <Text style={{
               ...FONTS.h4,
                color:  COLORS.black,
                marginTop:SIZES.h5,
                marginLeft:SIZES.h5,
                marginRight:SIZES.h5,
            }}>
           ICAN/ACCA
            </Text>

            <Text style={{
               ...FONTS.h4,
                color:  COLORS.darkpurple,
                marginTop:SIZES.h5,
                marginLeft:SIZES.h5,
                marginRight:SIZES.h5,
            }}>
           ICAN Professional Courses Practice
            </Text>

            <Text style={{
               ...FONTS.body5,
               lineHeight:SIZES.h4,
                color:  COLORS.textGray,
                marginTop:SIZES.h5,
                marginLeft:SIZES.h5,
                marginRight:SIZES.h5,
            }}>
           ICAN Professional Courses PracticeLorem ipsum dolor sit amet consectetur. Tincidunt a in elit molestie placerat sed mattis at </Text>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',  marginLeft:SIZES.h5,}}>
            <Image
          source={icons.handgraudation}
          resizeMode='cover'
          style={{
            height: SIZES.h3,
            width: SIZES.h3
          }}
        />
         <Text style={{
               ...FONTS.body5,
                color:  COLORS.black,
                marginLeft:SIZES.base/2,
            }}>
21 Lessons
            </Text>

            </TouchableOpacity>
           
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
            <Image
          source={icons.clock}
          resizeMode='cover'
          style={{
            height: SIZES.h3,
            width: SIZES.h3
          }}
        />
         <Text style={{
                ...FONTS.body5,
                color:  COLORS.black,
                marginLeft:SIZES.base/2,
            }}>
42 Hours
            </Text>

            </TouchableOpacity>

        </View>

        <View  style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',margin:SIZES.h4,}}>
            <TouchableOpacity 
            style={{backgroundColor:COLORS.textGray,padding:SIZES.h5,width:SIZES.width/2.8,justifyContent:'center',alignItems:'center',}}>
                <Text style={{
                    textAlign:'center',
               ...FONTS.h3,}}>
                About
               </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate('LessonCurriculum')}
            style={{backgroundColor:COLORS.inputGray,padding:SIZES.h5,width:SIZES.width/2.8,justifyContent:'center',alignItems:'center',}}>
                <Text style={{
               ...FONTS.h3,}}>
            Curricullum
               </Text>
            </TouchableOpacity>
        </View>

        <Text style={{
               ...FONTS.h4,
                color:  COLORS.darkpurple,
                marginTop:SIZES.h5,
                marginLeft:SIZES.h5,
                marginRight:SIZES.h5,
            }}>
           What You WIll Learn
            </Text>
            <Text style={{
               ...FONTS.body4,
               lineHeight:SIZES.h3,
                color:  COLORS.textGray,
                marginTop:SIZES.h5,
                marginLeft:SIZES.h5,
                marginRight:SIZES.h5,
                textAlign:'justify',
                marginBottom:SIZES.h1
            }}>
         Lorem ipsum dolor sit amet consectetur. Tincidunt a in elit molestie placerat sed mattis at. Quisque consectetur quis morbi nunc. Interdum cras. 
         Lorem ipsum dolor sit amet consectetur. Sit ultricies risus sit ut venenatis morbi duis sem elementum. Condimentum pellentesque arcu nunc libero dictum volutpat. Placerat neque placerat. </Text>
        
        
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
   