import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../constants';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Intro'); // or navigation.navigate('Intro');
    }, 2000);

    // Cleanup timer if the component is unmounted before the timer finishes
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground source={icons.Splash} style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
