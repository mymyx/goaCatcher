import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Label, Select } from 'teaset';
import commonStyle from './styles';

const selectItems = [
  {
    text: 'achieving',
    value: 'achieving',
  },
  {
    text: 'achieved',
    value: 'achieved',
  },
];

const GoalStatus = ({ value = selectItems[0].value, onChange }) => {
  return (
    <View style={styles.container}>
      <Label text="Status:" size="lg" style={styles.label} />
      <Select
        size="lg"
        items={selectItems}
        getItemValue={item => item.value}
        getItemText={item => item.text}
        onSelected={item => {
          onChange && onChange(item.value);
        }}
        value={value}
        style={styles.select}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: commonStyle.LABEL_BOTTOM_SIZE,
  },
  select: {
    backgroundColor: commonStyle.INPUT_SELECT_BACKGROUND,
    marginBottom: commonStyle.INPUT_SELECT_BOTTOM_SIZE,
  },
});

export default GoalStatus;
