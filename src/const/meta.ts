import { getCompanyInfo } from '@/const/company';
import { MetaData } from '@/types/meta';

export const DEFAULT_AVATAR = '🤖';
export const DEFAULT_USER_AVATAR = '😀';
export const DEFAULT_BACKGROUND_COLOR = 'rgba(0,0,0,0)';
export const DEFAULT_AGENT_META: MetaData = {};
export const DEFAULT_INBOX_AVATAR = getCompanyInfo().agentInfo.url;
export const DEFAULT_USER_AVATAR_URL = getCompanyInfo().logo;
