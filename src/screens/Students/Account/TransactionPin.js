import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS,FONTS, SIZES, icons } from '../../../constants'
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../../components/Input/FormInput';
import { FormButton } from '../../../components/Button/FormButton';

export default function TransactionPin() {
  const navigation = useNavigation();
  const [Old, setOld] = useState('');
  const [newPin, setNewPin] = useState('');
  const [cNewPin, setcNewPin] = useState('');

  
  return (
    <View style={{flex:1, backgroundColor:COLORS.white}}>
   <AppHeader
   title={'Account Profile'}
   />

<Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.h4,
            color:  COLORS.darkpurple 
    }}>Change Transaction PIN
    </Text>
          

<View style={{}}>

<FormInput
          placeholder={'Old'}
          value={Old}
          onChangeText={setOld}
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
          value={newPin}
          onChangeText={setNewPin}
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
          placeholder={'Confirm New Pin'}
          value={cNewPin}
          onChangeText={setcNewPin}
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