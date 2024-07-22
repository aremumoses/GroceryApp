import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS,FONTS, SIZES, icons } from '../../../constants'
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../../components/Input/FormInput';
import { FormButton } from '../../../components/Button/FormButton';
import { icon } from '../../../constants/icons';
import CheckBox from '@react-native-community/checkbox';
import SwitchButton from '../../../components/Button/SwitchButton';

export default function SecurityScreen() {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch1= () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);


  return (
    <View style={{backgroundColor:COLORS.white,flex:1}}>
   <AppHeader
   title={'Account Profile'}
   />
 <View style={{marginHorizontal:SIZES.body3 }}>
<Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.h4,
            color:  COLORS.darkpurple 
    }}> Security
    </Text>

    <View style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:SIZES.base}}>
      <Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.body3,
            color:  COLORS.black 
    }}>Remember Me</Text>
    <SwitchButton
              onValueChange={toggleSwitch1}
              value={isEnabled1}
              thumbColor={isEnabled1 ? COLORS.primary : COLORS.white}
            />
            </View>

            <View style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:SIZES.base}}>
      <Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.body3,
            color:  COLORS.black 
    }}>Biometrics ID</Text>
    <SwitchButton
              onValueChange={toggleSwitch2}
              value={isEnabled2}
              thumbColor={isEnabled2 ? COLORS.primary : COLORS.white}
            />


            </View>
            <View style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:SIZES.base}}>
      <Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.body3,
            color:  COLORS.black 
    }}>Face ID</Text>
    <SwitchButton
              onValueChange={toggleSwitch3}
              value={isEnabled3}
              thumbColor={isEnabled3 ? COLORS.primary : COLORS.white}
            />
            </View>

            <TouchableOpacity
            onPress={()=>navigation.navigate('TransactionPin')}
            style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:SIZES.base}}>
      <Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.body3,
            color:  COLORS.black 
    }}>Change Transaction PIN</Text>
<Image
          resizeMode='contain'
          source={icons.forwardSmall}
          style={{
            height: SIZES.h5,
            width: SIZES.h5,
            marginRight:SIZES.h5
          }}
        />
            </TouchableOpacity
           
            >
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
// justifyContent:'space-between' 
 },
  flex: {
    // alignItems: 'center', // Center items vertically
    // flexDirection: 'row',
  },
});