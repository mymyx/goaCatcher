import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Label, Input, Select } from 'teaset';

const GoalNameInput = () => {
  return (
    <View style={styles.container}>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default GoalNameInput;
