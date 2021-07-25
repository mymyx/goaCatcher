import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Label } from 'teaset';
import { pxToDp } from '../../../../utils/stylesKits';
import PriimaryButton from '../../../../components/PrimaryButton';
import { TouchableOpacity } from 'react-native';
import theme from '../../../../theme/default';
import validator from '../../../../utils/validator';
import Toast from '../../../../utils/Toast';
import Checkbox from 'teaset/components/Checkbox/Checkbox';
import { useLoginForm } from '../../../../hooks/useLoginForm';

const INPUT_HEIGHT = pxToDp(60);

const FormContainer = ({
  onPressCreateAccount,
  onPressForgot,
  onPressSubmit,
}) => {
  const {
    password,
    setIsChecked,
    setPassword,
    setUsername,
    username,
    isChecked,
    saveUserPwd,
  } = useLoginForm();

  const onPress = () => {
    if (
      validator.isStringEmpty(username) ||
      validator.isStringEmpty(password)
    ) {
      Toast.message('Wrong username/email or password!', 2000, 'center');
      return false;
    }
    onPressSubmit(username, password, saveUserPwd);
  };

  return (
    <View>
      <Input
        value={username}
        onChangeText={setUsername}
        placeholder={'username/email'}
        style={{ height: INPUT_HEIGHT }}
      />
      <View style={{ height: 8 }} />
      <Input
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder={'Password'}
        style={{ height: INPUT_HEIGHT }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Checkbox
          title="Remember me"
          size="md"
          titleStyle={{ color: 'grey' }}
          checked={isChecked}
          onChange={setIsChecked}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onPressForgot}
          style={{ paddingHorizontal: 12, paddingVertical: 8 }}>
          <Label
            text="Forgot your password?"
            activeOpacity={0.5}
            style={{ color: theme.primaryColor }}
          />
        </TouchableOpacity>
      </View>
      <PriimaryButton title="Login" onPress={onPress} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Label text="Not a member yet?" type="detail" />
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ paddingHorizontal: 12, paddingVertical: 8 }}
          onPress={onPressCreateAccount}>
          <Label
            text="Create your account"
            style={{ color: theme.primaryColor }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormContainer;
