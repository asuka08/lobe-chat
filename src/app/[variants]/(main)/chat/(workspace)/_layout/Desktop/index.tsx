import { headers } from 'next/headers';
import { Suspense } from 'react';
import { Flexbox } from 'react-layout-kit';

import BrandTextLoading from '@/components/Loading/BrandTextLoading';

import { LayoutProps } from '../type';
import ChatHeader from './ChatHeader';
import HotKeys from './HotKeys';
import Portal from './Portal';
import TopicPanel from './TopicPanel';

const Layout = async ({ children, topic, conversation, portal }: LayoutProps) => {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const isCustomChat = pathname?.includes('/customChat');

  if (isCustomChat) {
    return (
      <Flexbox
        height={'100%'}
        horizontal
        style={{ overflow: 'hidden', position: 'relative' }}
        width={'100%'}
      >
        {children}
      </Flexbox>
    );
  }

  return (
    <>
      <ChatHeader />
      <Flexbox
        height={'100%'}
        horizontal
        style={{ overflow: 'hidden', position: 'relative' }}
        width={'100%'}
      >
        <Flexbox
          height={'100%'}
          style={{ overflow: 'hidden', position: 'relative' }}
          width={'100%'}
        >
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
