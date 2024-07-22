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

export default function AddFingerPrint() {
  const navigation = useNavigation();
  const isDarkMode = useContext(ThemeContext);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const darkMode = isDarkMode?.isDarkMode;

  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <AuthHeader
          title=""
          text="Add a Fingerprint to Make your Account more Secure"
        />
      </View>

      <Image
        resizeMode="contain"
        source={icons.biometric}
        tintColor={SIZES.white}
        style={styles.biometricImage}
      />

      <Text style={styles.instructionsText}>
        Please Put Your Finger on the Fingerprint Scanner to get Started.
      </Text>

      <FormButton
        title="Continue"
        onPress={() => navigation.navigate('SelectContact')}
        btnStyle={styles.continueButton}
      />

      {isLoading && (
        <Modal
          transparent={true}
          animationType="fade"
          onRequestClose={() => setIsLoading(false)}
        >
          <View style={styles.modalContainer}>
            <ActivityIndicator size="large" color={COLORS.white} />
          </View>
        </Modal>
      )}

      <View style={styles.bottomSpacing} />

      <ErrorModal
        errorModalVisible={errorModalVisible}
        setErrorModalVisible={setErrorModalVisible}
        errorMessage={errorMessage}
        title={modalTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: SIZES.h5,
    paddingHorizontal: SIZES.width * 0.04,
  },
  headerContainer: {
    marginBottom: SIZES.h1 * 2,
    paddingTop: SIZES.h1,
  },
  biometricImage: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  instructionsText: {
    ...FONTS.body4,
    color: COLORS.black,
    maxWidth: '60%',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: SIZES.h1 * 2,
  },
  continueButton: {
    marginTop: SIZES.h1 * 2,
    borderRadius: 7,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  bottomSpacing: {
    height: SIZES.h1 * 0.6,
  },
});
