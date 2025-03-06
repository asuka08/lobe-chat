'use client';

import { ReactNode, useEffect } from 'react';

import { useConfigStore } from './store';

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const fetchConfig = useConfigStore((state) => state.fetchConfig);

  useEffect(() => {
    fetchConfig();
  }, []);

  return children;
};
