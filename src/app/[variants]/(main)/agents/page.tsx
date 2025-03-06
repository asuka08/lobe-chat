'use client';

import { createStyles } from 'antd-style';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { getCompanyInfo } from '@/const/company';
import { useAccessAgentCompany, useCompanyConfig } from '@/store/config/hooks';
import { useUserStore } from '@/store/user';
import { userProfileSelectors } from '@/store/user/selectors';
import { getIconByKey } from '@/utils/iconMapper';
import { post } from '@/utils/xzRequest';

import AgentsCards from './components/AgentsCards';
import Header from './components/Header';
import Menu from './components/Menu';

// 这个界面是咱们拓展的不是lobe的 没使用lobe的既定架构和服务端渲染
const AgentsPage = () => {
  const useStyles = createStyles(({ css, token }) => ({
    container: css`
      // padding: ${token.paddingLG}px;
    `,
  }));
  const { styles, cx } = useStyles();
  const router = useRouter();

  const [topicList, setTopicList] = useState<any[]>([]);
  const [agentsList, setAgentsList] = useState<any[]>([]);

  // 获取用户信息
  const userProfile = useUserStore(userProfileSelectors.userProfile);

  // 打印用户信息
  useEffect(() => {
    console.log('当前用户信息:', userProfile);
  }, [userProfile]);

  const searchParams = useSearchParams();
  const access_agent_company = useAccessAgentCompany();
  const company_for_frontend = useCompanyConfig();

  // 检查权限
  useEffect(() => {
    const currentCompany = getCompanyInfo();
    const currentCompanyKey =
      Object.entries(company_for_frontend).find(
        ([, info]) => info.companyName === currentCompany?.companyName,
      )?.[0] || 'default';

    if (!access_agent_company.includes(currentCompanyKey)) {
      router.replace('/chat');
    }
  }, [access_agent_company, company_for_frontend, router]);

  const selectedKey = useMemo(() => {
    const topic = searchParams.get('topic');
    return topic || 'all';
  }, [searchParams]);

  useEffect(() => {
    post('assistant/topic/list').then((res: any) => {
      const list = res.map((item: any) => {
        const Icon = getIconByKey(item);
        return {
          icon: <Icon size={16} />,
          key: item,
          label: item,
        };
      });
      const AllIcon = getIconByKey('全部');
      setTopicList([{ icon: <AllIcon size={16} />, key: 'all', label: '全部' }, ...list]);
    });
  }, []);

  useEffect(() => {
    post('/assistant/list_by_topic', {
      page_number: 1,
      page_size: 100,
      topic: selectedKey === 'all' ? undefined : selectedKey,
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

export default AgentsPage;
