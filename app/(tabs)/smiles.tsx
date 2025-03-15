import { Text, View, StyleSheet, SectionList, StatusBar } from "react-native";

export default function AboutScreen() {
  const DATA = [
    {
      title: 'Main dishes',
      data: [{emoji: `\u{1F600}`, description: "dfjjfjf"}, {emoji: `\u{1F600}`, description: "dfjjfjf"}, {emoji: `\u{1F600}`, description: "dfjjfjf"}],
    },    
    // {
    //   title: 'Sides',
    //   data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    // },
    // {
    //   title: 'Drinks',
    //   data: ['Water', 'Coke', 'Beer'],
    // },
    // {
    //   title: 'Desserts',
    //   data: ['Cheese Cake', 'Ice Cream'],
    // },
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
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
