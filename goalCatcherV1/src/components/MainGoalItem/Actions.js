import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import LikeButton from '../LikeButton';
import IconButton from '../IconButton';
import dialogIcon from '../../images/Dialog.png';
import { pxToDp } from '../../utils/stylesKits';

const DialogAction = ({ onPress, number }) => {
  return (
    <IconButton
      source={dialogIcon}
      onPress={onPress}
      text={number || 0}
      style={styles.dialogButton}
    />
  );
};

const LikeAction = ({ active, likeNumber, onPress, showBorder }) => {
  return (
    <LikeButton
      style={[styles.likeButton, showBorder ? styles.likeBottomBorder : {}]}
      active={active}
      amount={likeNumber}
      onPress={onPress}
    />
  );
};

const Actions = ({
  onDialogPress,
  onLikePress,
  dialogNumber,
  isLike,
  likeNumber,
  showBottomBorder,
}) => {
  return (
    <View style={styles.container}>
      <DialogAction onPress={onDialogPress} number={dialogNumber} />
      <LikeAction
        active={isLike}
        likeNumber={likeNumber}
        onPress={onLikePress}
        showBorder={showBottomBorder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#DADADA',
    height: 40,
    backgroundColor: 'white',
  },
  dialogButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  likeButton: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: '#DADADA',
  },
  dialogIcon: {
    width: pxToDp(24),
    height: pxToDp(24),
  },
  dialogNumber: {
    color: '#7F7F7F',
  },
  likeBottomBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Actions;
