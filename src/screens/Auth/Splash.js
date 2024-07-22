import {Image, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {SIZES, icons, images, COLORS} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('IntroSlider');
    }, 1500);
  }, []);

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Image
        source={images.splash}
        style={{height: SIZES.height, width: SIZES.width}}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
});
