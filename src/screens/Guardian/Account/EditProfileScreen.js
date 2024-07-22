import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS,FONTS, SIZES, icons } from '../../../constants'
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../../components/Input/FormInput';
import { FormButton } from '../../../components/Button/FormButton';

export default function EditProfileScreen() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  
  return (
    <View>
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

<View style={{marginTop:SIZES.h1}}>

<FormInput
          placeholder={'First Name'}
          value={firstName}
          onChangeText={setFirstName}
          isHidded={undefined}
          forgetPassword={undefined}
          keyboardType={undefined}
          onFocus={undefined}
          onBlur={undefined}
          hidden={undefined}
          setHidden={undefined}
          maxLength={undefined}
/>

<FormInput
          placeholder={'Last Name'}
          value={lastName}
          onChangeText={setLastName}
          isHidded={undefined}
          forgetPassword={undefined}
          keyboardType={undefined}
          onFocus={undefined}
          onBlur={undefined}
          hidden={undefined}
          setHidden={undefined}
          maxLength={undefined}
        />

<FormInput
          lefticon
          placeholder={'Phone number'}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          isHidded={undefined}
          forgetPassword={undefined}
          keyboardType={undefined}
          onFocus={undefined}
          onBlur={undefined}
          hidden={undefined}
          setHidden={undefined}
          maxLength={undefined}
        />

       <FormInput
          lefticon
          placeholder={'Email address'}
          value={email}
          onChangeText={setEmail}
          isHidded={undefined}
          forgetPassword={undefined}
          keyboardType={undefined}
          onFocus={undefined}
          onBlur={undefined}
          hidden={undefined}
          setHidden={undefined}
          maxLength={undefined}
        /> 

<View style={{marginTop:SIZES.body3*3}}>
        <FormButton
        title={'Update'}
        />
        </View>
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