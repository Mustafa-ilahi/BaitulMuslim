import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {images} from '../../services/utilities/images';
import {colors} from '../../services';

export default function Chat({navigation}) {
  const [newMessage, setNewMessage] = useState('');

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Assalammualaikum, boleh saya nak berkenalan?',
      date: '11/05/2023',
      isSender: false,
      profileImage: images.user1,
    },
    {
      id: 2,
      text: 'Waalikumsalam, saya okay je. Nama awak siapa?',
      date: '11/05/2023',
      isSender: true,
      profileImage: images.user2,
    },
  ]);

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        text: newMessage,
        date: new Date().toLocaleDateString(),
        isSender: true,
        profileImage: images.user2,
      },
    ]);
    setNewMessage('');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image source={images.headerbackIcon} style={styles.headerBack} />
          </TouchableOpacity>
          <Image source={images.user1} style={styles.profileImage} />
          <Text style={styles.userName}>22901</Text>
        </View>

        <ScrollView style={styles.messagesContainer}>
          {messages.map(message => (
            <View
              key={message.id}
              style={
                message.isSender
                  ? styles.messageWrapperRight
                  : styles.messageWrapper
              }>
              {!message.isSender && (
                <Image
                  source={message.profileImage}
                  style={styles.messageProfileImage}
                />
              )}
              <View
                style={
                  message.isSender
                    ? styles.senderMessage
                    : styles.receiverMessage
                }>
                <Text style={styles.messageText}>{message.text}</Text>
                <Text style={styles.messageDate}>{message.date}</Text>
              </View>
              {message.isSender && (
                <Image
                  source={message.profileImage}
                  style={styles.messageProfileImage}
                />
              )}
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mesej"
            placeholderTextColor={colors.grayText}
            value={newMessage}
            onChangeText={setNewMessage}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Image source={images.sendIcon} style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
