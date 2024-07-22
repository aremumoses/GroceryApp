import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { useLinkProps, useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../Utils/ThemeContext';
import CheckBox from '@react-native-community/checkbox';
import { icon } from '../../constants/icons';


const FormInput = ({
  placeholder,height,
  title,
  value,
  onChangeText,
  isHidded,
  forgetPassword,
  keyboardType,
  onFocus,
  onBlur,
  hidden,
  setHidden,
  maxLength,
  editable,
  isPersonalInfo,
  enableBio,
  isHiddedd,lefticon,
  numberOfLines,multiline,padding
}) => {
  // const [hidden, setHidden] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const isDarkMode  = useContext(ThemeContext)
  // STATE TO TOOGLE MODAL
  const [toggleCheckBox, setToggleCheckBox] = useState(false);



  const navigation = useNavigation();
  return (
   
    <View style={{ marginBottom: SIZES.base, marginHorizontal:SIZES.base*3 }}>
       <Text
      style={{
        ...FONTS.body4,
        color:COLORS.text,
        marginBottom:SIZES.base*0.5
      }}>
      {title}
    </Text>
    
      <View style={[styles.container,]}>
      {lefticon && (
          <TouchableOpacity
            >
            <Image
            resizeMode='contain'
              source={icons.account}
              style={{
                height: SIZES.h2,
                width: SIZES.h2,
                marginRight: SIZES.base,
                tintColor: isDarkMode? COLORS.white : COLORS.black
              }}
            />
          </TouchableOpacity>
        )}
        <TextInput
         multiline={multiline}
        numberOfLines={numberOfLines}
          secureTextEntry={hidden}
          placeholder={placeholder}
          placeholderTextColor={COLORS.dark2}
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          style={{ flex: 1, ...FONTS.body3c, color: isDarkMode? COLORS.white:COLORS.black,padding:padding }}
          maxLength={maxLength}
          editable={editable}
          
        />
        {isHidded && (
          <TouchableOpacity onPress={() => {
            isPersonalInfo ? enableBio() : setHidden(!hidden);
            }}>
            <Image
              source={hidden ? icons.eye : icons.eyeoff}
              style={{
                height: SIZES.h2,
                width: SIZES.h2,
                marginRight: SIZES.base,
                tintColor: isDarkMode? COLORS.white : COLORS.black
              }}
            />
          </TouchableOpacity>
        )}
         {isHiddedd && (
          <TouchableOpacity>
            <Image
              source={icons.blueSearch}
              style={{
                height: SIZES.h2*2,
                width: SIZES.h2*2,
                marginLeft: SIZES.h1,
                marginTop:SIZES.base
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      {forgetPassword && (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>


          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ borderRadius: SIZES.h1 }}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
             tintColors={{ true:COLORS.primary, false: COLORS.Gray}}

              />
            </View>
            <Text


              style={{ ...FONTS.body4b, color: isDarkMode? COLORS.white: COLORS.black, }}>Remember Passsword</Text>
          </View>


          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{ marginTop: SIZES.base * 0.5 }}>
            <Text
              style={{ ...FONTS.body5, color: COLORS.primary, textAlign: 'right' }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>



        </View>
      )}
      {/* { error &&
      <Text
      style={{...FONTS.body5, color: COLORS.dark,}}>
      Please enter the correct input</Text>

      } */}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    height: SIZES.h1 * 1.7,
    backgroundColor:COLORS.gray60,
    borderRadius: SIZES.base,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.base,
  },
});
