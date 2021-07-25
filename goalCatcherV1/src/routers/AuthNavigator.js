import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from './MainNavigator';
import LoginNavigator from './LoginNavigator';
import AuthLoading from './AuthLoading';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="AuthLoading">
      <Stack.Screen name="AuthLoading" component={AuthLoading} />
      <Stack.Screen name="MainRouter" component={MainNavigator} />
      <Stack.Screen name="LoginRouter" component={LoginNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
