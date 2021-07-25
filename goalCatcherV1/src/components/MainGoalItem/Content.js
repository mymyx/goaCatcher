import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Label } from 'teaset';
import { pxToDp } from '../../utils/stylesKits';

const SPACE_SIZE = 15;

const Space = () => <View style={{ height: SPACE_SIZE }} />;

const Feelings = ({ feelings }) => {
  return (
    <React.Fragment>
      <Space />
      <Label text="Feelings:" size="sm" />
      <Label text={feelings} size="sm" />
    </React.Fragment>
  );
};

const Description = ({ description }) => (
  <React.Fragment>
    <Space />
    <Label text="Description:" size="sm" />
    <Label text={description} size="sm" />
  </React.Fragment>
);

const Content = ({ goalName, description, feelings }) => {
  return (
    <View style={styles.container}>
      <Label text="Goal:" size="sm" />
      <Label text={goalName || '--'} size="sm" />
      {feelings && <Feelings feelings={feelings} />}
      {description && <Description description={description} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: pxToDp(12),
    paddingVertical: pxToDp(10),
    backgroundColor: 'white',
  },
});

export default Content;
