import { useEffect, useState } from 'react';
import { fetchUserProfileById } from '../services/user';

export default function useFetchUserProfile(id) {
  const [userProfile, setUserProfile] = useState({ id });

  useEffect(() => {
    let mounted = true;
    fetchUserProfileById(id).then(data => {
      if (mounted) {
        setUserProfile({
          id,
          ...data,
        });
      }
    });
    return () => {
      mounted = false;
    };
  }, [id]);

  return { user: userProfile };
}
