'use client';

import React, { memo, useCallback } from 'react';

import { SkeletonList, VirtualizedList } from '@/features/Conversation';
import { useFetchMessages } from '@/hooks/useFetchMessages';
import { useChatStore } from '@/store/chat';
import { chatSelectors } from '@/store/chat/selectors';

import MainChatItem from './ChatItem';
import Welcome from './WelcomeChatItem';

interface ListProps {
  mobile?: boolean;
}

const Content = memo<ListProps>(({ mobile }) => {
  const [isCurrentChatLoaded] = useChatStore((s) => [chatSelectors.isCurrentChatLoaded(s)]);

  useFetchMessages();
  const data = useChatStore(chatSelectors.mainDisplayChatIDs);

  const itemContent = useCallback(
    (index: number, id: string) => <MainChatItem id={id} index={index} />,
    [mobile],
  );

  // 如果当前聊天没有加载，则显示骨架屏
  if (!isCurrentChatLoaded) return <SkeletonList mobile={mobile} />;

  // 如果当前聊天没有消息，则显示欢迎消息
  if (data.length === 0) return <Welcome />;

  // 如果当前聊天有消息，则显示消息列表
  return <VirtualizedList dataSource={data} itemContent={itemContent} mobile={mobile} />;
});

Content.displayName = 'ChatListRender';

export default Content;
