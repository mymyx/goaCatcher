import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Label, Input } from 'teaset';
import FormLabel from './FormLabel';
import commonStlyes from './styles';
import { pxToDp } from '../../utils/stylesKits';

const Feelings = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <FormLabel title="Feelings:" />
      <Input
        size="lg"
        style={styles.input}
        placeholder="Share your feelings with friends!"
        multiline
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    height: pxToDp(100),
    backgroundColor: commonStlyes.INPUT_SELECT_BACKGROUND,
    marginBottom: commonStlyes.INPUT_SELECT_BOTTOM_SIZE,
  },
});

export default Feelings;
