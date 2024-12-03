import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import utilityData from '../data/utilityData';
import UtilitySVG from '../assets/utilitySVG';
import SearchForm from './SearchForm';

const Separator = () => <View style={styles.separator} />;
export default function Utility() {
  const RenderItem = ({ item }) => (
    <View style={styles.listContainer}>
      <View style={styles.listIconContainer}>
        <UtilitySVG style={styles.listIcon} />
      </View>
      <View style={styles.listDetails}>
        <Text style={styles.listTitle}>{item.listTitle}</Text>
        <Text style={styles.listSubItem}>
          {item.items.length > 1
            ? `${item.items.length} providers`
            : `${item.items.length} provider`}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchForm />
      <Separator style={styles.separator} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Utility provider group</Text>
        <FlatList
          data={utilityData}
          renderItem={({ item }) => <RenderItem item={item} />}
          keyExtractor={(item) => item.listNumber}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  contentContainer: {
    // flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    gap: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'flex-start',
    minHeight: 60,
  },
  listIconContainer: {
    height: 35,
    width: 35,
    backgroundColor: '#eeebebcc',
    borderRadius: 100,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listIcon: {
    height: 20,
    width: 20,
    borderColor: '#4e4e51d',
    borderRadius: 100,
  },
  listDetails: {
    width: '100%',
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ggdff',
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 500,
  },
  listSubItem: {
    color: '#9f9f9fdd',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
