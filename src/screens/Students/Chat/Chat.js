import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


const Chat = () => {
    const navigation = useNavigation()

  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi, Nicholas Good Evening 😊', time: '10:45', sentByMe: false },
    { id: '2', text: 'Hi, Morning too Ronald', time: '15:29', sentByMe: true },
    { id: '3', text: 'Lorem ipsum dolor sit amet consectetur. Mi vel eleifend proin est sociis quis ut. Curabitur eu elit maecenas sed ipsum. Eget vitae amet nec placerat at eget id quis.', time: '15:29', sentByMe: true },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim().length > 0) {
      setMessages(prevMessages => [
        ...prevMessages,
        { id: (prevMessages.length + 1).toString(), text: inputText, time: new Date().toLocaleTimeString().slice(0, 5), sentByMe: true }
      ]);
      setInputText('');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.sentByMe ? styles.sentMessage : styles.receivedMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTime}>{item.time}</Text>
          </View>
        )}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          {/* <Ionicons name="send" size={24} color="white" />` */}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  messageList: {
    padding: 10,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E1E8FF',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#9B51E0',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  messageTime: {
    fontSize: 12,
    color: '#555',
    textAlign: 'right',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#9B51E0',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Chat;
