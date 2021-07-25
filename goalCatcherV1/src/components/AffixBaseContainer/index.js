import React from 'react';
import { View, StyleSheet } from 'react-native';
import GoalAffixButton from './GoalAffixButton';

const AffixBaseContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <GoalAffixButton />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AffixBaseContainer;
