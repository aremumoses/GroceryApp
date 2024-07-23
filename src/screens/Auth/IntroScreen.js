import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { FONTS, icons } from '../../constants';

const IntroScreen = ({ navigation }) => {
  return (
    <ImageBackground source={icons.introbackground} style={styles.container}>
      <View style={styles.content}>
        <Image source={icons.logo} style={{ width: 80, height: 80,bottom:20 }} />
        <Text style={styles.title}>Get your groceries delivered to your home</Text>
        <Text style={styles.subtitle}>
          The best delivery app in town for delivering your daily fresh groceries
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Shop now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop:5*20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#23AA49',
    paddingVertical: 17,
    paddingHorizontal: 100,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default IntroScreen;
