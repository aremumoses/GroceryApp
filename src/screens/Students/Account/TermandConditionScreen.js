import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS,FONTS, SIZES, icons } from '../../../constants'
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../../components/Input/FormInput';
import { FormButton } from '../../../components/Button/FormButton';

export default function TermandConditionScreen() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  
  return (
    <View style={{backgroundColor:COLORS.white,flex:1,}}>
   <AppHeader
   title={'Account Profile'}
   />
    <View style={{backgroundColor:COLORS.white,flex:1,paddingHorizontal:SIZES.body4}}>

<Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.h4,
            color:  COLORS.darkpurple 
    }}> Terms and Conditions  
    </Text>

    <Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.h3,
            color:  COLORS.darkpurple 
    }}>Conditions  
    </Text>

    <Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.body4,
      textAlign:'justify',
            color:  COLORS.Gray 
    }}>At enim hic etiam dolore. Dulce amarum, leve asperum, prope longe, stare movere, quadratum rotundum. At certe gravius. Nullus est igitur cuiusquam dies natalis. Paulum, cum regem Persem captum adduceret, eodem flumine invectio?
    Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare.
    Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.
    Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit.  
    </Text>


    <Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.h3,
            color:  COLORS.darkpurple 
    }}>Terms & Use  
    </Text>

    <Text style={{
      marginHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
      ...FONTS.body4,
      textAlign:'justify',
            color:  COLORS.Gray 
    }}>At enim hic etiam dolore. Dulce amarum, leve asperum, prope longe, stare movere, quadratum rotundum. At certe gravius. Nullus est igitur cuiusquam dies natalis. Paulum, cum regem Persem captum adduceret, eodem flumine invectio?
    Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare.
    Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.
    Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit.  
    At enim hic etiam dolore. Dulce amarum, leve asperum, prope longe, stare movere, quadratum rotundum. At certe gravius. Nullus est igitur cuiusquam dies natalis. Paulum, cum regem Persem captum adduceret, eodem flumine invectio?
    Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare.
    Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.
    Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. 
    </Text>
          
<View style={{alignItems:'center'}}>

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