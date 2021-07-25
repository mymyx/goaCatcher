import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import tokenUtil from '../utils/tokenUtil';

export default function AuthLoading() {
  const navigation = useNavigation();
  useEffect(() => {
    async function initToken() {
      return await tokenUtil.init();
    }

    initToken().then(token => {
      navigation.reset({
        index: 0,
        routes: [{ name: token ? 'MainRouter' : 'LoginRouter' }],
      });
    });
  });
  return null;
}
