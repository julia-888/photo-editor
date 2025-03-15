import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import { Text, View, StyleSheet, SectionList, StatusBar, Image } from "react-native";

export default function EmojiPicker() {
  const [chosenEmoji, setChosenEmoji] = useState('emoji-datasource-apple/img/apple/64/1f600.png');

  const onEmojiClick = (event, emojiObject) => {
    console.log(emojiObject.srcElement.src.substring(52, 70));
    setChosenEmoji(String(emojiObject.srcElement.src.substring(29)));
  };

  return (
    <View style={styles.container}>
      {chosenEmoji ? (
        <View>
        <Text style={styles.text}>You chose:</Text>
        <Image source={
          require('emoji-datasource-apple/img/apple/64/1f600.png')
          // {uri: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f600.png',}
        }/>
        </View>
       ) : (
        <Text style={styles.text}>No emoji Chosen</Text>
      )}
      <Picker onEmojiClick={onEmojiClick} 
        rows={4}
        perRow={8}
        emojiSize={32}
        pickerStyle={{ position: 'absolute', bottom: '20px', right: '20px' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 20,
    marginRight: 8,
    borderBottomColor: '#f9c2ff',
    borderBottomWidth: 1
  },
  header: {
    fontSize: 32,
    color: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    padding: 15
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  text: {
    color: "#fff",
  },
});
