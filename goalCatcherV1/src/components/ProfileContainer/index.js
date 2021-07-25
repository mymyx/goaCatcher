import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import UserInfoPane from '../UserInfoPane';
import UserGoalItem from '../UserGoalItem';
import GoalLabelHeader from '../GoalLabelHeader';
import { pxToDp } from '../../utils/stylesKits';
import { useFollowUser } from '../../hooks/useFollowUser';
import {
  fetchUserGoalList,
  fetchUserFollowed,
  fetchUserFollowing,
} from '../../services/user';
import { useFocusEffect } from '@react-navigation/native';
import UserRowItem from '../../components/UserRowItem';

const ListHeaderComponent = ({
  userInfoProps,
  hideFollow,
  follow,
  userId,
  renderFooter,
}) => {
  const { isFollow, onChangeFollow } = useFollowUser(userId, follow);
  return (
    <View>
      <UserInfoPane
        {...userInfoProps}
        isFollow={isFollow}
        onFollowChange={onChangeFollow}
        hideFollow={hideFollow}
      />
      <GoalLabelHeader
        renderText={renderFooter}
        style={styles.goalLabelHeader}
      />
    </View>
  );
};

function useListItemData(type, id) {
  const [dataSource, setDataSource] = useState([{}]);
  const [itemCount, setItemCount] = useState(0);

  const fetchList = useCallback(() => {
    switch (type) {
      case 'item': {
        fetchUserGoalList(id).then(({ data }) => {
          setDataSource(data);
          setItemCount(data.length);
        });
        break;
      }
      case 'followers': {
        fetchUserFollowed(id).then(data => {
          setDataSource(data);
          setItemCount(data.length);
        });
        break;
      }
      case 'following': {
        fetchUserFollowing(id).then(data => {
          setDataSource(data);
          setItemCount(data.length);
        });
        break;
      }
    }
  }, [type, id]);

  useFocusEffect(
    useCallback(() => {
      fetchList();
    }, [fetchList]),
  );

  const bindRenderItem = (item, hideDelete, enableLike) => {
    const renderItemsByType = {
      item: (
        <UserGoalItem
          {...item}
          hideDelete={hideDelete}
          enableLike={enableLike}
          deleteCallback={() => {
            fetchList();
          }}
        />
      ),
      following: <UserRowItem {...item} />,
      followers: <UserRowItem {...item} />,
    };
    return renderItemsByType[type];
  };

  return {
    dataSource,
    itemCount,
    bindRenderItem,
  };
}

const ProfileContainer = ({
  id,
  userInfoProps,
  hideDelete,
  hideFollow,
  isFollow,
  enableLike,
  type = 'item',
}) => {
  const { dataSource, itemCount, bindRenderItem } = useListItemData(type, id);
  return (
    <FlatList
      data={dataSource}
      ListHeaderComponent={
        <ListHeaderComponent
          userInfoProps={userInfoProps}
          hideFollow={hideFollow}
          follow={isFollow}
          userId={id}
          renderFooter={() => {
            const texts = {
              item: `${itemCount} Goals`,
              following: `${itemCount} Following`,
              followers: `${itemCount} Followers`,
            };
            return texts[type];
          }}
        />
      }
      renderItem={({ item }) => bindRenderItem(item, hideDelete, enableLike)}
      keyExtractor={(_, index) => index.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  goalLabelHeader: {
    transform: [{ translateY: -pxToDp(14) }],
    marginBottom: 0,
  },
});

export default ProfileContainer;
