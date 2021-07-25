import React, { useRef } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { PopoverPicker } from 'teaset';
import { useNavigation } from '@react-navigation/native';
import buttonIcon from '../../images/IconaffixButton.png';
import { pxToDp } from '../../utils/stylesKits';

const ICON_SIZE = pxToDp(60);

const popverItems = [
  {
    title: 'Create A Goal',
    navgationName: 'GoalCreate',
  },
  {
    title: 'Update A Goal',
    navgationName: 'GoalUpdate',
  },
];

const items = popverItems.map(i => i.title);

const GoalAffixButton = ({}) => {
  const touchableRef = useRef();
  const navigation = useNavigation();
  console.log(navigation);
  const onPress = () => {
    touchableRef.current?.measureInWindow((x, y, width, height) => {
      PopoverPicker.show(
        { x: x - ICON_SIZE, y, width, height },
        items,
        -1,
        (_, index) => {
          navigation.push(popverItems[index].navgationName);
        },
      );
    });
  };
  return (
    <TouchableOpacity
      ref={touchableRef}
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.button}>
      <Image source={buttonIcon} resizeMode="cover" style={styles.img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    zIndex: 999,
    bottom: pxToDp(12),
    right: 0,
    // backgroundColor: 'red',
  },
  img: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});

export default GoalAffixButton;
