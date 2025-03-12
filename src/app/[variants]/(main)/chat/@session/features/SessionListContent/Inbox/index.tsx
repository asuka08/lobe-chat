import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getCompanyInfo } from '@/const/company';
import { DEFAULT_INBOX_AVATAR } from '@/const/meta';
import { INBOX_SESSION_ID } from '@/const/session';
import { CUSTOM_CHAT_URL, SESSION_CHAT_URL } from '@/const/url';
import { useSwitchSession } from '@/hooks/useSwitchSession';
import { useServerConfigStore } from '@/store/serverConfig';
import { useSessionStore } from '@/store/session';

import ListItem from '../ListItem';

const Inbox = memo(() => {
  const { t } = useTranslation('chat');
  const mobile = useServerConfigStore((s) => s.isMobile);
  const activeId = useSessionStore((s) => s.activeId);
  const switchSession = useSwitchSession();
  const router = useRouter();

  const pathname = usePathname();
  const isInCustom = pathname?.includes('/customChat');

  return (
    <>
      <Link
        aria-label={t('inbox.title', { agentName: getCompanyInfo().agentInfo.title })}
        href={SESSION_CHAT_URL(INBOX_SESSION_ID, mobile)}
        onClick={(e) => {
          e.preventDefault();
          switchSession(INBOX_SESSION_ID);
        }}
      >
        <ListItem
          active={activeId === INBOX_SESSION_ID && !isInCustom}
          avatar={DEFAULT_INBOX_AVATAR}
          title={t('inbox.title', { agentName: getCompanyInfo().agentInfo.title })}
        />
      </Link>
      {/* flag */}
      <Link
        aria-label="外部网站"
        href={CUSTOM_CHAT_URL('https://workflow.syngents.cn/workflow/x1Ef4fJHqZmagWBV')}
        onClick={(e) => {
          e.preventDefault();
          router.push(CUSTOM_CHAT_URL('https://workflow.syngents.cn/workflow/x1Ef4fJHqZmagWBV'));
        }}
      >
        <ListItem active={isInCustom} avatar="🌐" title="拓展对话" />
      </Link>
    </>
  );
});

export default Inbox;
