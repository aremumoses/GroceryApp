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

export default function LoginStudent() {
  const navigation = useNavigation();
  const isDarkMode = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [hidden, setHidden] = useState(true);
  const [modalTitle, setModalTitle] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  let darkMode = isDarkMode?.isDarkMode;

  const handleNextPress = () => {
    setSuccessModalVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <AppHeader title={'Login to student'} />

      <ScrollView contentContainerStyle={{ padding: SIZES.h2 }}>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.darkpurple,
          }}
        >
          Enter student details
        </Text>

        <FormInput
          title="Email Address"
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
        />

        <FormInput
          title="Enter Password"
          isHidden={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          hidden={hidden}
          setHidden={setHidden}
        />

        <FormButton
          title="Go to Student's dashboard"
          onPress={handleNextPress}
          btnStyle={{ marginTop: SIZES.h3, borderRadius: 7 }}
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

        <ErrorModal
          errorModalVisible={errorModalVisible}
          setErrorModalVisible={setErrorModalVisible}
          errorMessage={errorMessage}
          title={modalTitle}
        />

        <Modal
          transparent={true}
          animationType="slide"
          visible={successModalVisible}
          onRequestClose={() => setSuccessModalVisible(false)}
        >
          <View style={styles.overlay}>
            <View style={styles.modalView}>
              <Image
                source={icons.account}
                style={{
                  alignSelf: 'center',
                  height: SIZES.h1 * 2,
                  width: SIZES.h1 * 2,
                  marginBottom: SIZES.base,
                }}
                resizeMode="contain"
              />
              <Text style={styles.modalText}>Success!</Text>
              <Text style={styles.modalDescription}>
                You have successfully logged in. Welcome to the Student's dashboard.
              </Text>
              <FormButton
                title={'OK'}
                onPress={() => setSuccessModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
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
    // alignItems: 'center',
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
  },
  box1: {
    height: SIZES.h1 * 1.6,
    width: SIZES.h1 * 1.6,
    borderRadius: SIZES.h1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    ...FONTS.h4,
    color: COLORS.darkpurple,
  },
  modalDescription: {
    textAlign: 'center',
    ...FONTS.body4,
    color: COLORS.black,
    marginBottom: SIZES.h2,
  },
});
