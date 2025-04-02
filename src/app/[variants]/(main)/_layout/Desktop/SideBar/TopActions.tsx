import { ActionIcon } from '@lobehub/ui';
import { Bot, Compass, FolderClosed, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAccessAgentCompany } from '@/store/config/hooks';
import { useGlobalStore } from '@/store/global';
import { SidebarTabKey } from '@/store/global/initialState';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import { useSessionStore } from '@/store/session';

export interface TopActionProps {
  isPinned?: boolean | null;
  tab?: SidebarTabKey;
}

const TopActions = memo<TopActionProps>(({ tab, isPinned }) => {
  const { t } = useTranslation('common');
  const switchBackToChat = useGlobalStore((s) => s.switchBackToChat);
  const { showMarket, enableKnowledgeBase } = useServerConfigStore(featureFlagsSelectors);
  const access_agent_company = useAccessAgentCompany();

  // 获取当前公司信息
  const currentCompanyKey =
    typeof window !== 'undefined'
      ? window.location.href.match(/^https:\/\/(.*?)-os\.syngents\.cn/)?.[1] || 'default'
      : 'default';

  // 检查当前公司是否有权限访问 agents
  const canAccessAgents = access_agent_company.includes(currentCompanyKey);

  return (
    <>
      <Link
        aria-label={t('tab.chat')}
        href={'/chat'}
        onClick={(e) => {
          e.preventDefault();
          switchBackToChat(useSessionStore.getState().activeId);
        }}
      >
        <ActionIcon
          active={tab === SidebarTabKey.Chat && !isPinned}
          icon={MessageSquare}
          placement={'right'}
          size="large"
          title={t('tab.chat')}
        />
      </Link>
      {enableKnowledgeBase && (
        <Link aria-label={t('tab.files')} href={'/files'}>
          <ActionIcon
            active={tab === SidebarTabKey.Files}
            icon={FolderClosed}
            placement={'right'}
            size="large"
            title={t('tab.files')}
          />
        </Link>
      )}
      
      {/* {showMarket && ( 
        <Link aria-label={t('tab.discover')} href={'/discover'}>
          <ActionIcon
            active={tab === SidebarTabKey.Discover}
            icon={Compass}
            placement={'right'}
            size="large"
            title={t('tab.discover')}
          />
        </Link>
      )} */}
      {canAccessAgents && (
        <Link aria-label={t('tab.chat')} href={'/agents'}>
          <ActionIcon
            active={tab === SidebarTabKey.Agents && !isPinned}
            icon={Bot}
            placement={'right'}
            size="large"
            title={t('tab.agents')}
          />
        </Link>
      )}
    </>
  );
});

export default TopActions;
