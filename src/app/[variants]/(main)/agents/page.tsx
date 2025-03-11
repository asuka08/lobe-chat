'use client';

import { createStyles } from 'antd-style';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useAccessAgentCompany, useCompanyConfig } from '@/store/config/hooks';
import { useUserStore } from '@/store/user';
import { userProfileSelectors } from '@/store/user/selectors';
import { getIconByKey } from '@/utils/iconMapper';
import { post } from '@/utils/xzRequest';

import AgentsCards from './components/AgentsCards';
import Header from './components/Header';
import Menu from './components/Menu';

const AgentsContent = () => {
  const useStyles = createStyles(({ css, token }) => ({
    container: css`
      // padding: ${token.paddingLG}px;
    `,
  }));
  const { styles, cx } = useStyles();
  const router = useRouter();

  const [topicList, setTopicList] = useState<any[]>([]);
  const [agentsList, setAgentsList] = useState<any[]>([]);

  const userProfile = useUserStore(userProfileSelectors.userProfile);

  useEffect(() => {
    console.log('当前用户信息:', userProfile);
  }, [userProfile]);

  const searchParams = useSearchParams();
  const access_agent_company = useAccessAgentCompany();
  const company_for_frontend = useCompanyConfig();

  useEffect(() => {
    const currentCompanyKey =
      typeof window !== 'undefined'
        ? window.location.href.match(/^https:\/\/(.*?)-os\.syngents\.cn/)?.[1] || 'default'
        : 'default';

    if (!access_agent_company.includes(currentCompanyKey)) {
      router.replace('/chat');
    }
  }, [access_agent_company, company_for_frontend, router]);

  const selectedKey = useMemo(() => {
    const topic = searchParams.get('topic');
    return topic || 'all';
  }, [searchParams]);

  useEffect(() => {
    post('/assistant/topic/list/v2').then((res: any) => {
      const AllIcon = getIconByKey('全部');
      // 为每个菜单项添加图标
      const processedList = res.map((category: any) => {
        const CategoryIcon = getIconByKey(category.label);
        const baseItem = {
          icon: <CategoryIcon size={16} />,
          key: category.key,
          label: category.label,
        };

        // 只有通用类别才有子菜单
        if (category.children) {
          return {
            ...baseItem,
            children: category.children.map((subItem: any) => {
              const SubIcon = getIconByKey(subItem.label);
              return {
                icon: <SubIcon size={16} />,
                key: subItem.key,
                label: subItem.label,
              };
            }),
          };
        }

        return baseItem;
      });

      setTopicList([{ icon: <AllIcon size={16} />, key: 'all', label: '全部' }, ...processedList]);
    });
  }, []);

  useEffect(() => {
    const topic = selectedKey === 'all' ? undefined : selectedKey;
    post('/assistant/list_by_topic', {
      page_number: 1,
      page_size: 100,
      topic,
    }).then((res: any) => {
      setAgentsList(res);
    });
  }, [selectedKey]);

  return (
    <Flexbox className={cx(styles.container)} direction={'vertical'} width={'100%'}>
      <Header />
      <Flexbox direction={'horizontal'} width={'100%'}>
        <Menu selectedKey={selectedKey} topicList={topicList} />
        <AgentsCards agentsList={agentsList} />
      </Flexbox>
    </Flexbox>
  );
};

const AgentsPage = () => (
  <Suspense>
    <AgentsContent />
  </Suspense>
);

export default AgentsPage;
