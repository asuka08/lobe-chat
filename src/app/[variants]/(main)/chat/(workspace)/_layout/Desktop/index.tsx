import { Suspense } from 'react';
import { Flexbox } from 'react-layout-kit';

import BrandTextLoading from '@/components/Loading/BrandTextLoading';

import { LayoutProps } from '../type';
import ChatHeader from './ChatHeader';
import HotKeys from './HotKeys';
import Portal from './Portal';
import TopicPanel from './TopicPanel';

const Layout = async ({ children, topic, conversation, portal }: LayoutProps) => {
  // 如果你发现聊天页的布局发生了奇怪的情况 那大概率是因为这个地方我把几个容器的定位从relative改成了unset
  // 是用来解决子路由突破父级路由的layout限制做的特殊处理
  // 如果你需要调整布局 请参考这个文件以及[subChat]/page.tsx
  // 如果你问我为什么要使用动态路由语法 其实也没解决啥问题 因为最后还是用了绝对定位覆盖内容区的土方法

  return (
    <>
      <ChatHeader />
      <Flexbox
        height={'100%'}
        horizontal
        style={{ overflow: 'hidden', position: 'unset' }}
        width={'100%'}
      >
        <Flexbox height={'100%'} style={{ overflow: 'hidden', position: 'unset' }} width={'100%'}>
          {conversation}
        </Flexbox>
        {children}
        <Portal>
          <Suspense fallback={<BrandTextLoading />}>{portal}</Suspense>
        </Portal>
        <TopicPanel>{topic}</TopicPanel>
      </Flexbox>
      <HotKeys />
    </>
  );
};

Layout.displayName = 'DesktopConversationLayout';

export default Layout;
