import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Label, Toast } from 'teaset';
import { pxToDp } from '../../utils/stylesKits';
import ModalAlert from '../ModalAlert';
import CommentItem from './CommentItem';
import { useGoalComments } from '../../hooks/useGoalComments';
import validator from '../../utils/validator';
import { commentGoal, deleteComment } from '../../services/goal';

const Comment = ({ goalId, callback }) => {
  const { loading, comments, reload } = useGoalComments(goalId);
  const [commentValue, setCommentValue] = useState('');
  const onSubmit = () => {
    if (validator.isStringEmpty(commentValue)) {
      Toast.fail('Please enter a comment');
      return false;
    }
    commentGoal(goalId, { value: commentValue }).then(() => {
      Toast.success('Success');
      setCommentValue('');
      reload();
      callback(true);
    });
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.commentInput}
        multiline
        value={commentValue}
        onChangeText={setCommentValue}
      />
      <View style={styles.commentButtonContainer}>
        <Button title="send" type="primary" onPress={onSubmit} />
      </View>
      <View style={styles.commentHeader}>
        <Label
          text="comments"
          style={styles.commentHeaderLabel}
          type="detail"
        />
      </View>
      {comments.map((comment, index) => {
        return (
          <CommentItem
            key={comment.id}
            name={comment.name}
            comment={comment.comment}
            time={comment.time}
            index={index}
            avatar={comment.avatar}
            userId={comment.userId}
            onPressDelete={() => {
              ModalAlert.show({
                content: 'Do you really want to delete the comment?',
                onPressOk: async cancel => {
                  deleteComment(comment.id).then(() => {
                    cancel();
                    Toast.success('Success');
                    reload();
                    callback(false);
                  });
                },
              });
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: pxToDp(15),
    paddingVertical: pxToDp(10),
  },
  commentInput: {
    height: pxToDp(100),
    textAlignVertical: 'top',
  },
  commentButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: pxToDp(15),
  },
  commentHeader: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#979797',
    paddingBottom: pxToDp(5),
  },
});

export default Comment;
