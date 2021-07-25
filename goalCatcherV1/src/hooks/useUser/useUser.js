import { useContext } from 'react';
import { userContext } from './Context';

export function useUser() {
  return useContext(userContext);
}
