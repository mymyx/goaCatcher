import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'teaset';

const UserSearch = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onPress = () => {
    onSubmit(value);
  };

  return (
    <View style={styles.container}>
      <Input
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder="Search for someone..."
      />
      <Button title="Search" type="primary" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 21,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 21,
  },
  input: {
    flex: 1,
    marginRight: 12,
  },
});

export default UserSearch;
