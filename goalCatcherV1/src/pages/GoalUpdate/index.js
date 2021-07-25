import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { Button, Toast } from 'teaset';
import GoalNameSelect from '../../components/GoalFormComponents/GoalNameSelect';
import GoalStatus from '../../components/GoalFormComponents/Status';
import SubmitButton from '../../components/GoalFormComponents/SubmitButton';
import Feelings from '../../components/GoalFormComponents/Feelings';
import NavigationBar from '../../components/NavigationBar';
import bgImg from '../../images/loginbackground.png';
import { pxToDp } from '../../utils/stylesKits';
import { updateGoal } from '../../services/goal';
import validator from '../../utils/validator';
import { useNavigation, StackActions } from '@react-navigation/native';

const GoalUpdate = () => {
  const [goalId, setGoalId] = useState(0);
  const [feelings, setFeelings] = useState('');
  const [statusValue, setStatusValue] = useState('achieved');
  const navigation = useNavigation();

  const validate = () => {
    if (goalId === 0) {
      Toast.fail('Please select a goal');
      return false;
    }
    if (validator.isStringEmpty(feelings)) {
      Toast.fail('Please input your Feelings.');
      return false;
    }
    return true;
  };
  const onPressSubmit = () => {
    if (validate()) {
      updateGoal(goalId, {
        status: statusValue,
        content: feelings,
      }).then(({ reward }) => {
        Toast.success('Success');
        if (!validator.isStringEmpty(reward)) {
          navigation.dispatch(
            StackActions.replace('Congrats', { type: reward }),
          );
        } else {
          navigation.goBack();
        }
      });
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <NavigationBar title="Update A Goal" />
      <ImageBackground source={bgImg} style={styles.imageBackground}>
        <ScrollView style={styles.scrollView}>
          <GoalNameSelect value={goalId} onChange={setGoalId} />
          <GoalStatus value={statusValue} onChange={setStatusValue} />
          <Feelings value={feelings} onChange={setFeelings} />
          <SubmitButton title="Update" onPress={onPressSubmit} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    paddingHorizontal: pxToDp(20),
    paddingVertical: pxToDp(10),
  },
});

export default GoalUpdate;
