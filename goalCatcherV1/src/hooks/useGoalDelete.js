import React from 'react';
import { Toast } from 'teaset';
import ModalAlert from '../components/ModalAlert';
import { deleteGoalById } from '../services/goal';

export function useGoalDelete(id, successCallback) {
  const showDeleteModal = () => {
    ModalAlert.show({
      content: 'Do you really want to delete the goal?',
      onPressOk: async clonse => {
        deleteGoalById(id).then(() => {
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
