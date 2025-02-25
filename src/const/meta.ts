import { BRANDING_LOGO_URL } from '@/const/branding';
import { MetaData } from '@/types/meta';
import { getCompanyInfo } from '@/const/company';

export const DEFAULT_AVATAR = '🤖';
export const DEFAULT_USER_AVATAR = '😀';
export const DEFAULT_BACKGROUND_COLOR = 'rgba(0,0,0,0)';
export const DEFAULT_AGENT_META: MetaData = {};
export const DEFAULT_INBOX_AVATAR = BRANDING_LOGO_URL || getCompanyInfo().agentInfo.url;
export const DEFAULT_USER_AVATAR_URL = BRANDING_LOGO_URL || getCompanyInfo().logo;
