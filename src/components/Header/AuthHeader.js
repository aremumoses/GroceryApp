import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
export default function AuthHeader({title,text}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ alignItems: 'center'}}>
      <View>
        <Image
        resizeMode='contain'
          source={icons.headerLogo}
          style={{height: SIZES.height*0.04,marginVertical:SIZES.h1, width: SIZES.width *0.5}}
        />
      </View>
      <Text
        style={{...FONTS.h1, color:COLORS.primary,fontFamily:'NunitoSans-ExtraBold'}}>
       {title}
      </Text>
    </TouchableOpacity>
    <Text
      style={{
        ...FONTS.body4,
        color:COLORS.black,
        maxWidth:'60%',
        textAlign:'center'
      }}>
  {text}
    </Text>
    <View />
  </View>
);
};


const styles = StyleSheet.create({
container: {
  alignItems: 'center',
  justifyContent: 'space-between',
},
});
