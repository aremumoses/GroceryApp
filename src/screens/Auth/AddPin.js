import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, icons } from '../../constants';
import AuthHeader from '../../components/Header/AuthHeader';
import { PinButton } from '../../components/Button/FormButton';
import { ThemeContext } from '../../components/Utils/ThemeContext';
import ErrorModal from '../../constants/ErrorModal';
import ConfirmationCodeField from '../../components/Input/CodeConfirmation';

export default function AddPin() {
  const navigation = useNavigation();
  const isDarkMode = useContext(ThemeContext);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const darkMode = isDarkMode?.isDarkMode;

  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <AuthHeader
          title=""
          text="Add a Pin Number to Make Your Account more Secure"
        />
      </View>

      <ScrollView>
        <ConfirmationCodeField value={value} setValue={setValue} />

        <PinButton
          title="Continue"
          onPress={() => navigation.navigate('AddFingerPrint')}
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
      </ScrollView>
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
  continueButton: {
    marginTop: SIZES.h1,
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
