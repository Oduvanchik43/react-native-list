import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import SearchSVG from '../assets/searchSVG';

export default function SearchForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Controller
      name="search"
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.container}>
          <View style={styles.containerIcon}>
            <SearchSVG style={styles.searchIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 50,
  },
  containerIcon: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightWidth: 0,
    borderColor: 'grey',
    paddingLeft: 5,
  },
  searchIcon: {
    height: 20,
    width: 20,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: 'grey',
  },
});
