import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { COLORS,FONTS, SIZES, icons } from '../../constants';
import AppHeader from '../../components/Header/AppHeader';



const TutorDetails = () => {
  

    return (
        <View style={{flex:1,  backgroundColor: '#FFFFFF'}}>
          <AppHeader
          title={'Request for Tutor'}
          />
          <View  style={styles.container}>
            <Text style={styles.header}>Tutors Name</Text>
            <View style={{alignItems:'center'}}>
            <Image
                source={icons.profile}
                style={styles.profileImage}
            />
            <Text style={styles.name}>Ella J. Alexandra</Text>
            <Text style={styles.email}>ellaalexs@gmail.com</Text>
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur. In vitae in convallis cursus mauris vitae arcu porta. Amet vehicula enim proin ut integer egestas ante tempus ultricies. Urna sapien.
            </Text>
            <View style={styles.statsContainer}>
             
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>10</Text>
                    <Text style={styles.statLabel}>Total Course</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>3</Text>
                    <Text style={styles.statLabel}>In-Progress</Text>
                </View>
                </View>
                <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>2</Text>
                    <Text style={styles.statLabel}>Yet to Start</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>5</Text>
                    <Text style={styles.statLabel}>Completed</Text>
                </View>
            </View>
            <Text style={styles.connectText}>Connect with Tutor</Text>
            <View style={styles.socialIconsContainer}>
                <TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity>
                </TouchableOpacity>
            </View>
        </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    header: {
      ...FONTS.h4,
       color:COLORS.darkpurple,
        marginBottom: 16,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 16,
  },
  name: {
    ...FONTS.h2,
    color:COLORS.darkpurple,
      marginBottom: 4,
  },
  email: {
    ...FONTS.h4,
    color:COLORS.black,
      marginBottom: 16,
  },
  description: {
      textAlign: 'center',
      ...FONTS.body4,
      color:COLORS.black,
      marginBottom: 16,
      paddingHorizontal: 16,
  },
  statsContainer: {
      flexDirection: 'row',
     
   
  
  },
  statBox: {
    padding:10,
      flex: 1,
      flexDirection:'row',
      backgroundColor:COLORS.white,
      alignItems: 'center',
      borderColor:COLORS.Gray,
      borderWidth:0.5,
      margin:5
  },
  statNumber: {
     ...FONTS.h2,
     marginRight:5
  },
  statLabel: {
      ...FONTS.body4,
      color: COLORS.black
  },
  connectText: {
    ...FONTS.h4,
    color:COLORS.darkpurple,
      marginTop: SIZES.h1*2,
  },
  socialIconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
  },

});

export default TutorDetails;
