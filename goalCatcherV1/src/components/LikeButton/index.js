import React from 'react';
import IconButton from '../IconButton';
import heartActiveIcon from '../../images/heart1.png';
import heartIcon from '../../images/heart2.png';

const getSource = active => (active ? heartActiveIcon : heartIcon);

const LikeButton = ({ active, amount, onPress, disabled, style }) => {
  return (
    <IconButton
      source={getSource(active)}
      text={amount || 0}
      onPress={onPress}
      style={style}
      disabled={disabled}
    />
  );
};

export default LikeButton;
