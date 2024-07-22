import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import HomeHeader from '../../../components/Header/HomeHeader'
import { COLORS, SIZES ,FONTS, icons} from '../../../constants'
import RecentLessons from '../../../components/Card/RecentLessons'
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/Header/AppHeader'
import FormInput from '../../../components/Input/FormInput'

export default function ClassroomActivityScreen({route}) {
  const navigation = useNavigation();
  const {title,icon,description,date}= route.params;
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      assign: 'Assignment #1',
      title: 'Title',
      description:'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie',
      icon:icons.assignment,
      date:'13th May, 2024'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-d53abb28ba',
      assign: 'Assignment #2',
        title: 'Title',
        description:'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie ',
        icon:icons.assignment,
        date:'13th May, 2024'
      },
   
  ];
  const Item = ({title,icon,description,date,assign}) => (
    <TouchableOpacity 
    onPress={()=>navigation.navigate('AssignmentSubmissionScreen')}
    style={styles.itemg}>
    <View style={styles.item}>
      <Image
          resizeMode='contain'
          source={icon}
          style={{
            height: SIZES.h1*4,
            width:SIZES.h1*5,
          }}
        />
        <View style={{flexDirection:'column',justifyContent:'space-between', width:SIZES.h1*5,}}>
          
          <Text style={{
            ...FONTS.h5,
            color:  COLORS.Gray 
          }}>{assign}</Text>
      <Text style={{
            ...FONTS.h3,  marginTop:SIZES.base,
            color:  COLORS.darkpurple 
          }}>{title}</Text>
          
        

           <Text style={{
            ...FONTS.body4,
            color:  COLORS.Gray ,  marginBottom:SIZES.base,
          textAlign:'justify'
          }}>{description}</Text>

     

          
    </View>

    <TouchableOpacity style={{borderRadius:SIZES.h4,borderWidth:1,borderColor:COLORS.darkpurple,width:'75%'}}>
        <Text style={{
          ...FONTS.body4,
            color:  COLORS.darkpurple,
            padding:SIZES.base
          }}>View Assignment</Text>
  
    </TouchableOpacity>
    </View>
    </TouchableOpacity>
  );
 return(
    <ScrollView style={{backgroundColor:COLORS.white}}>
      <AppHeader
     title={'My Classrooms'}
     />

      {/* //This week Learning */}
  

   {/* All Feautures */}
   <SafeAreaView style={styles.contaner}>
  
   <View style={{flexDirection:'row',justifyContent:'space-between',margin:SIZES.h5}}>
   <Text style={{
      marginHorizontal: SIZES.base,
    //   paddingVertical: SIZES.base,
      ...FONTS.h4,
            color:  COLORS.darkpurple ,
          }}>Class Activity</Text>
          

      </View>


      <TouchableOpacity 
    style={styles.itemg}>
    <View style={styles.item}>
      <Image
          resizeMode='cover'
          source={icons.assignment}
          style={{
            height: SIZES.h1*5,
            width:'100%',
            borderRadius:SIZES.base
          }}
        />
        <View style={{flexDirection:'column',justifyContent:'space-between',marginRight:3}}>
          <View style={{}}>

      <Text style={{
            ...FONTS.h3,
            marginTop:SIZES.h4,
            color:  COLORS.darkpurple 
          }}>{title}</Text>
          
        
</View>
           <Text style={{
            ...FONTS.body4,
            color:  COLORS.Gray ,
            marginVertical:SIZES.base,textAlign:'justify'
          }}>{description}</Text>

      <View style={{flexDirection:'row'}}>
           <Text style={{
            ...FONTS.h4,
            color:  COLORS.black 
          }}>Date Created: </Text>
           <Text style={{
            ...FONTS.h4,
            color:  COLORS.black 
          }}>{date} </Text>
          </View>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginVertical:SIZES.body4}}>
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
            ...FONTS.body4,
            color:  COLORS.black 
          }}>+20</Text>
          </View>
    </View>
    </View>
    </TouchableOpacity>

   <FlatList
        data={DATA}
        renderItem={({item}) => <Item assign={item.assign} date={item.date} title={item.title} icon={item.icon} description={item.description}/>}
        keyExtractor={item => item.id}
    //    numColumns={2}
       horizontal
      />

      <FormInput
      placeholder={'Drop a comment in your classroom'}
      isHiddedd
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
    // flexDirection: 'row', // Align items in a row
    // alignItems: 'center', // Center items vertically
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
  itemg: {backgroundColor:COLORS.white,
    borderRadius:SIZES.h3, shadowColor: '#000',marginHorizontal:SIZES.body3
    }
});