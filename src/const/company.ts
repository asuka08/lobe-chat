export const COMPANY_INFO = {
  bohua: {
    agentInfo: {
      title: '博小华',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/bohua-os/icons/icon-agent.png',
    },
    companyName: '博华物流',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/bohua-os/icons/icon-192x192.png',
  },
  default: {
    agentInfo: {
      title: '确小幸',
      url: '/icons/icon-quexiaoxing.png',
    },
    companyName: 'AGI Transformer',
    logo: '/icons/icon-192x192.png',
  },
  fenxiang: {
    agentInfo: {
      title: '芬小香',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/fenxiang-os/icons/icon-agent.png',
    },
    companyName: '芬香',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/fenxiang-os/icons/icon-192x192.png',
  },
  lig: {
    agentInfo: {
      title: '立小购',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/lig-os/icons/icon-192x192.png',
    },
    companyName: '立购',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/lig-os/icons/icon-192x192.png',
  },
  palace: {
    agentInfo: {
      title: '朗小兹',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/palace-os/icons/icon-agent.png',
    },
    companyName: '朗丽兹',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/palace-os/icons/icon-192x192.png',
  },
  starkitchen: {
    agentInfo: {
      title: '星小厨',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/starkitchen-os/icons/icon-agent.png',
    },
    companyName: '星座厨房',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/starkitchen-os/icons/icon-192x192.png',
  },
};

// 定义 COMPANY_INFO 键的类型
type CompanyKeys = keyof typeof COMPANY_INFO;

export const getCompanyInfo = () => {
  let currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  if (currentUrl && (currentUrl.includes('os.syngents.cn') || currentUrl.includes('localhost'))) {
    const match = currentUrl.match(/^https:\/\/(.*?)-os\.syngents\.cn/);
    const companyKey: CompanyKeys = (match ? match[1] : 'default') as CompanyKeys;
    return COMPANY_INFO[companyKey] || COMPANY_INFO['default'];
  } else {
    return {
      agentInfo: {
        title: '',
        url: '',
      },
      companyName: '',
      logo: '',
    };
  }
};
