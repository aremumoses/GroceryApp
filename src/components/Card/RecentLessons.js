import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FONTS, SIZES, icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'

export default function RecentLessons() {
  const navigation = useNavigation()
  return (
    <View style={{
     marginBottom:SIZES.base
    }}>
      <Text style={{
      marginHorizontal: SIZES.h3,
      paddingBottom: SIZES.base,
      ...FONTS.h4,
            color:  COLORS.darkpurple ,
            textDecorationLine:'underline'
          }}>Recent Lessons</Text>

          <View style={{ backgroundColor: COLORS.white,
      borderRadius: SIZES.h3,
      marginHorizontal: SIZES.h3,
      padding: SIZES.h5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor: COLORS.white,
      borderRadius: SIZES.h2,
      }}>
      
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
          <Image
          resizeMode='cover'
          source={icons.learning}
          style={{
            height: SIZES.h1*2.5,
            width: SIZES.h1*2.5,
            marginRight:SIZES.h5
          }}
        />
        <View>
            <Text  style={{
            ...FONTS.h3,
            color:  COLORS.darkpurple 
          }}>Lesson Title</Text>
            <Text  style={{
            ...FONTS.body4,
            color:  COLORS.Gray
          }}>Robertson Connie</Text>
        </View>
        </View>

        <TouchableOpacity style={{backgroundColor:COLORS.inputGray,borderRadius:SIZES.h2,paddingHorizontal:SIZES.h4,marginTop:SIZES.h3}}
         onPress={()=>navigation.navigate('LessonOverview')}
        >
            <Text  style={{
            ...FONTS.body4,
            color:  COLORS.darkpurple 
          }}>View details</Text>
        </TouchableOpacity>
          </View>
    </View>
  )
}