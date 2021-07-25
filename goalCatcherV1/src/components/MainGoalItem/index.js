import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import UserInfo from './UserInfo';
import Content from './Content';
import Actions from './Actions';
import Comment from './Comment';
import useIsCurrent from '../../hooks/useIsCurrent';
import useGoalLike from '../../hooks/useGoalLike';
import { useGoalDelete } from '../../hooks/useGoalDelete';
import useNavigationProfile from '../../hooks/useNavigationProfile';
import { pxToDp } from '../../utils/stylesKits';

const useShowComment = (defaultShowComment = false) => {
  const [showComment, setShowComment] = useState(defaultShowComment);
  const changeShowComment = () => {
    setShowComment(show => !show);
  };
  return [showComment, changeShowComment];
};

const useNumber = (cuNumber = 0) => {
  const [num, setNum] = useState(cuNumber);

  useEffect(() => {
    setNum(cuNumber);
  }, [cuNumber]);

  return { num, setNum };
};

const MainGoalItem = ({
  id,
  userData,
  title,
  description,
  feelings,
  likeNumber,
  commentNumber,
  isLike,
}) => {
  const { username, lastTime, userId, status, statusStr, avatar } =
    userData || {};
  const isCurrent = useIsCurrent(userId);
  const [showComment, changeShowComment] = useShowComment();
  const { goalLike, changeGoalLike } = useGoalLike(id, isLike);
  const { showDeleteModal } = useGoalDelete(id);
  const { onPush } = useNavigationProfile(userId);
  const { num: likeNum, setNum: setLikeNum } = useNumber(likeNumber);
  const { num: commentNum, setNum: setCommentNum } = useNumber(commentNumber);

  return (
    <View style={styles.container}>
      <UserInfo
        avatar={avatar}
        name={username}
        lastTime={lastTime}
        showDelete={isCurrent}
        status={status}
        statusStr={statusStr}
        onPressClonse={showDeleteModal}
        onPress={onPush}
      />
      <Content goalName={title} description={description} feelings={feelings} />
      <Actions
        likeNumber={likeNum}
        dialogNumber={commentNum}
        isLike={goalLike}
        onDialogPress={changeShowComment}
        onLikePress={() => {
          changeGoalLike(nextLike => {
            setLikeNum(p => (nextLike ? ++p : --p));
          });
        }}
        showBottomBorder={showComment}
      />
      {showComment && (
        <Comment
          goalId={id}
          callback={isAdd => {
            setCommentNum(p => (isAdd ? ++p : --p));
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: pxToDp(10),
  },
});

export default MainGoalItem;
