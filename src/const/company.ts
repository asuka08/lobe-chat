export const COMPANY_INFO = {
  'bohua': {
    agentInfo: {
      title: '博小华',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/bohua-os/icons/icon-agent.png'
    },
    companyName: '博华物流',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/bohua-os/icons/icon-192x192.png'
  },
  'default': {
    agentInfo: {
      title: '确小幸',
      url: '/icons/icon-quexiaoxing.png'
    },
    companyName: 'AGI Transformer',
    logo: '/icons/icon-192x192.png',
  },
  'starkitchen': {
    agentInfo: {
      title: '星小厨',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/starkitchen-os/icons/icon-agent.png'
    },
    companyName: '星座厨房',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/starkitchen-os/icons/icon-192x192.png'
  },
};

// 定义 COMPANY_INFO 键的类型
type CompanyKeys = keyof typeof COMPANY_INFO;

export const getCompanyInfo = () => {
  // const baseUrl = 'https://os.syngents.cn';
  let currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  console.log('currentUrl========', currentUrl);
  // 提取子域名
  const match = currentUrl.match(/^https:\/\/(.*?)-os\.syngents\.cn/);
  console.log('match========', match);
  // 将 companyKey 的类型指定为 CompanyKeys
  const companyKey: CompanyKeys = (match ? match[1] : 'default') as CompanyKeys;
  // 返回对应的公司信息
  return COMPANY_INFO[companyKey] || COMPANY_INFO['default'];
};

