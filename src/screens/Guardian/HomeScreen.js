import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/Header/HomeHeader'
import { COLORS, SIZES ,FONTS, icons} from '../../constants'

import {useNavigation} from '@react-navigation/native';
import RecentLessons from '../../components/Card/RecentLessons';
import GHomeHeader from '../../components/Header/GHomeHeader ';

export default function HomeScreen() {
  const navigation = useNavigation();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Register Student',
      icon:icons.saly,
      onPress:'RegisterStudent'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Login to Student',
      icon:icons.handgraudation,
      onPress:'LoginStudent'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'View Students',
      icon:icons.book,
      onPress:'PerformanceScreen'

    },
    {
      id: '58694a0f-3da1-71f-bd96-145571e29d72',
      title: 'Request For Tutor',
      icon:icons.starIcon,
      onPress:'AllTutor'

    },
   
  ];
  const Item = ({title,icon,onPress}) => (
    <TouchableOpacity 
    onPress={()=>navigation.navigate(onPress)}
    style={{marginHorizontal:SIZES.body3,backgroundColor:COLORS.inputGray,borderRadius:SIZES.base,
    marginVertical:SIZES.base,width:'40%',height:110}}>
    <View style={styles.item}>
      <Image
          resizeMode='cover'
          source={icon}
          style={{
            height: SIZES.h1*2,
            width: SIZES.h1*2,
            marginRight:SIZES.h5
          }}
        />
      <Text style={{
            ...FONTS.body4,
            color:  COLORS.black 
          }}>{title}</Text>
    </View>
    </TouchableOpacity>
  );
 return(
    <ScrollView style={{backgroundColor:COLORS.white}}>
      <GHomeHeader
      title={'Welcome, Debs!'}
      />

      {/* //This week Learning */}
    <View 
    style={{backgroundColor:COLORS.white,borderRadius:SIZES.h2,bottom:30,marginHorizontal:SIZES.h3,padding:SIZES.h3,  shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
     <Text style={{
            ...FONTS.body4,
            color:  COLORS.Gray 
          }}>Ella’s Progress this week</Text>
     <Text style={{
            ...FONTS.body4,
            color:  COLORS.darkpurple 
          }}>Go to Dashboard</Text>
     </View>
     <Text  style={{
            ...FONTS.h2,
            color:  COLORS.darkpurple 
          }}>20hours</Text>
<View style={{height:4,width:'100%',backgroundColor:COLORS.primary}}>

</View>
    </View>

    <Image
    resizeMode="contain"
          source={icons.offer}
      
          style={{
            height: SIZES.height/5,
            width: SIZES.width ,bottom:20
            // tintColor:  COLORS.white ,
          }}
        />


   <SafeAreaView style={styles.container}>
   <Text style={{
      marginHorizontal: SIZES.h1,
      paddingBottom: SIZES.base,
      ...FONTS.h4,
            color:  COLORS.darkpurple ,
            textDecorationLine:'underline'
          }}>All Features</Text>

  <View style={{justifyContent:'center',marginLeft:SIZES.base}}>  
     <FlatList
        data={DATA}
        renderItem={({item}) => <Item onPress={item.onPress} title={item.title} icon={item.icon} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      </View>

      </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
 
  item: {
    flexDirection: 'column', // Align items in a row
    alignItems: 'center', // Center items vertically
    padding: SIZES.base, // Adjust padding as needed
    marginHorizontal: SIZES.body2,
  },
  title: {
    fontSize: 32,
  },
});