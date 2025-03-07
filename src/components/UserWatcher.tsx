'use client';

import { memo, useEffect } from 'react';

import { useRedirectCompanyUrl } from '@/store/config/hooks';
import { useUserStore } from '@/store/user';
import { userProfileSelectors } from '@/store/user/selectors';

const UserWatcher = memo(() => {
  // 从 store 中获取用户信息
  const user = useUserStore(userProfileSelectors.userProfile);
  // 获取重定向 URL 列表
  const redirectUrls = useRedirectCompanyUrl();

  useEffect(() => {
    // 如果用户邮箱存在
    if (user?.email) {
      // 获取邮箱域名部分
      const emailDomain = user.email.split('@')[1];
      // 提取公司名（比如从 fenxiang.cn 中获取 fenxiang）
      const companyName = emailDomain.split('.')[0];

      // 获取当前域名
      const currentDomain = window.location.hostname;

      // 检查当前域名是否包含公司名，且该公司在重定向列表中
      if (!currentDomain.includes(companyName) && redirectUrls?.includes(companyName)) {
        // 从当前域名中提取基础域名部分（比如从 company1-os.syngents.cn 获取 os.syngents.cn）
        const baseDomain = currentDomain.includes('-')
          ? currentDomain.slice(currentDomain.indexOf('-') + 1)
          : currentDomain;

        // 构建新的域名
        const newDomain = `${companyName}-${baseDomain}`;

        // 构建新的完整 URL
        const newUrl = `${window.location.protocol}//${newDomain}${window.location.pathname}${window.location.search}`;

        // 执行跳转
        window.location.href = newUrl;
      }
    }
  }, [user, redirectUrls]);

  // 这个组件不需要渲染任何内容
  return null;
});

export default UserWatcher;
