import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import HomeHeader from '../../../components/Header/HomeHeader'
import { COLORS, SIZES ,FONTS, icons} from '../../../constants'
import RecentLessons from '../../../components/Card/RecentLessons'
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/Header/AppHeader'
import FormInput from '../../../components/Input/FormInput'

export default function MyClassRoomScreen() {
  const navigation = useNavigation();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Class Name',
      description:'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie sagittis eros eu. Nunc mi aliquam dui.',
      icon:icons.assignment,
      date:'13th May, 2024'
     
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Class Name',
      description:'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie sagittis eros eu. Nunc mi aliquam dui.',
      date:'13th May, 2024',
      icon:icons.assignment,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Class Name',
      description:'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie sagittis eros eu. Nunc mi aliquam dui.',
      date:'13th May, 2024',
      icon:icons.assignment,

    },
     {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb28ba',
      title: 'Class Name',
      description:'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie sagittis eros eu. Nunc mi aliquam dui.',
      date:'13th May, 2024',
      icon:icons.assignment,

    },
   {
        id: '3ac6afc-c605-48d3-a4f8-fbd1aa97f63',
        title: 'Class Name',
      description:'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie sagittis eros eu. Nunc mi aliquam dui.',
      date:'13th May, 2024',
        icon:icons.assignment,
  
      },
      {
        id: '58694a0f-3da1-471f-b96-15571e29d72',
        title: 'Class Name',
      description:'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie sagittis eros eu. Nunc mi aliquam dui.',
      date:'13th May, 2024',
        icon:icons.assignment,
      },
  ];
  const Item = ({title,icon,description,date}) => (
    <TouchableOpacity 

    style={styles.itemg}>
    <View style={styles.item}>
      <Image
          resizeMode='cover'
          source={icon}
          style={{
            height: SIZES.h1*4,
            width: SIZES.h1*4,
            marginRight:SIZES.h5,
            borderRadius:SIZES.base
          }}
        />
        <View style={{flexDirection:'column',justifyContent:'space-between',marginRight:3}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

      <Text style={{
            ...FONTS.h4,
            color:  COLORS.darkpurple 
          }}>{title}</Text>
           <TouchableOpacity   onPress={()=>navigation.navigate('ClassroomActivityScreen',{title:title,icon:icon,description:description,date:date})}>
        <Text style={{
      ...FONTS.body4,
            color:  COLORS.darkpurple,
          }}>Join Class Activity</Text>
      </TouchableOpacity>
</View>
           <Text style={{
            ...FONTS.body5,lineHeight:SIZES.h4,
            color:  COLORS.Gray ,
            marginVertical:SIZES.base
          }}>{description}</Text>

      <View style={{flexDirection:'row'}}>
           <Text style={{
            ...FONTS.h5,
            color:  COLORS.black 
          }}>Date Created: </Text>
           <Text style={{
            ...FONTS.body5,
            color:  COLORS.black 
          }}>{date} </Text>
          </View>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
           <Text style={{
            ...FONTS.h4, 
            color:  COLORS.black 
          }}>Class Members</Text>

<Image
          resizeMode='cover'
          source={icon}
          style={{
            height: SIZES.h3,
            width: SIZES.h3,
            borderRadius:SIZES.h3,
            marginHorizontal:SIZES.h5
          }}
        />

  <Text style={{
            ...FONTS.h4,
            color:  COLORS.black 
          }}>+20</Text>
          </View>
    </View>
    </View>
    </TouchableOpacity>
  );
 return(
    <ScrollView style={{backgroundColor:COLORS.white}}>
      <AppHeader
     title={'My Classrooms'}
     />

      {/* //This week assignment */}
  

   {/* All Feautures */}
   <SafeAreaView style={styles.contaner}>
  
   <View style={{flexDirection:'row',justifyContent:'space-between',margin:SIZES.h2}}>
      <Text style={{
      ...FONTS.h4,
            color:  COLORS.darkpurple,
          }}>My Classroom</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('SelectClassScreen')}>
        <Text style={{
      ...FONTS.body4,
            color:  COLORS.Gray,
            textDecorationLine:'underline'
          }}>Join new Classroom</Text>
      </TouchableOpacity>
     </View>
   <FlatList
        data={DATA}
        renderItem={({item}) => <Item date={item.date} title={item.title} icon={item.icon} description={item.description}/>}
        keyExtractor={item => item.id}
       
      />
      </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
 container:{
    flexDirection:'row',justifyContent:'space-between',margin:SIZES.h2
 },
  item: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
    // padding: SIZES.base, // Adjust padding as needed
    // marginVertical: SIZES.body2,
    // justifyContent:'flex-start'
    shadowOffset: {
        width: 1,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
  },
  itemg: {marginHorizontal:SIZES.body3,backgroundColor:COLORS.white,
    borderRadius:SIZES.h3,marginBottom:SIZES.h4*3,height:100,width:'58%', shadowColor: '#000',
    }
});