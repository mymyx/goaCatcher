import { useNavigation } from '@react-navigation/native';

export default function useNavigationProfile(userId) {
  const navigation = useNavigation();
  const onPush = () => {
    navigation.push('UserProfile', { id: userId });
  };
  return { onPush };
}
