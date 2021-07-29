import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import GoalInfoPane from '../../components/GoalInfoPane';
import { useRoute } from '@react-navigation/native';
import NavigationBar from '../../components/NavigationBar';
import MainGoalItem from '../../components/MainGoalItem';
import { useGoalDetail } from '../../hooks/useGoalDetail';

const GoalDetail = () => {
  const { params } = useRoute();
  const goalId = params?.id;
  const [loading, result, reload] = useGoalDetail(goalId);
  const data = Array.isArray(result.records) ? result.records : [];
  return (
    <View style={{ flex: 1 }}>
      <NavigationBar title={result.title} />
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <MainGoalItem
              id={item.id}
              goalId={item.goalId}
              title={item.title}
              description={item.description}
              likeNumber={item.likeNumber}
              commentNumber={item.commentNumber}
              feelings={item.feelings}
              isLike={item.isLike}
              userData={item.userData}
              deleteSuccess={reload}
            />
          );
        }}
        ListHeaderComponent={
          <GoalInfoPane
            goalInfoStatusData={{
              status: result.status,
              favorites: result.favorites,
              likes: result.likes,
            }}
            hideFavorite
            description={result.description}
          />
        }
        ListFooterComponent={() => <View style={{ height: 50 }} />}
      />
    </View>
  );
};

export default GoalDetail;
