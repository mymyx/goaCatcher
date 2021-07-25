import { TabActions } from '@react-navigation/native';
import useIsCurrent from './useIsCurrent';
import { useNavigation } from './useNavigation';

export function useNavigateProfile(userId) {
  const isCurrent = useIsCurrent(userId);
  const { navigtion, push } = useNavigation();
  const onNavigateProfile = () => {
    if (isCurrent) {
      navigtion.dispatch(TabActions.jumpTo('MyProfile'));
    } else {
      push('UserProfile', { id: userId });
    }
  };
  return onNavigateProfile;
}
