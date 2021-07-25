import React from 'react';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { Label } from 'teaset';
import { pxToDp } from '../../utils/stylesKits';

const iconSize = pxToDp(24);

const Icon = ({ source }) => {
  return <Image source={source} style={styles.icon} resizeMode="contain" />;
};

const IconButton = ({ source, text, onPress, disabled, style }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, style]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Icon source={source} />
      <Label text={text} style={styles.label} size="lg" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: pxToDp(5),
  },
  icon: {
    width: iconSize,
    height: iconSize,
  },
  label: {
    color: '#7F7F7F',
    width: pxToDp(60),
    textAlign: 'center',
    paddingHorizontal: pxToDp(5),
  },
});

export default IconButton;
