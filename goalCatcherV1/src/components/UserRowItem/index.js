import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { Label } from 'teaset';
import { pxToDp } from '../../utils/stylesKits';
import { useNavigation } from '../../hooks/useNavigation';

const UserRowItem = ({
  id,
  avatar = '',
  name = 'Test',
  followers = 0,
  following = 0,
  goals = 0,
}) => {
  const { push } = useNavigation();
  const onPress = () => {
    push('UserProfile', { id });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.itemContainer}
      onPress={onPress}>
      <Image source={{ uri: avatar }} style={styles.itemAvatar} />
      <View>
        <Label text={name} style={{ fontWeight: 'bold' }} />
        <Label
          text={`${followers} followers    ${following} following    ${goals} goals`}
          size="sm"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  itemAvatar: {
    width: pxToDp(30),
    height: pxToDp(30),
    borderRadius: pxToDp(15),
    // backgroundColor: 'red',
    backgroundColor: '#eee',
    marginRight: 10,
  },
});

export default UserRowItem;
