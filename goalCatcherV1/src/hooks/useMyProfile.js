import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { fetchUserProfileById } from '../services/user';
import { useUser } from '../hooks/useUser/useUser';

export default function useMyProfile() {
  const { user, setUser } = useUser();

  useFocusEffect(
    useCallback(() => {
      fetchUserProfileById().then(user => {
        setUser(user);
      });
    }, []),
  );

  return { user };
}
