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
import { FormButton } from '../../components/Button/FormButton';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { ThemeContext } from '../../components/Utils/ThemeContext';
import ErrorModal from '../../constants/ErrorModal';
import AuthModal from '../../constants/AuthModal';

export default function NewPassword() {
  const navigation = useNavigation();
  const isDarkMode = useContext(ThemeContext);
  const [isSelected, setSelection] = useState(false)
    // STATE TO TOOGLE MODAL
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');

  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const [authMessage, setAuthMessage] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLengthMet, setIsLengthMet] = useState(false);
  const [isUppercaseMet, setIsUppercaseMet] = useState(false);
  const [isLowercaseMet, setIsLowercaseMet] = useState(false);
  const [isNumberMet, setIsNumberMet] = useState(false);
  const [isSymbolMet, setIsSymbolMet] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [modalTitle, setModalTitle] = useState('');

  let darkMode = isDarkMode?.isDarkMode

  const handleNextPress = () => {
   

    if (!cpassword) {
      setErrorMessage('confirm Password is required!');
      setModalTitle('COnfirm Password required');
      setErrorModalVisible(true);
      return;
    }

    // if (!telephone) {
    //   setErrorMessage(
    //     'Number is required! \nPlease enter a valid phone number.',
    //   );
    //   setModalTitle('PHONENUMBER REQUIRED');
    //   setErrorModalVisible(true);
    //   return;
    // }

    // // const sanitizedPhone = telephone.replace(/^0+/, '0');
    // const sanitizedPhone = telephone.replace(/^\+234/, '0');

    // if (sanitizedPhone.length < 10 || sanitizedPhone.length > 15) {
    //   setErrorMessage('Invalid Number \nPlease enter a valid phone number.');
    //   setModalTitle('PHONENUMBER REQUIRED');
    //   setErrorModalVisible(true);
    //   return;
    // }

    // setTelephone(sanitizedPhone);

    if (!password) {
      setErrorMessage('Password is required!');
      setModalTitle('PASSWORD REQUIRED');
      setErrorModalVisible(true);
      return;
    }
    // if (!toggleCheckBox) {
    //   setErrorMessage('Terms & Conditions is not accepted');
    //   setModalTitle('REQUIRED');
    //   setErrorModalVisible(true);
    //   return;
    // }

    // setIsLoading(true);
   navigation.navigate('Login')
    // registerMutation.mutate({
    //   firstName,
    //   lastName,
    //   password,
    //   email,
    //   telephone,
    //   referral
    // });
  };

  return (
    <View >
  
  <View style={{paddingTop:SIZES.h1}}>
      <Image
        resizeMode='contain'
          source={icons.headerLogo}
          style={{height: SIZES.height*0.04,marginVertical:SIZES.h2, width: SIZES.width *0.5,alignSelf:'center'}}
        />
     </View>
    
   <Image
    resizeMode='contain'
    source={icons.password}
    style={{height: 200, width: 200,alignSelf:'center'}}
    />

<Text
    style={{
      ...FONTS.h3,
      color:COLORS.black,
      marginHorizontal:SIZES.h2,
      marginBottom:SIZES.h3
    }}>
Create Your New Password
  </Text>


<FormInput
          title="Password"
          isHidded={true}
          value={password}
          // onChangeText={setPassword}
          forgetPassword={undefined}
          keyboardType={undefined}
          onChangeText={(text) => {
            setPassword(text);
            // Check password requirements
            setIsLengthMet(text.length >= 7);
            setIsUppercaseMet(/[A-Z]/.test(text));
            setIsLowercaseMet(/[a-z]/.test(text));
            setIsNumberMet(/[0-9]/.test(text));
            setIsSymbolMet(/[!@#$%^&*'"()_+{}\[\]:;<>,.?~\\/-]/.test(text));
          }}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          hidden={hidden}
          setHidden={setHidden}
          maxLength={undefined}
        />

<FormInput
          title="Confirm Password"
          isHidded={true}
          value={cpassword}
          // onChangeText={setPassword}
          forgetPassword={undefined}
          keyboardType={undefined}
          onChangeText={(text) => {
            setcPassword(text);
            // Check password requirements
            setIsLengthMet(text.length >= 7);
            setIsUppercaseMet(/[A-Z]/.test(text));
            setIsLowercaseMet(/[a-z]/.test(text));
            setIsNumberMet(/[0-9]/.test(text));
            setIsSymbolMet(/[!@#$%^&*'"()_+{}\[\]:;<>,.?~\\/-]/.test(text));
          }}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          hidden={hidden}
          setHidden={setHidden}
          maxLength={undefined}
        />



{/* {isPasswordFocused && (
          <View style={{ marginTop: SIZES.base }}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.black,
                marginBottom: SIZES.base,
              }}>
              Your password must be:
            </Text>
            <Text
              style={
                isLengthMet
                  ? styles.passwordRequirementMet
                  : styles.passwordRequirement
              }>
              ☑ Password must be at least 7 characters long,
            </Text>
            <Text
              style={
                isUppercaseMet
                  ? styles.passwordRequirementMet
                  : styles.passwordRequirement
              }>
              ☑ Contains one uppercase letter,
            </Text>
            <Text
              style={
                isLowercaseMet
                  ? styles.passwordRequirementMet
                  : styles.passwordRequirement
              }>
              ☑ Contains one lowercase letter,
            </Text>
            <Text
              style={
                isNumberMet
                  ? styles.passwordRequirementMet
                  : styles.passwordRequirement
              }>
              ☑ Contains a number,
            </Text>
            <Text
              style={
                isSymbolMet
                  ? styles.passwordRequirementMet
                  : styles.passwordRequirement
              }>
              ☑ Contains a symbol.
            </Text>
          </View>
        )} */}

<FormButton
          title="Continue"
          onPress={handleNextPress}
          btnStyle={{ marginTop: SIZES.h1*2 ,borderRadius:7,}}
        />



        
{isLoading && (
          <Modal
            transparent={true}
            animationType="fade"
            onRequestClose={() => setIsLoading(false)}>
            <View style={styles.modalContainer}>
              <ActivityIndicator size="large" color={COLORS.white} />
            </View>
          </Modal>
        )}

        <View style={{ height: SIZES.h1 * 0.6 }} />

        <ErrorModal
          errorModalVisible={errorModalVisible}
          setErrorModalVisible={setErrorModalVisible}
          errorMessage={errorMessage}
          title={modalTitle}
        />

{/* <AuthModal
          authModalVisible={authModalVisible}
          setAuthModalVisible={setAuthModalVisible}
          // authMessage={authMessage}
          title={'Password Reset'}
          authMessage={'A 4-digit OTP has been sent to your email address. Enter OTP to reset your password. You will be redirected to the Home Page in a Few Seconds.'}
          icon={icons.password}
        /> */}
        <KeyboardAvoidingView
          style={{ marginTop: SIZES.base,flexDirection:'row',justifyContent:'center' }}>
            
  
        </KeyboardAvoidingView>
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