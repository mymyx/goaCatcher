import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import AffixBaseContainer from '../../components/AffixBaseContainer';
import NavigationBar from '../../components/NavigationBar';
import ProFileContainer from '../../components/ProfileContainer';
import useFetchUserProfile from '../../hooks/useFetchUserProfile';
import { useNavigation } from '../../hooks/useNavigation';

const UserProfile = () => {
  const { params } = useRoute();
  const { id: userId, type } = params || {};
  const { user } = useFetchUserProfile(userId);
  const { push } = useNavigation();
  return (
    <AffixBaseContainer>
      <NavigationBar title="User Profile" />
      <ProFileContainer
        hideDelete
        enableLike
        id={userId}
        type={type}
        isFollow={user.isFollow}
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
            push('UserProfile', { type: 'following' });
          },
          onPressFollowers: () => {
            push('UserProfile', { type: 'followers' });
          },
        }}
      />
    </AffixBaseContainer>
  );
};

export default UserProfile;
