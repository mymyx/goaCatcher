import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from '../pages/account/SignUp';
import Login from '../pages/account/login';
// import Reset from '../pages/Account/login/reset';
// import Main from '../pages/Account/login/main';
// import ResetPassword from "./pages/account/login/restPassword";

// 创建页面栈
const Stack = createStackNavigator();

const LoginNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Login">
    {/* <Stack.Screen name="Main" component={Main} /> */}
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Login" component={Login} />
    {/* <Stack.Screen name="Reset" component={Reset} /> */}
  </Stack.Navigator>
);

export default LoginNavigator;
