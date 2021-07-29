import React from 'react';
import { Toast } from 'teaset';
import ModalAlert from '../components/ModalAlert';
import { updateDelete } from '../services/goal';

export function useGoalDelete(goalId, postId, successCallback) {
  const showDeleteModal = () => {
    ModalAlert.show({
      content: 'Do you really want to delete the goal?',
      onPressOk: async clonse => {
        updateDelete(goalId, postId).then(() => {
          Toast.message('Sucesss');
          successCallback && successCallback();
          clonse();
        });
      },
    });
  };

  return {
    showDeleteModal,
  };
}
