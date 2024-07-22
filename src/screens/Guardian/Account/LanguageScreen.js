import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS,FONTS, SIZES, icons } from '../../../constants'
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../../components/Input/FormInput';
import { FormButton } from '../../../components/Button/FormButton';
import CheckBox from '@react-native-community/checkbox';

export default function LanguageScreen() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);


  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Lorem ipsum dolor sit',
    
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Lorem ipsum dolor sit',
  
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Lorem ipsum dolor sit',


    },
     {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb28ba',
      title: 'Lorem ipsum dolor sit',
   

    },
   {
        id: '3ac6afc-c605-48d3-a4f8-fbd1aa97f63',
        title: 'Lorem ipsum dolor sit',

  
      },
      {
        id: '58694a0f-3da1-471f-b96-15571e29d72',
        title: 'Lorem ipsum dolor sit',
   
  
      },
 {
    id: '5894a0f-3da1-471f-b96-15571e29d72',
    title: 'Lorem ipsum dolor sit',


  },  ]; 
  const Item = ({title,onPress}) => (
    <TouchableOpacity 
    onPress={()=>navigation.navigate(onPress,{title})}
    style={styles.flex}>
  
     
      <Text style={{
            ...FONTS.body3,
            color:  COLORS.Gray 
          }}>
            {title}
          </Text>
       

       <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
                tintColors={{ true:COLORS.primary, false: COLORS.Gray}}

              />


  
    </TouchableOpacity>)
  
  return (
    <View style={{backgroundColor:COLORS.white,flex:1}}>
   <AppHeader
   title={'Notifications'}
   />
 <View style={{marginTop:SIZES.h1,marginHorizontal:SIZES.body3 }}>
<Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.h4,
            color:  COLORS.darkpurple 
    }}>All Notifications 
    </Text>

    <Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.h4,
            color:  COLORS.Gray 
    }}>Today  
    </Text>

   
   
<FlatList
        data={DATA}
        renderItem={({item}) => <Item onPress={item.onPress} title={item.title} icon={item.icon} details={item.details} />}
        keyExtractor={item => item.id}
      />

</View>
<View style={{alignItems:'center'}}>

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
  flex:{marginVertical:SIZES.base,
    flexDirection:'row',
    justifyContent:'space-between',
  alignItems:'center'}
});