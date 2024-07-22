import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import HomeHeader from '../../../components/Header/HomeHeader'
import { COLORS, SIZES ,FONTS, icons} from '../../../constants'
import RecentLessons from '../../../components/Card/RecentLessons'
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/Header/AppHeader'
import FormInput from '../../../components/Input/FormInput'

export default function StartLearningScreen() {
  const navigation = useNavigation();

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
        title: 'Finance & Accounting',
        icon:icons.rank,
        onPress:'PerformanceScreen'
  
      },
      {
        id: '58694a0f-3da1-471f-b96-15571e29d72',
        title: 'JUPEB/A’Level ',
        icon:icons.personalDevelopment,
        onPress:'Personal Development'
  
      },
      {
        id: '3ac6afc-c605-48d3-a4f8-fbd197f63',
        title: 'Office Productivity',
        icon:icons.historyIcon,
        onPress:'PerformanceScreen'
  
      },
      {
        id: '58694a0f-3da1-471f-b96-1571e29d72',
        title: 'JUPEB/A’Level ',
        icon:icons.graphChart,
        onPress:'LeaderBoardScreen'
  
      },
  ];
  const Item = ({title,icon,onPress}) => (
    <TouchableOpacity 
    onPress={()=>navigation.navigate('LessonSearchScreen',{title})}
    style={{marginLeft:SIZES.body2,backgroundColor:COLORS.white,borderRadius:SIZES.h3,marginVertical:SIZES.base,width:'40%',height:100}}>
    <View style={styles.item}>
      <Image
          resizeMode='cover'
          source={icon}
          style={{
            height: SIZES.h1,
            width: SIZES.h1,
            marginRight:SIZES.h5
          }}
        />
      <Text style={{
            ...FONTS.body5,
            color:  COLORS.black 
          }}>{title}</Text>
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
          }}>All Catergories</Text>

<FormInput
placeholder={'Search for...'}
isHiddedd

/>
<View style={{marginLeft:SIZES.h1}}>
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
    // marginHorizontal: SIZES.body2,
  },
  title: {
    fontSize: 32,
  },
});