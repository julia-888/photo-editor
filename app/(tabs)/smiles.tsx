import { Text, View, StyleSheet, SectionList, StatusBar } from "react-native";
import CreateEmojiInfo from "@/components/Smiles/CreateEmojiInfo";
import CircleButton from '@/components/Common/CircleButton';
import { useState } from "react";


export default function AboutScreen() {
  const DATA = [
    {
      title: 'Happy',
      data: [{emoji: `\u{1F600}`, description: "dfjjfjf"}, {emoji: `\u{1F600}`, description: "dfjjfjf"}, {emoji: `\u{1F600}`, description: "dfjjfjf"}],
    },
    {
      title: 'Sad',
      data: [{emoji: `\u{1F600}`, description: "dfjjfjf"}, {emoji: `\u{1F600}`, description: "dfjjfjf"}, {emoji: `\u{1F600}`, description: "dfjjfjf"}],
    },
    {
      title: 'Animals',
      data: [{emoji: `\u{1F600}`, description: "dfjjfjf"}, {emoji: `\u{1F600}`, description: "dfjjfjf"}, {emoji: `\u{1F600}`, description: "dfjjfjf"}],
    },
    {
      title: 'Symbolic',
      data: [{emoji: `\u{1F600}`, description: "dfjjfjf"}, {emoji: `\u{1F600}`, description: "dfjjfjf"}, {emoji: `\u{1F600}`, description: "dfjjfjf"}],
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onAddInfo = () => {
    setIsModalVisible(true);
  };  

  return (
    <View style={styles.container}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item, index) => String(item) + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.emoji} - {item.description}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
      <CircleButton onPress={onAddInfo} />

      { isModalVisible && <CreateEmojiInfo />}
    </View>
  );
}

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
