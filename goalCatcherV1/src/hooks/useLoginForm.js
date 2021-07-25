import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import Storage from '@react-native-async-storage/async-storage';

export function useLoginForm(submit) {
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useFocusEffect(
    useCallback(() => {
      Storage.getItem('UserPwdDATA').then(value => {
        const { username, password } = JSON.parse(value) || {};
        setUsername(username);
        setPassword(password);
      });
    }, []),
  );

  const saveUserPwd = () => {
    if (isChecked) {
      Storage.setItem('UserPwdDATA', JSON.stringify({ username, password }));
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    isChecked,
    setIsChecked,
    saveUserPwd,
  };
}
