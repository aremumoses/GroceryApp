import { View, Text, ScrollView, Image, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS, SIZES, FONTS, icons } from '../../../constants'
import FormInput from '../../../components/Input/FormInput'
import { FormButton } from '../../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'

export default function AssignmentSubmissionScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    setModalVisible(true);
    // Perform other actions like sending the email
  };
  return (
    <ScrollView style={{ backgroundColor: COLORS.white }}>
      <AppHeader title={'Classrooms'} />

      <Text style={{
        marginHorizontal: SIZES.h1,
        marginVertical: SIZES.base,
        ...FONTS.h4,
        color: COLORS.darkpurple,
      }}>Assignment Name</Text>

      <Text style={{
        marginTop: SIZES.h3,
        marginHorizontal: SIZES.h1,
        ...FONTS.h4,
        color: COLORS.darkpurple,
      }}>Task</Text>

      <Text style={{
        marginHorizontal: SIZES.h1,
        ...FONTS.body4,
        color: COLORS.Gray,
      }}>Lorem ipsum dolor sit amet consectetur. Sed orci morbi.</Text>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SIZES.h1,
        marginVertical: SIZES.base,
      }}>
        <Image
          resizeMode='contain'
          source={icons.attachment}
          style={{
            height: SIZES.h2,
            width: SIZES.h2,
          }}
        />
        <Text style={{
          marginHorizontal: SIZES.base,
          ...FONTS.body4,
          color: COLORS.darkpurple,
        }}>Check attachment</Text>
      </View>

      <Text style={{
        marginHorizontal: SIZES.h1,
        marginVertical: SIZES.base,
        ...FONTS.h4,
        marginTop: SIZES.h3,

        color: COLORS.darkpurple,
      }}>Mode of Submission</Text>

      <Text style={{
        marginHorizontal: SIZES.h1,
        ...FONTS.body4,
        color: COLORS.Gray,
      }}>Submit link to assignment, upload a document or enter answer manually.</Text>

      <FormInput style={{ marginBottom: 10 }} placeholder={'Enter Link'} />
      <FormInput style={{ marginBottom: 10 }} placeholder={'Upload file'} />
      
      <Text style={{
        marginVertical: SIZES.h1,
        ...FONTS.h3,
        color: COLORS.Gray,textAlign:'center'
      }}>OR</Text>
      <FormInput
        style={{ marginBottom: 10 }}
        height={40}
        multiline={true}
        numberOfLines={6}
        placeholder={'Enter answer'}
      />

      <View style={{ marginTop: SIZES.h1 * 2 }}></View>

      <FormButton
        title={'Submit Assignment'}
        onPress={handleSubmit}
      />
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
    </ScrollView>
  )
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