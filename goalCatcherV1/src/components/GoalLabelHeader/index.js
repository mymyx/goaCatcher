import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Label } from 'teaset';
import { pxToDp } from '../../utils/stylesKits';

const GoalLabelHeader = ({ renderText, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Label text={renderText()} style={styles.label} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: pxToDp(20),
    marginBottom: pxToDp(14),
    paddingHorizontal: pxToDp(5),
  },
  label: {
    fontWeight: 'bold',
    paddingHorizontal: pxToDp(5),
    paddingBottom: pxToDp(5),
  },
});

export default GoalLabelHeader;
