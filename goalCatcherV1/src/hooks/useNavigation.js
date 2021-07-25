import {
  useNavigation as useNativeNavigation,
  StackActions,
} from '@react-navigation/native';

export function useNavigation() {
  const navigtion = useNativeNavigation();

  const push = (...arg) => {
    navigtion.dispatch(StackActions.push(...arg));
  };

  return { navigtion, push };
}
