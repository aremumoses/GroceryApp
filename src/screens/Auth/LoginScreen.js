import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../constants';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={icons.backarrow} style={styles.backIcon} />
      </TouchableOpacity>
      <Image source={icons.logo} style={styles.logo} />
      <Text style={styles.title}>Enter your mobile number</Text>
      <Text style={styles.subtitle}>We will send you a verification code</Text>
      <TextInput
        style={styles.input}
        placeholder="+44 (000) 000-00-00"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        By clicking on "Continue" you are agreeing to our{' '}
        <Text style={styles.termsLink}>terms of use</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
    marginTop:50
  },
  title: {
    fontSize: 30,
    paddingHorizontal:30,
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
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#23AA49',
    paddingVertical: 17,
    paddingHorizontal: 10*12,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  termsText: {
    color: '#666',
    textAlign: 'center',
    fontSize: 14,
    paddingHorizontal:30
  },
  termsLink: {
    color: '#5D5FEF',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
