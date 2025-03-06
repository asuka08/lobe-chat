import { create } from 'zustand';

import { post } from '@/utils/xzRequest';

import { ConfigState } from './types';

const initialState: Omit<ConfigState, 'fetchConfig'> = {
  access_agent_company: [],
  company_for_frontend: {},
  error: null,
  isLoading: false,
  redirect_company_url: [],
};

export const useConfigStore = create<ConfigState>((set) => ({
  ...initialState,
  fetchConfig: async () => {
    try {
      set({ error: null, isLoading: true });
      const res = await post('json_config/get_by_keys', {
        keys: ['access_agent_company', 'company_for_frontend', 'redirect_company_url'],
      });

      set({
        access_agent_company: res.data.access_agent_company || [],
        company_for_frontend: res.data.company_for_frontend || {},
        error: null,
        isLoading: false,
        redirect_company_url: res.data.redirect_company_url || [],
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : '获取配置失败',
        isLoading: false,
      });
    }
  },
}));
