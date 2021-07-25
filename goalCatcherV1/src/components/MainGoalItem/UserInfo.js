import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Label } from 'teaset';
import { pxToDp } from '../../utils/stylesKits';
import Avatar from '../Avatar';
import closeIcon from '../../images/closeIcon.png';

const AVATAR_SIZE = 40;

const getStatusText = (status, statusStr) => {
  const statusText = {
    created: 'Created the goal',
    updated: 'Updated the progress',
    achieved: 'Achieved a goal',
  };
  return statusStr || statusText[status];
};

const UserInfo = ({
  name,
  avatar,
  status,
  statusStr,
  lastTime,
  showDelete,
  onPressClonse,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPress}>
      <Avatar size={AVATAR_SIZE} url={avatar} onPress={onPress} />
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <View style={[styles.nameContainer]}>
            <Label text={name} size="lg" style={styles.name} />
            <Label
              text={getStatusText(status, statusStr)}
              style={styles.statusStr}
            />
          </View>
          {showDelete && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.clonseButton}
              onPress={onPressClonse}>
              <Image source={closeIcon} style={{ width: 21, height: 21 }} />
            </TouchableOpacity>
          )}
        </View>
        <Label text={lastTime} type="detail" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: pxToDp(12),
    paddingVertical: pxToDp(6),
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: pxToDp(10),
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    // backgroundColor: 'red',
  },
  statusStr: {
    color: '#FD6D04',
    paddingHorizontal: pxToDp(5),
    flex: 1,
  },
  clonseButton: {
    paddingHorizontal: pxToDp(10),
    paddingVertical: pxToDp(5),
    // backgroundColor: 'red',
  },
});

export default UserInfo;
