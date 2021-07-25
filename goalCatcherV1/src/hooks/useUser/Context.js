import React, { createContext, useMemo, useState } from 'react';

export const userContext = createContext({
  user: {},
  setUser: () => {},
});
export const UserContextProvider = userContext.Provider;

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: 0,
    username: 'Ling',
  });

  const contextValue = useMemo(() => {
    console.log('[current user]', user);
    return {
      user,
      setUser,
    };
  }, [user]);
  return (
    <UserContextProvider value={contextValue}>{children}</UserContextProvider>
  );
}
