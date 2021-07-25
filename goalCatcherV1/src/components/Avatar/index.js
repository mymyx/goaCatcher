import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { pxToDp } from '../../utils/stylesKits';
import defaultAvatar from '../../images/download.jpg';

const Avatar = ({ size, url, onPress }) => {
  const style = {
    width: pxToDp(size),
    height: pxToDp(size),
    borderRadius: pxToDp(size / 2),
    background: '#eee',
  };
  return (
    <TouchableOpacity activeOpacity={onPress ? 0.8 : 1} onPress={onPress}>
      <Image source={{ uri: url }} style={style} resizeMode="cover" />
    </TouchableOpacity>
  );
};

export default Avatar;
