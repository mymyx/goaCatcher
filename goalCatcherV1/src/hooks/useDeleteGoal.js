import { Toast } from 'teaset';
import { deleteGoalById } from '../services/goal';
import ModalAlert from '../components/ModalAlert';

export default function useDeleteGoal(goalId, successCallback) {
  const onPressDelete = () => {
    ModalAlert.show({
      content: 'Do you really want to delete the goal?',
      onPressOk: async close => {
        deleteGoalById(goalId).then(({ msg }) => {
          Toast.success('Success');
          close();
          successCallback && successCallback();
        });
      },
    });
  };

  return {
    onPressDelete,
  };
}
