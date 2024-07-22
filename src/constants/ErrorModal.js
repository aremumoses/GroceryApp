import React, {useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import icons from './icons';
import {COLORS, FONTS, SIZES} from './theme';

// interface ErrorModalProps {
//   errorModalVisible: boolean;
//   setErrorModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
//   errorMessage: string;
//   title: string;
// }

const ErrorModal = ({
  errorModalVisible,
  setErrorModalVisible,
  errorMessage,
  title,
}) => {
  // Add useEffect to automatically close the modal after 2 seconds
  useEffect(() => {
    if (errorModalVisible) {
      const timer = setTimeout(() => {
        setErrorModalVisible(false);
        // }, 2000); // 2 seconds
      }, 20000); // 2 seconds
      return () => clearTimeout(timer);
    }
  }, [errorModalVisible, setErrorModalVisible]);

  return (
    <View>
      <Modal
        visible={errorModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setErrorModalVisible(false)}>
        <View style={styles.errorModalContainer}>
          <View style={styles.errorModalContent}>
            <View
              style={{
                alignSelf: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setErrorModalVisible(false)}>
                <Image
                  source={icons.cross}
                  style={{
                    width: SIZES.base * 3.5,
                    height: SIZES.base * 3.2,
                    marginLeft: SIZES.base,
                  }}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <Text
                style={{
                  ...FONTS.h4,
                  color: COLORS.black,
                  left: SIZES.base,
                }}>
                Error
              </Text>
            </View>

            <Text style={styles.errorModalText}>{errorMessage}</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setErrorModalVisible(false)}
              style={[styles.transactionCtn]}>
              <Text style={{...FONTS.body3c, color: COLORS.primary}}>
                {title}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  //modal
  errorModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  errorModalContent: {
    backgroundColor: COLORS.white,
    // width: '80%',
    borderRadius: SIZES.base * 2,
    paddingHorizontal: SIZES.base * 3,
    paddingTop: SIZES.base,
    alignItems: 'center',
    maxWidth: '85%',
    marginVertical: SIZES.height * 0.2,
    paddingBottom: SIZES.base * 2,
  },
  errorModalText: {
    ...FONTS.body4,
    color: COLORS.black,
    width: SIZES.h1 * 7,
    marginVertical: SIZES.base * 1.7,
    textAlign: 'justify'
  },
  closeButton: {
    paddingVertical: SIZES.base,
  },
  transactionCtn: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: SIZES.h1 * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.base,
    marginTop: SIZES.base*2,
    marginLeft: SIZES.base,
    
  },
});

export default ErrorModal;
