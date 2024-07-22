import React from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SIZES, icons,FONTS, COLORS } from '../../constants';

const CustomModal = ({ visible, title, data, onSelect, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.modalTitle}>{title}</Text>
         <TouchableOpacity onPress={onClose}>
          <Image
      resizeMode='contain'
      source={icons.cancel}
      tintColor={SIZES.white}     
      style={{height: 20, width: 20,}}
      />
      </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => onSelect(item)}
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
       
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    ...FONTS.h3,
    color:COLORS.darkpurple,
    marginBottom: SIZES.base,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    ...FONTS.body3,
    color:COLORS.black,
    marginBottom: SIZES.base,
  },
 
});

export default CustomModal;
