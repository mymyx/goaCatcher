import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Label } from 'teaset';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { pxToDp } from '../../utils/stylesKits';
import Avatar from '../Avatar';
import trashCanIcon from '../../images/trash-can.png';
import useIsCurrent from '../../hooks/useIsCurrent';

const AVATAR_SIZE = 30;
const DELETE_ACTION_SIZE = 40;

const getGroundName = (index = 0) => (index === 0 ? 'G' : `LG${index + 1}`);

const renderRightActions = (progress, onPressDelete) => {
  const size = DELETE_ACTION_SIZE / 2;
  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [DELETE_ACTION_SIZE, 0],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={[
        {
          transform: [{ translateX: trans }],
        },
      ]}>
      <TouchableOpacity
        style={styles.deleteActionButton}
        onPress={onPressDelete}>
        <Image source={trashCanIcon} style={{ width: size, height: size }} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const CommentItem = ({
  avatar,
  name,
  comment,
  time,
  hideBorder,
  index,
  userId,
  onPressDelete,
}) => {
  const hideSwipeable = useIsCurrent(userId);
  return (
    <Swipeable
      friction={1.5}
      overshootRight={false}
      renderRightActions={
        hideSwipeable
          ? undefined
          : progress => renderRightActions(progress, onPressDelete)
      }>
      <View style={[styles.container, hideBorder && { borderBottomWidth: 0 }]}>
        <Avatar url={avatar} size={AVATAR_SIZE} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Label text={name || '--'} size="sm" style={styles.name} />
            <Label
              text={getGroundName(index)}
              size="xs"
              style={styles.groundName}
            />
          </View>
          <View style={styles.commentContainer}>
            <Label
              text={comment || '--'}
              size="sm"
              style={styles.comment}
              numberOfLines={0}
            />
            <Label
              text={time || '--'}
              type="detail"
              size="sm"
              style={styles.time}
            />
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: pxToDp(10),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#979797',
    paddingHorizontal: pxToDp(5),
  },
  rightContainer: {
    flex: 1,
    paddingHorizontal: pxToDp(8),
    // backgroundColor: 'red',
  },
  nameContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentContainer: {
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
    transform: [{ translateY: -pxToDp(2) }],
  },
  groundName: {
    transform: [{ translateY: -pxToDp(5) }],
  },
  comment: {
    flex: 1,
  },
  deleteActionButton: {
    width: DELETE_ACTION_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    flex: 1,
  },
});

export default CommentItem;
