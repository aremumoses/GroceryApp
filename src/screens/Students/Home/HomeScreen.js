import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import HomeHeader from '../../../components/Header/HomeHeader'
import { COLORS, SIZES ,FONTS, icons} from '../../../constants'
import RecentLessons from '../../../components/Card/RecentLessons'
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Start learning',
      icon:icons.saly,
      onPress:'StartLearningScreen'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'My classroom',
      icon:icons.handgraudation,
      onPress:'MyClassRoomScreen'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'My institution',
      icon:icons.book,
      onPress:'MyInstitutionScreen'

    },
     {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb28ba',
      title: 'Practice question',
      icon:icons.books,
      onPress:'PracticeScreen'

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd1aa97f63',
      title: 'Performance',
      icon:icons.growingBars,
      onPress:'PerformanceScreen'

    },
    {
      id: '58694a0f-3da1-471f-bd96-15571e29d72',
      title: 'Leaderboard',
      icon:icons.starIcon,
      onPress:'LeaderBoardScreen'

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
      <HomeHeader
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
          }}>Learnt this week</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('LessonScreen')}>
     <Text style={{
            ...FONTS.body4,
            color:  COLORS.darkpurple 
          }}>My Lessons</Text>
          </TouchableOpacity>
     </View>
     
    <Text 
      style={{
            ...FONTS.h2,
            color:  COLORS.darkpurple 
          }}>46min</Text>
            
<View style={{height:4,width:'100%',backgroundColor:COLORS.primary}}>

</View>
    </View>
   {/* Recent Lessons */}
<RecentLessons/>
   {/* All Feautures */}
   <SafeAreaView style={styles.container}>
   <Text style={{
      marginHorizontal: SIZES.h3,
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