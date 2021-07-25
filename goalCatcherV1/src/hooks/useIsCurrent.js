import { useUser } from './useUser/useUser';

export default function useIsCurrent(userId) {
  const { user } = useUser();
  return userId === user.id;
}
