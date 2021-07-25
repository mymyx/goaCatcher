import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Button } from 'teaset';
import { pxToDp } from '../../utils/stylesKits';

const SubmitButton = ({ title, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={title}
        type="primary"
        style={styles.button}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: pxToDp(60),
    justifyContent: 'center',
  },
  button: {
    width: pxToDp(200),
    height: pxToDp(40),
    borderRadius: pxToDp(100),
  },
});

export default SubmitButton;
