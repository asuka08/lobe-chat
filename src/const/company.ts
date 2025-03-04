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
  // if (currentUrl.includes('localhost:3010')) {
  //   return COMPANY_INFO['bohua']
  // }
  // currentUrl = 'https://bohua-os.syngents.cn'
  // 提取子域名
  if (currentUrl && (currentUrl.includes('os.syngents.cn') || currentUrl.includes('localhost'))) {
    console.log('2222222222222222:', currentUrl);
    const match = currentUrl.match(/^https:\/\/(.*?)-os\.syngents\.cn/);
    // 将 companyKey 的类型指定为 CompanyKeys
    const companyKey: CompanyKeys = (match ? match[1] : 'default') as CompanyKeys;
    // 返回对应的公司信息
    return COMPANY_INFO[companyKey] || COMPANY_INFO['default'];
  } else {
    // console.log('33333333333');
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
