import React from 'react';
import { Animated, TouchableOpacity, Image, StyleSheet } from 'react-native';
import trashCanIcon from '../../images/trash-can.png';

const DELETE_ACTION_SIZE = 50;

const SwipeableRightActions = ({ progress, onPressDelete, style }) => {
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
        style={[styles.deleteActionButton, style]}
        onPress={onPressDelete}>
        <Image source={trashCanIcon} style={{ width: size, height: size }} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  deleteActionButton: {
    width: DELETE_ACTION_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    flex: 1,
  },
});

export default SwipeableRightActions;
