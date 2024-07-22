import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { images, SIZES, FONTS, COLORS, icons } from '../../constants';
import { useIsFocused, useNavigation } from '@react-navigation/native';


const IntroSlider = () => {
    const navigation = useNavigation();
    const [navigateName, setNavigationName] = useState('')

  
    const slides = [
        {
            key: 'slide1',
            image: icons.boyPosing,
            title: <Text>Let's Begin<Text style={{ color: COLORS.primary }}> Growing</Text> Our Skills. </Text>,
            text: 'The complete App to start learning new skill and growing your skill.',
        }, {
            key: 'slide2',
            image: icons.girlWithBooks,
            title: <Text>Knowledge At your <Text style={{ color: COLORS.primary }}>Fingertips.</Text></Text>,
            text: 'Get Acess To Knowledge Anytime, Anywhere.',
        }, {
            key: 'slide3',
            image: icons.studentGirl,
            title: <Text>Connect,<Text style={{ color: COLORS.primary }}> Learn</Text> Grow. </Text>,
            text: 'Engage In Discussions,Share Insights, And Network With Learners Worldwide.',
        },
    ];
    const isFocused = useIsFocused()



    const _renderItem = ({ item }) => {
        return (
            <View style={styles.page}>
                <StatusBar backgroundColor={COLORS.primary} barStyle='light-content' />
                <Image resizeMode='contain' source={item.image} style={{ height: SIZES.height * 0.55, width: SIZES.width }} />
             
                <View style={styles.container}>
                    <Text style={{ ...FONTS.h1, color: COLORS.black, textAlign: 'left',marginLeft:20}}>{item.title}</Text>
                    <Text style={{ ...FONTS.body3c, color: COLORS.textGray, textAlign: 'left', marginTop: SIZES.h5,marginLeft:20 }}>{item.text}</Text>
                </View>
                <TouchableOpacity 
                onPress={_onEndReached}
                style={styles.skipButtonContainer}>
                    <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const _renderNextButton = () => {
        return (
            <View style={[styles.btnCtn, { borderWidth: 0, backgroundColor: COLORS.primary, width: SIZES.width * 0.5,bottom:40 }]}>
                <Text style={{ ...FONTS.body3c, color: COLORS.white }}>Next</Text>
            </View>
        )
    }
    const _renderDoneButton = () => {
        return (
            <View style={[styles.btnCtn, { borderWidth: 0, backgroundColor: COLORS.primary, width: SIZES.width * 0.5,bottom:40 }]}>
                <Text style={{ ...FONTS.body3c, color: COLORS.white }}>Get Started</Text>
            </View>
        )
    }
    const _renderSkipButton = () => {
        return (
            <View style={styles.btnCtn}>
                <Text style={{ ...FONTS.body3, color: COLORS.black }}>Skip</Text>
            </View>
        )
    }

    const _onEndReached = () => {
        
        navigation.replace('Register')
        // navigation.replace('Lock')

    }

   
    return (
        <AppIntroSlider
            data={slides}
            renderItem={_renderItem}
            renderDoneButton={_renderDoneButton}
            renderNextButton={_renderNextButton}
            // renderSkipButton={_renderSkipButton}
            onDone={_onEndReached}
            onSkip={_onEndReached}
            dotClickEnabled={true}
            showNextButton={true}
            showDoneButton={true}
            showSkipButton={true}
            dotStyle={{height: 6, width: 6, marginBottom: SIZES.h1 * 5, backgroundColor: "transparent", 
                borderRadius: 5,borderColor:COLORS.black,borderWidth:1,right:100,top:30 }}
            activeDotStyle={{ backgroundColor: COLORS.primary, marginBottom: SIZES.h1 * 5, height: 6, width: SIZES.h2,right:100,top:30 }}
        />
    )
};

export default IntroSlider

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.primary,
        paddingTop: SIZES.height * 0.05,
    },
    container: {
        height: SIZES.height * 0.95,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: SIZES.h1 * 1.5,
        borderTopRightRadius: SIZES.h1 * 1.5,
        // alignItems: 'center',
        paddingTop: SIZES.height * 0.04
    },
    btnCtn: {
        height: SIZES.h1 * 1.7,
        width: SIZES.width * 0.35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.h5 ,
        // marginBottom: SIZES.h1*2,
    },
    skipButtonContainer: {
        position: 'absolute',
        top: SIZES.height * 0.05,
        right: SIZES.width * 0.05,
    },
    skipButtonText: {
        ...FONTS.body3,
        color: COLORS.white,
    },
})
