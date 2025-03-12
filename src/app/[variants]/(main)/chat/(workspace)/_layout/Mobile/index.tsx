import { headers } from 'next/headers';
import { Flexbox } from 'react-layout-kit';

import MobileContentLayout from '@/components/server/MobileNavLayout';

import { LayoutProps } from '../type';
import ChatHeader from './ChatHeader';
import TopicModal from './TopicModal';

const Layout = async ({ children, topic, conversation, portal }: LayoutProps) => {
  const allHeaders = await headers();
  const fullUrl = allHeaders.get('referer') || '';
  const isInCustom = fullUrl?.includes('/customChat');

  if (isInCustom) {
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
      <MobileContentLayout header={<ChatHeader />} style={{ overflowY: 'hidden' }}>
        {conversation}
        {children}
      </MobileContentLayout>
      <TopicModal>{topic}</TopicModal>
      {portal}
    </>
  );
};

Layout.displayName = 'MobileConversationLayout';

export default Layout;
