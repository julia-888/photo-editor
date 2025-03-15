import { useState } from 'react';
import { View, StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import EmojiPicker from './EmojiPicker'

type Props = {
  onSelect: (image: ImageSource) => void;
  onCloseModal: () => void;
};

export default function CreateEmojiInfo() {
  return (
    <View>
      <EmojiPicker />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});