export interface ConfigItem {
  id: string;
  name: string;
  value: string | number | boolean;
}

export interface ConfigObject1 {
  key1: string;
  key2: number;
}

export interface ConfigObject2 {
  key1: string;
  key2: boolean;
}

interface AgentInfo {
  title: string;
  url: string;
}

interface CompanyInfo {
  agentInfo: AgentInfo;
  companyName: string;
  logo: string;
}

export interface CompanyForFrontend {
  bohua: CompanyInfo;
  default: CompanyInfo;
  fenxiang: CompanyInfo;
  lig: CompanyInfo;
  palace: CompanyInfo;
  starkitchen: CompanyInfo;
}

export interface ConfigState {
  access_agent_company: string[];
  company_for_frontend: Record<string, CompanyInfo>;
  error: string | null;
  fetchConfig: () => Promise<void>;
  isLoading: boolean;
  redirect_company_url: string[];
}
