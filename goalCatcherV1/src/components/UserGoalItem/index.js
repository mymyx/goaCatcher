import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Label } from 'teaset';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { pxToDp } from '../../utils/stylesKits';
import LikeButton from '../LikeButton';
import theme from '../../theme/default';
import { useNavigation } from '@react-navigation/native';
import useGoalLike from '../../hooks/useGoalLike';
import SwipeableRightActions from '../SwipeableRightActions';
import useDeleteGoal from '../../hooks/useDeleteGoal';
import moment from 'moment';

const AchieveStatus = ({ active }) => {
  const label = active ? 'Achieved' : 'Achieving';
  const backgroundColor = active ? theme.primaryColor : '#979797';
  return (
    <View
      style={{
        backgroundColor,
        paddingHorizontal: pxToDp(5),
        paddingVertical: pxToDp(3),
        borderRadius: 10,
      }}>
      <Label text={label} size="sm" style={{ color: 'white' }} />
    </View>
  );
};

const UserGoalItem = ({
  id = 0,
  title = '',
  description = '',
  dateTime = '',
  isAchieve = false,
  isLike = true,
  likeAmount = 0,
  hideDelete = false,
  enableLike = false,
  deleteCallback,
}) => {
  const navigation = useNavigation();
  const { goalLike, changeGoalLike } = useGoalLike(id, isLike);
  const { onPressDelete } = useDeleteGoal(id, deleteCallback);
  const onPress = () => {
    navigation.push('GoalDetail', { id });
  };
  return (
    <Swipeable
      friction={1.5}
      overshootRight={false}
      renderRightActions={
        hideDelete
          ? undefined
          : progress => {
              return (
                <SwipeableRightActions
                  progress={progress}
                  onPressDelete={onPressDelete}
                  style={{
                    paddingRight: 10,
                  }}
                />
              );
            }
      }>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={onPress}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Label text={title || '----'} size="lg" style={{ flex: 1 }} />
            <AchieveStatus active={isAchieve} />
          </View>
          <Label
            text={`Description: ${description || '---'}`}
            style={styles.contentLabel}
          />
          <View style={styles.bottomContainer}>
            <Label
              text={dateTime ? moment(dateTime).format('YYYY-MM-DD') : '----'}
              size="md"
              type="detail"
            />
            <LikeButton
              active={enableLike ? goalLike : false}
              amount={likeAmount}
              onPress={changeGoalLike}
              disabled={!enableLike}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const PADDING_H_SIZE = pxToDp(14);

const styles = StyleSheet.create({
  container: {
    paddingLeft: pxToDp(21),
    paddingRight: pxToDp(15),
    paddingBottom: pxToDp(14),
  },
  contentContainer: {
    backgroundColor: 'white',
    // border: 1px solid rgba(0, 0, 0, 0.2);
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: PADDING_H_SIZE,
    paddingVertical: pxToDp(5),
    // backgroundColor: 'red',
    // flex: 1,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentLabel: {
    paddingVertical: pxToDp(5),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default UserGoalItem;
