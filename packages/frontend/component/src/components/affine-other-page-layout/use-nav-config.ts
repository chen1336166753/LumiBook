import { useMemo } from 'react';

export interface NavItem {
  title: string;
  path: string;
}

export const useNavConfig = () => {
  return useMemo<NavItem[]>(() => [], []);
};
