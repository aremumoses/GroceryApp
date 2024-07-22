import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS,FONTS, SIZES, icons } from '../../../constants'
import { useNavigation } from '@react-navigation/native';

export default function AccountScreen() {
  const navigation = useNavigation();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Edit Profile',
      icon:icons.profileIcon,
      onPress:'EditProfileScreen'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Notifications',
      icon:icons.notification,
      onPress:'NotificationScreen'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Security',
      icon:icons.carbonSecurity,
      onPress:'SecurityScreen'

    },
     {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb28ba',
      title: 'Language',
      icon:icons.globle,
      onPress:'LanguageScreen'

    },
   {
        id: '3ac6afc-c605-48d3-a4f8-fbd1aa97f63',
        title: 'Terms and Conditions',
        icon:icons.account,
        onPress:'TermandConditionScreen'
  
      },
      {
        id: '58694a0f-3da1-471f-b96-15571e29d72',
        title: 'Help Center ',
        icon:icons.help,
        onPress:'HelpCenter'
  
      },
 {
    id: '5894a0f-3da1-471f-b96-15571e29d72',
    title: 'Log Out ',
    icon:icons.logOut,
    onPress:'HelpCenter'

  },  ]; 
  const Item = ({title,icon,onPress}) => (
    <TouchableOpacity 
    onPress={()=>navigation.navigate(onPress,{title})}
    style={{}}>
    <View style={styles.item}>
      <View style={styles.flex}>
      <Image
          resizeMode='contain'
          source={icon}
          style={{
            height: SIZES.h4,
            width: SIZES.h4,
            marginRight:SIZES.h5
          }}
        />
      <Text style={{
            ...FONTS.body4,
            color:  COLORS.black 
          }}>{title}</Text>
</View>
<Image
          resizeMode='contain'
          source={icons.forwardSmall}
          style={{
            height: SIZES.h5,
            width: SIZES.h5,
            marginRight:SIZES.h5
          }}
        />
    </View>
    </TouchableOpacity>)
  return (
    <View style={{backgroundColor:COLORS.white,flex:1}}>
   <AppHeader
   title={'Account Profile'}
   />

<Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.h4,
            color:  COLORS.darkpurple 
    }}>Account Profile
    </Text>
          
<View style={{alignItems:'center'}}>
<Image
          resizeMode='contain'
          source={icons.profile}
          style={{
            height: SIZES.h1*3,
            width:SIZES.h1*3,
          }}
        />

          <Text style={{
            marginTop:SIZES.base,
      ...FONTS.h3,
            color:  COLORS.darkpurple ,
          }}>Debbie S. John</Text>
          <Text style={{
  
      ...FONTS.body4,
            color:  COLORS.Gray ,
          }}>debbiesjohn@gmail.com</Text>
</View>

<View style={{marginTop:SIZES.h1,marginHorizontal:SIZES.h1}}>
<FlatList
        data={DATA}
        renderItem={({item}) => <Item onPress={item.onPress} title={item.title} icon={item.icon} />}
        keyExtractor={item => item.id}
      />

</View>
    </View>
  )
}
const styles = StyleSheet.create({
 
  item: {

    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
    padding: SIZES.h4, // Adjust padding as needed
justifyContent:'space-between' 
 },
  flex: {
    alignItems: 'center', // Center items vertically
    flexDirection: 'row',
  },
});