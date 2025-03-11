import { useConfigStore } from './store';

export const useConfig = () => {
  const { access_agent_company, company_for_frontend, error, isLoading, redirect_company_url } =
    useConfigStore();
  return { access_agent_company, company_for_frontend, error, isLoading, redirect_company_url };
};

export const useCompanyConfig = () => {
  const company_for_frontend = useConfigStore((state) => state.company_for_frontend);
  return company_for_frontend;
};

export const useRedirectCompanyUrl = () => {
  const redirect_company_url = useConfigStore((state) => state.redirect_company_url);
  return redirect_company_url;
};

export const useAccessAgentCompany = () => {
  const access_agent_company = useConfigStore((state) => state.access_agent_company);
  return access_agent_company;
};

export const useConfigLoading = () => {
  const isLoading = useConfigStore((state) => state.isLoading);
  return isLoading;
};

export const useConfigError = () => {
  const error = useConfigStore((state) => state.error);
  return error;
};
