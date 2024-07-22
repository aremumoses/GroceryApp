import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';
import AppHeader from '../../../components/Header/AppHeader';
import { COLORS, SIZES, FONTS, icons } from '../../../constants';
import FormInput from '../../../components/Input/FormInput';
import { FormButton } from '../../../components/Button/FormButton';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

export default function JoinInstitutionScreen() {
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    setModalVisible(true);
    // Perform other actions like sending the email
  };

  const toggleSelection = (id) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [id]: !prevSelectedItems[id],
    }));
  };

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-a5-d53abb28ba',
      assign: 'Assignment #2',
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie sagittis eros eu. Nunc mi aliquam dui.',
      icon: icons.assignment,
      date: '13th May, 2024'
    },
    {
      id: 'bdcbea2-aed5-d53abb28ba',
      assign: 'Assignment #2',
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie sagittis eros eu. Nunc mi aliquam dui.',
      icon: icons.assignment,
      date: '13th May, 2024'
    },
    {
      id: 'bd7acb-c1b1-46c2-a5-d53abb28ba',
      assign: 'Assignment #2',
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie sagittis eros eu. Nunc mi aliquam dui.',
      icon: icons.assignment,
      date: '13th May, 2024'
    },
    {
      id: 'bd6c2-aed5-d53abb28ba',
      assign: 'Assignment #2',
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie sagittis eros eu. Nunc mi aliquam dui.',
      icon: icons.assignment,
      date: '13th May, 2024'
    },
    {
      id: 'bd7acbea-c1b1-46c2-a5-d5b28ba',
      assign: 'Assignment #2',
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet consectetur. Iaculis vivamus molestie sagittis eros eu. Nunc mi aliquam dui.',
      icon: icons.assignment,
      date: '13th May, 2024'
    },
  ];

  const Item = ({ id, title, icon, description, date, assign }) => (
    <TouchableOpacity style={styles.itemg}>
      <View style={styles.item}>
        <CheckBox
          value={!!selectedItems[id]}
          onValueChange={() => toggleSelection(id)}
          style={styles.checkbox}
          tintColors={{ true: COLORS.primary, false: COLORS.Gray }}
        />
        <Image
          resizeMode="contain"
          source={icon}
          style={{
            height: SIZES.h1,
            width: SIZES.h1,
          }}
        />
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.darkpurple,
            padding: SIZES.base,
            textDecorationLine: 'underline',
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, paddingBottom: SIZES.h1 }}>
      <AppHeader title={'Institutions'} />
      <View style={{ marginHorizontal: SIZES.body3 }}>
        <Text
          style={{
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            ...FONTS.h4,
            color: COLORS.darkpurple,
          }}
        >
          Invites from Institution(s)
        </Text>

        <Text
          style={{
            marginHorizontal: SIZES.base,
            ...FONTS.body4,
            color: COLORS.black,
            maxWidth: '80%',
          }}
        >
          The following institutions have sent you an invite, click to join now
        </Text>

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              assign={item.assign}
              date={item.date}
              title={item.title}
              icon={item.icon}
              description={item.description}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <Text
          style={{
            marginHorizontal: SIZES.base,
            ...FONTS.body4,
            color: COLORS.black,
          }}
        >
          Enter your email address here, you will be added to the institution(s) you selected.
        </Text>
        <Text
          style={{
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            ...FONTS.h4,
            color: COLORS.darkpurple,
          }}
        >
          View More
        </Text>

        <FormInput placeholder={'Enter email address'} />

        <FormButton title={'Submit Email'} onPress={handleSubmit} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.overlay}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Request has been made!</Text>
              <FormButton title={'OK'} onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: SIZES.h1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.base,
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  itemg: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.h3,
    shadowColor: '#000',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    ...FONTS.h4,
    color: COLORS.darkpurple,
  },
});
