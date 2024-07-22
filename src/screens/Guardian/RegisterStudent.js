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
import React, { useContext, useState } from 'react';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import FormInput from '../../components/Input/FormInput';
import { FormButton } from '../../components/Button/FormButton';
import ErrorModal from '../../constants/ErrorModal';
import { ThemeContext } from '../../components/Utils/ThemeContext';
import AppHeader from '../../components/Header/AppHeader';
export default function RegisterStudent() {
  const navigation = useNavigation();
  const isDarkMode = useContext(ThemeContext);

    // STATE TO TOOGLE MODAL
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');

  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [hidden, setHidden] = useState(true);
  const [modalTitle, setModalTitle] = useState('');

  let darkMode = isDarkMode?.isDarkMode
  return (
    <View>
     <AppHeader
   title={'Register student'}
   />

<ScrollView>

<Text style={{
      ...FONTS.h4,
      padding:SIZES.h2,
            color:  COLORS.darkpurple,
          }}>Enter student details</Text>
     <FormInput
          title={'First name'}
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
          title={'Last name'}
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
          title="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
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
          title="Enter Password"
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


<FormButton
          title="Register student"
          // onPress={() => navigation.navigate('Login')}
          // onPress={handleNextPress}
          btnStyle={{ marginTop: SIZES.h3 ,borderRadius:7,}}
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

     
        </ScrollView>
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