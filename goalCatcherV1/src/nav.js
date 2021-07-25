import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './routers/AuthNavigator';
import { UserProvider } from './hooks/useUser/Context';

const UserContext = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

function Nav() {
  return (
    <NavigationContainer>
      <UserContext>
        <AuthNavigator />
      </UserContext>
    </NavigationContainer>
  );
}

export default Nav;
