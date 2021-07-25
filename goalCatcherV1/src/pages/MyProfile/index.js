import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Label } from 'teaset';
import NavigationBar from '../../components/NavigationBar';
import ProfileContainer from '../../components/ProfileContainer';
import theme from '../../theme/default';
import { pxToDp } from '../../utils/stylesKits';
import ModalAlert from '../../components/ModalAlert';
import { logout } from '../../services/user';
import AffixBaseContainer from '../../components/AffixBaseContainer';
import { useNavigation } from '../../hooks/useNavigation';
import tokenUtil from '../../utils/tokenUtil';
import useMyProfile from '../../hooks/useMyProfile';
import { useRoute } from '@react-navigation/native';

const LogOut = () => {
  const { navigtion } = useNavigation();
  return (
    <TouchableOpacity
      style={{ padding: pxToDp(10) }}
      onPress={() => {
        ModalAlert.show({
          content: 'do you want to logout?',
          onPressOk: clonse => {
            logout().then(() => {
              clonse();
              navigtion.reset({
                index: 0,
                routes: [{ name: 'LoginRouter' }],
              });
              tokenUtil.clear();
            });
          },
        });
      }}>
      <Label text="Log Out" style={{ color: theme.primaryColor }} />
    </TouchableOpacity>
  );
};

const MyProfile = () => {
  const route = useRoute();
  const { showBack = false, hideLogout = false, type } = route.params || {};
  const { user } = useMyProfile();
  const { push } = useNavigation();
  return (
    <AffixBaseContainer>
      <NavigationBar
        hideBack={!showBack}
        title="My Profile"
        rightView={hideLogout ? null : <LogOut />}
      />
      <ProfileContainer
        id={user.id}
        hideFollow
        type={type}
        userInfoProps={{
          avatar: user?.avatar,
          name: user?.name,
          followers: user?.followers,
          following: user?.following,
          goldDarts: {
            gold: user?.gold,
            silver: user?.silver,
            bronze: user?.bronze,
            warmHearted: user?.warmHearted,
          },
          onPressFollowing: () => {
            push('MyProfile', { type: 'following' });
          },
          onPressFollowers: () => {
            push('MyProfile', { type: 'followers' });
          },
        }}
      />
    </AffixBaseContainer>
  );
};

export default MyProfile;
