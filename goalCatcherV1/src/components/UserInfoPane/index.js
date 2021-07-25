import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Label } from 'teaset';
import { pxToDp } from '../../utils/stylesKits';
import userInfoPaneBg from '../../images/userInfoPaneBg.jpg';
import testAvatar from '../../images/unnamed.jpg';
import UserGoldDart from '../UserGoldDart';
import FollowButton from './FollowButton';
import { TouchableOpacity } from 'react-native';

const getFollowersText = (followers = 0) => {
  return `${followers} followers`;
};

const getFollowingText = (following = 0) => {
  return `${following} following`;
};

const getNameText = name => {
  return name || '----';
};

const getGoldDartData = goldDarts => {
  const { gold, silver, bronze, warmHearted } = goldDarts || {};
  return {
    gold,
    silver,
    bronze,
    warmHearted,
  };
};

const UserInfoPane = ({
  avatar,
  name,
  followers,
  following,
  goldDarts,
  hideFollow,
  isFollow,
  onFollowChange,
  onPressFollowers,
  onPressFollowing,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={userInfoPaneBg}
        style={styles.bgImage}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Image source={{ uri: avatar }} style={styles.infoAvatar} />
        <View style={styles.infoContentContainer}>
          <View style={styles.infoContentHeader}>
            <View style={styles.infoNameContainer}>
              <Label
                text={getNameText(name)}
                size="xl"
                style={styles.infoName}
              />
              {!hideFollow && (
                <FollowButton active={isFollow} onChange={onFollowChange} />
              )}
            </View>
            <View style={styles.infoFollowerContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ padding: 6 }}
                onPress={onPressFollowers}>
                <Label
                  text={getFollowersText(followers)}
                  style={styles.infoFolloerText}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ padding: 6 }}
                onPress={onPressFollowing}>
                <Label
                  text={getFollowingText(following)}
                  style={styles.infoFolloerText}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoContentGoldDart}>
            <UserGoldDart data={getGoldDartData(goldDarts)} />
          </View>
        </View>
      </View>
    </View>
  );
};

const AVATAR_SIZE = 100;
const BG_HEIGHT_SIZE = 117;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  bgImage: {
    width: '100%',
    height: pxToDp(BG_HEIGHT_SIZE),
  },
  infoContainer: {
    flexDirection: 'row',
    transform: [{ translateY: -pxToDp(AVATAR_SIZE / 2) }],
    paddingHorizontal: pxToDp(12),
    // backgroundColor: 'red',
  },
  infoAvatar: {
    width: pxToDp(AVATAR_SIZE),
    height: pxToDp(AVATAR_SIZE),
    borderRadius: pxToDp(AVATAR_SIZE / 2),
    backgroundColor: '#eee',
  },
  infoContentContainer: {
    paddingLeft: pxToDp(10),
    // backgroundColor: 'red',
    flex: 1,
  },
  infoContentHeader: {
    height: pxToDp(AVATAR_SIZE / 2),
    // backgroundColor: 'red',
    transform: [{ translateY: -pxToDp(10) }],
    // flex: 1,
  },
  infoContentGoldDart: {
    height: pxToDp(AVATAR_SIZE / 2),
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: pxToDp(10),
  },
  infoNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  infoName: {
    fontWeight: '700',
  },
  infoFollowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  infoFolloerText: {
    fontWeight: '700',
    // paddingRight: pxToDp(10),
    // lineHeight: pxToDp(24),
    // padding: pxToDp(10),
    // backgroundColor: 'red',
  },
});

export default UserInfoPane;
