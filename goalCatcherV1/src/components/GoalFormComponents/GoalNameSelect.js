import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Label, Select } from 'teaset';
import commonStyles from './styles';
import { fetchAllCurrentGoal } from '../../services/goal';

const GoalNameSelect = ({ value, onChange }) => {
  const [goalList, setGoalList] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetchAllCurrentGoal().then(list => {
      if (mounted) {
        const goalList = Array.isArray(list) ? list : [];
        onChange && onChange(list[0]?.value);
        setGoalList(goalList);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Label text="Goal Name" size="lg" style={styles.label} />
      <Select
        value={value}
        getItemText={item => item.label}
        getItemValue={item => item.value}
        onSelected={item => {
          onChange && onChange(item.value);
        }}
        size="lg"
        items={goalList}
        style={styles.sleect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: commonStyles.LABEL_BOTTOM_SIZE,
  },
  sleect: {
    backgroundColor: commonStyles.INPUT_SELECT_BACKGROUND,
    marginBottom: commonStyles.INPUT_SELECT_BOTTOM_SIZE,
  },
});

export default GoalNameSelect;
