import React, { memo } from 'react';

import { useChatStore } from '@/store/chat';
import { chatSelectors } from '@/store/chat/selectors';

import InboxWelcome from './InboxWelcome';
import WelcomeMessage from './WelcomeMessage';

const WelcomeChatItem = memo(() => {
  const showInboxWelcome = useChatStore(chatSelectors.showInboxWelcome);

  // 如果是默认agent，则显示默认欢迎消息
  if (showInboxWelcome) return <InboxWelcome />;

  // 如果是自定义agent，则显示自定义欢迎消息
  return <WelcomeMessage />;
});

export default WelcomeChatItem;
