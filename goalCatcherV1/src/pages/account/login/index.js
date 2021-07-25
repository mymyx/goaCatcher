import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import LoginLayout from '../../../components/LoginLayout';
import FormContainer from './components/FormContainer';
import tokenUtil from '../../../utils/tokenUtil';
import { login } from '../../../services/login';

const AccountLogin = () => {
  const navigation = useNavigation();
  useEffect(() => {}, []);

  const onPressCreateAccount = () => {
    navigation.navigate('SignUp');
  };

  const onPressForgot = () => {
    navigation.navigate('Reset');
  };

  const onPressSubmit = (username, passwor, success) => {
    login(username, passwor).then(result => {
      if (result.status) {
        tokenUtil.setToken(result.token);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainRouter' }],
        });
        success && success();
      }
    });
  };

  return (
    <LoginLayout title="Login">
      <FormContainer
        onPressCreateAccount={onPressCreateAccount}
        onPressForgot={onPressForgot}
        onPressSubmit={onPressSubmit}
      />
    </LoginLayout>
  );
};

export default AccountLogin;
