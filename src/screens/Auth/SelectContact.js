import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
  ActivityIndicator,
  Linking,
  KeyboardAvoidingView,
} from 'react-native';
import FormInput from '../../components/Input/FormInput';
import React, { useContext, useState } from 'react';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import AuthHeader from '../../components/Header/AuthHeader';
import { FormButton, PinButton } from '../../components/Button/FormButton';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { ThemeContext } from '../../components/Utils/ThemeContext';
import ErrorModal from '../../constants/ErrorModal';
import ConfirmationCodeField from '../../components/Input/CodeConfirmation';

export default function SelectContact() {
  const navigation = useNavigation();
  const isDarkMode = useContext(ThemeContext);
    const [value, setValue] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');

  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [modalTitle, setModalTitle] = useState('');

  let darkMode = isDarkMode?.isDarkMode

console.log(value);
  return (
    <View >
      <View style={{paddingTop:SIZES.h1}}>
      <Image
        resizeMode='contain'
          source={icons.headerLogo}
          style={{height: SIZES.height*0.04,marginVertical:SIZES.h1, width: SIZES.width *0.5,alignSelf:'center'}}
        />
     </View>

     <Image
    resizeMode='contain'
    source={icons.password}
    tintColor={SIZES.white}     
    style={{height: 200, width: 200,alignSelf:'center'}}
    />
 
 <Text
    style={{
      ...FONTS.body4,
      color:COLORS.black,
      maxWidth:'80%',
      textAlign:'center',
      alignSelf:'center',
      marginVertical:SIZES.h1
    }}>
Select which contact details should we use to Reset Your Password
  </Text>

  <TouchableOpacity style={{flexDirection:'row',marginHorizontal:SIZES.h1*1.5,marginBottom:SIZES.h2}}
  onPress={()=>navigation.navigate('ContactVerify')}>
<Image
    resizeMode='contain'
    source={icons.circle}
    tintColor={SIZES.white}     
    style={{height: 30, width: 30,alignSelf:'center'}}
    />
    <View style={{marginLeft:SIZES.h2}}>
      <Text style={{...FONTS.body4,color:COLORS.Gray,}}>Via Email</Text>
      <Text style={{...FONTS.h4,color:COLORS.black,}}>debsprisca@gmail.com</Text>
    </View>
</TouchableOpacity>

<TouchableOpacity style={{flexDirection:'row',marginHorizontal:SIZES.h1*1.5}}>
<Image
    resizeMode='contain'
    source={icons.circle}
    tintColor={SIZES.white}     
    style={{height: 30, width: 30,alignSelf:'center'}}
    />
    <View style={{marginLeft:SIZES.h2}}>
      <Text style={{...FONTS.body4,color:COLORS.Gray,}}>Via SMS</Text>
      <Text style={{...FONTS.h4,color:COLORS.black,}}>+234 900 111 2222</Text>
    </View>
</TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: SIZES.h5,
    paddingHorizontal: SIZES.width * 0.04,
  },
  socialCtn: {
    height: SIZES.h1 * 1.5,
    width: SIZES.width * 0.43,
    borderWidth: 1,
    borderRadius: SIZES.h1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  passwordRequirement: {
    ...FONTS.body5,
    color: 'red',
    marginBottom: SIZES.base,
  },
  passwordRequirementMet: {
    ...FONTS.body4,
    color: 'green',
    marginBottom: SIZES.base,
  },
  box: {
    height: SIZES.h1 * 1.2,
    width: SIZES.h1 * 1.2,
    borderRadius: SIZES.h1,
    backgroundColor: COLORS.primary,

    alignItems: 'center',

    justifyContent: 'center',
    position: 'absolute',
    bottom: SIZES.h1 / 2,
    right: SIZES.h2,
    elevation: 1,
  },
  Modalctn: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'flex-end',
    padding: 8,
    // alignContent: 'center',
    // paddingBottom: SIZES.h5,
  },
  box1: {
    height: SIZES.h1 * 1.6,
    width: SIZES.h1 * 1.6,
    borderRadius: SIZES.h1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});