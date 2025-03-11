'use client';

import { SideNav } from '@lobehub/ui';
import { parseAsBoolean, useQueryState } from 'nuqs';
import { Suspense, memo } from 'react';

import { useActiveTabKey } from '@/hooks/useActiveTabKey';
import { useGlobalStore } from '@/store/global';
import { systemStatusSelectors } from '@/store/global/selectors';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

import Avatar from './Avatar';
import PinList from './PinList';
import TopActions from './TopActions';

const Top = () => {
  const [isPinned] = useQueryState('pinned', parseAsBoolean);
  const sidebarKey = useActiveTabKey();

  return <TopActions isPinned={isPinned} tab={sidebarKey} />;
};

const Nav = memo(() => {
  const inZenMode = useGlobalStore(systemStatusSelectors.inZenMode);
  const { showPinList } = useServerConfigStore(featureFlagsSelectors);

  return (
    !inZenMode && (
      <SideNav
        avatar={<Avatar />}
        // 隐藏底部actions => lobe的github 和 使用文档 的跳转入口
        // bottomActions={<BottomActions />}
        style={{ height: '100%', zIndex: 100 }}
        topActions={
          <Suspense>
            <Top />
            {showPinList && <PinList />}
          </Suspense>
        }
      />
    )
  );
});

Nav.displayName = 'DesktopNav';

export default Nav;
