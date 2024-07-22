import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CustomModal from '../../../components/Modal/CustomModal';
import AppHeader from '../../../components/Header/AppHeader';
import { COLORS, SIZES,FONTS } from '../../../constants';
import { useNavigation } from '@react-navigation/native';

const PracticeScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalData, setModalData] = useState([]);
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState('');

  const certificates = ['Certificate A', 'Certificate B', 'Certificate C']; // Example certificates

  const handleCertificateSelect = (certificate) => {
    setSelectedCertificate(certificate);
    setModalTitle('Choose Category');
    setModalData(['WASE', 'NECO', 'GCE','WSE', 'ECO', 'GDCE']); // Add categories as needed
    setModalVisible(true);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setModalTitle('Choose Year');
    setModalData(['2021', '2022', '2023']); // Add years as needed
    setStep(2);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setModalTitle('Choose Subject');
    setModalData(['Math', 'English', 'Biology']); // Add subjects as needed
    setStep(3);
  };

  const handleSubjectSelect = (subject) => {
    console.log(`Certificate: ${selectedCertificate}, Category: ${selectedCategory}, Year: ${selectedYear}, Subject: ${subject}`);
    setModalVisible(false);
    navigation.navigate('QuestionScreen')
    setStep(1); // Reset the step for future use
  };

  const closeModal = () => {
    setModalVisible(false);
    setStep(1); // Reset the step for future use
  };

  return (
    <View style={{ flex: 1}}>
      <AppHeader
      title={'Practices Questions'}
      />
      <View style={{paddingHorizontal:SIZES.body2}}> 
      <Text style={{
      // marginHorizontal: SIZES.h3,
      paddingVertical: SIZES.base,
      ...FONTS.h4,
            color:  COLORS.darkpurple ,
          }}>Select Categories</Text>
      <FlatList
        data={certificates}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.certificateItem}
            onPress={() => handleCertificateSelect(item)}
          >
            <Text style={styles.certificateText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <CustomModal
        visible={modalVisible}
        title={modalTitle}
        data={modalData}
        onSelect={
          step === 1
            ? handleCategorySelect
            : step === 2
            ? handleYearSelect
            : handleSubjectSelect
        }
        onClose={closeModal}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  certificateItem: {
    // padding: 15,
    marginVertical: SIZES.base/2,
    // backgroundColor: '#f8f8f8',
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#ddd',
  },
  certificateText: {
    ...FONTS.body3,
    color: COLORS.black,
   textDecorationLine:'underline'
  },
});

export default PracticeScreen;
