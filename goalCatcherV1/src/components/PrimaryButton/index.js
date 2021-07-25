import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'teaset';
import theme from '../../theme/default';

const PrimaryButton = ({ title, containerStyle, style, ...others }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Button
        title={title}
        style={[styles.button, style]}
        titleStyle={{ color: 'white' }}
        {...others}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  button: {
    borderRadius: 100,
    backgroundColor: theme.primaryColor,
    width: 200,
    height: 40,
  },
});

export default PrimaryButton;
