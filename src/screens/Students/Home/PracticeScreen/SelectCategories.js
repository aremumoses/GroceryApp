import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import CustomModal from '../../../../components/Modal/CustomModal';

const SelectCategories = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalData, setModalData] = useState([]);
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

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
    console.log(`Category: ${selectedCategory}, Year: ${selectedYear}, Subject: ${subject}`);
    setModalVisible(false);
    setStep(1); // Reset the step for future use
  };

  const openModal = () => {
    setModalTitle('Choose Category');
    setModalData(['WASE', 'NECO', 'GCE']); // Add categories as needed
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setStep(1); // Reset the step for future use
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Modal" onPress={openModal} />
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
  );
};

export default SelectCategories;
