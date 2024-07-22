import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import HomeHeader from '../../../components/Header/HomeHeader'
import { COLORS, SIZES ,FONTS, icons} from '../../../constants'
import RecentLessons from '../../../components/Card/RecentLessons'
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/Header/AppHeader'
import FormInput from '../../../components/Input/FormInput'

export default function LessonSearchScreen({route}) {
  const navigation = useNavigation();
  const { title } = route.params;
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Technology',
      icon:icons.saly,
      onPress:'StartLearningScreen'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'ICAN/ACCA',
      icon:icons.shape,
      onPress:'MyClassRoomScreen'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'General Knowledge',
      icon:icons.bookStack,
      onPress:'MyInstitutionScreen'

    },
     {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb28ba',
      title: 'SSCE',
      icon:icons.graphChart,
      onPress:'PracticeScreen'

    },
   {
        id: '3ac6afc-c605-48d3-a4f8-fbd1aa97f63',
        title: 'Office Productivity',
        icon:icons.historyIcon,
        onPress:'PerformanceScreen'
  
      },
      {
        id: '58694a0f-3da1-471f-b96-15571e29d72',
        title: 'JUPEB/A’Level ',
        icon:icons.graphChart,
        onPress:'LeaderBoardScreen'
  
      },
  ];
  const Item = ({title,icon,onPress}) => (
    <TouchableOpacity 
    onPress={()=>navigation.navigate('LessonOverview')}>
    <View style={styles.item}>
      
      <Text style={{
            ...FONTS.body5,
            color:  COLORS.black 
          }}>{title}</Text>
          <Image
          resizeMode='cover'
          source={icons.cancel}
          style={{
            height: SIZES.h3,
            width: SIZES.h3,
            marginRight:SIZES.h5
          }}
        />
    </View>
    </TouchableOpacity>
  );
 return(
    <ScrollView style={{backgroundColor:COLORS.white}}>
      <AppHeader
     title={'Lessons'}
     />

      {/* //This week Learning */}
  

   {/* All Feautures */}
   <SafeAreaView style={styles.container}>
   <Text style={{
      marginHorizontal: SIZES.h3,
      paddingVertical: SIZES.base,
      ...FONTS.h4,
            color:  COLORS.darkpurple ,
          }}>Search</Text>

<FormInput
placeholder={title}
isHiddedd

/>
   <FlatList
        data={DATA}
        renderItem={({item}) => <Item onPress={item.onPress} title={item.title} icon={item.icon} />}
        keyExtractor={item => item.id}
      />
      </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
 
  item: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
    padding: SIZES.base, // Adjust padding as needed
justifyContent:'space-between' ,
marginHorizontal:SIZES.h3 },
  title: {
    fontSize: 32,
  },
});