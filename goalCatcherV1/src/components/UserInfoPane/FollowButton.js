import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Label } from 'teaset';
import theme from '../../theme/default';
import { pxToDp } from '../../utils/stylesKits';

const FollowButton = ({ active = false, onChange }) => {
  const text = active ? 'Followed' : 'Follow';
  const backgroundColor = active ? '#C4C4C4' : theme.primaryColor;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ padding: 3 }}
      onPress={() => {
        onChange(!active);
      }}>
      <View style={[styles.container, { backgroundColor }]}>
        <Label text={text} style={{ color: 'white' }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxToDp(20),
    paddingHorizontal: pxToDp(12),
    height: pxToDp(24),
  },
});

export default FollowButton;
