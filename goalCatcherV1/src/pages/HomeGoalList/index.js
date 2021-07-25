import React from 'react';
import MainGoalItem from '../../components/MainGoalItem';
import { fetchGoalList } from '../../services/goal';
import ProHoalList from './components/ProHoalList';
import AffixBaseContainer from '../../components/AffixBaseContainer';
import HomeStatusBar from './components/StatusBar';

const HomeGoalList = () => {
  return (
    <AffixBaseContainer>
      <HomeStatusBar />
      <ProHoalList
        request={async params => fetchGoalList()}
        renderItem={({ item }) => {
          return (
            <MainGoalItem
              id={item.id}
              userData={{
                userId: item.userId,
                username: item.username,
                lastTime: item.pushTimeStr,
                status: item.status,
                statusStr: item.statusStr,
                avatar: item.avatar,
              }}
              title={item.title}
              feelings={item.feelings}
              description={item.description}
              likeNumber={item.likes}
              commentNumber={item.comments}
              isLike={item.isLike}
            />
          );
        }}
      />
    </AffixBaseContainer>
  );
};

export default HomeGoalList;
