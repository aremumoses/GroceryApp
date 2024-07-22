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

const AuthModal = ({
  authModalVisible,
  setAuthModalVisible,
  authMessage,
  title,
  icon,
  text
}) => {
  // Add useEffect to automatically close the modal after 2 seconds
  useEffect(() => {
    if (authModalVisible) {
      const timer = setTimeout(() => {
        setAuthModalVisible(false);
        // }, 2000); // 2 seconds
      }, 20000); // 2 seconds
      return () => clearTimeout(timer);
    }
  }, [authModalVisible, setAuthModalVisible]);

  return (
    <View>
      <Modal
        visible={authModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAuthModalVisible(false)}>
        <View style={styles.authModalContainer}>
          <View style={styles.authModalContent}>
            <View
              style={{
                alignSelf: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setAuthModalVisible(false)}>
                <Image
                  source={icon}
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
              {title}
              </Text>
            </View>

            <Text style={styles.authModalText}>{authMessage}</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setAuthModalVisible(false)}
              style={[styles.transactionCtn]}>
              <Text style={{...FONTS.body3c, color: COLORS.primary}}>
                {text}
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

export default AuthModal;
