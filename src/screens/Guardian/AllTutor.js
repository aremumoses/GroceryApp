import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { COLORS,FONTS, SIZES, icons } from '../../constants';
import AppHeader from '../../components/Header/AppHeader';
import { useNavigation } from '@react-navigation/native';


const tutors = [
    { id: '1', name: 'Tutor Name', description: 'Lorem ipsum dolor sit amet', imageUrl: icons.assignment },
    { id: '2', name: 'Tutor Name', description: 'Lorem ipsum dolor sit amet', imageUrl: icons.assignment },
    { id: '3', name: 'Tutor Name', description: 'Lorem ipsum dolor sit amet', imageUrl: icons.assignment },
    { id: '4', name: 'Tutor Name', description: 'Lorem ipsum dolor sit amet', imageUrl: icons.assignment },
    { id: '5', name: 'Tutor Name', description: 'Lorem ipsum dolor sit amet', imageUrl: icons.assignment },
    { id: '6', name: 'Tutor Name', description: 'Lorem ipsum dolor sit amet', imageUrl: icons.assignment },
    { id: '7', name: 'Tutor Name', description: 'Lorem ipsum dolor sit amet', imageUrl: icons.assignment },
];


const AllTutor = () => {
const navigation = useNavigation()

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.tutorItem} onPress={navigation.navigate('TutorDetails')}>
            <Image source={ item.imageUrl } style={styles.tutorImage} />
            <View style={styles.tutorInfo}>
                <Text style={styles.tutorName}>{item.name}</Text>
                <Text style={styles.tutorDescription}>{item.description}</Text>
            </View>
            <TouchableOpacity style={styles.viewTutorButton}>
                <Text style={styles.viewTutorText}>View tutor</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={{flex:1,  backgroundColor: '#FFFFFF'}}>
          <AppHeader
          title={'Request for Tutor'}
          />
          <View  style={styles.container}>
            <Text style={styles.header}>All Tutors</Text>
            <FlatList
                data={tutors}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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
      ...FONTS.h3,
       color:COLORS.darkpurple,
        marginBottom: 16,
    },
    tutorItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    tutorImage: {
        width: 50,
        height: 50,
        // borderRadius: 25,
        marginRight: 16,
    },
    tutorInfo: {
        flex: 1,
    },
    tutorName: {
       ...FONTS.h4,
       color:COLORS.darkpurple,

    },
    tutorDescription: {
      ...FONTS.body4,
      color:COLORS.textGray,
    },
    viewTutorButton: {
        padding: 8,
    },
    viewTutorText: {
      ...FONTS.h4,
      color:COLORS.primary,
    },
});

export default AllTutor
