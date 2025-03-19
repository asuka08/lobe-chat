export const COMPANY_INFO = {

  default: {
    agentInfo: {
      title: '确小幸',
      url: '/icons/icon-quexiaoxing.png',
    },
    companyName: '超级助理',
    logo: '/icons/icon-192x192.png',
  },

  // 新智
  syn: {
    agentInfo: {
      title: '新小智',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/syn-os/icons/icon-agent.png',
    },
    companyName: '新智体',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/syn-os/icons/icon-192x192.png',
  },

  // 测试
  demo: {
    agentInfo: {
      title: '测试',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/palace-os/icons/icon-agent.png',
    },
    companyName: '测试',
    customAgentInfo: {
      avator:
        'https://registry.npmmirror.com/@lobehub/fluent-emoji-3d/latest/files/assets/1f389.webp',
      title: '测试百科',
      url: 'https://workflow.syngents.cn/chat/3RLIbRp8cGELaLAe',
    },
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/palace-os/icons/icon-192x192.png',
  },



  // 博华物流
  bohua: {
    agentInfo: {
      title: '博小华',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/bohua-os/icons/icon-agent.png',
    },
    companyName: '博华物流',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/bohua-os/icons/icon-192x192.png',
  },



  // 芬香
  fenxiang: {
    agentInfo: {
      title: '芬小香',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/fenxiang-os/icons/icon-agent.png',
    },
    companyName: '芬香',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/fenxiang-os/icons/icon-192x192.png',
  },

  // 立购
  lig: {
    agentInfo: {
      title: '立小购',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/lig-os/icons/icon-192x192.png',
    },
    companyName: '立购',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/lig-os/icons/icon-192x192.png',
  },

  // 朗丽兹
  palace: {
    agentInfo: {
      title: '朗小兹',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/palace-os/icons/icon-agent.png',
    },
    companyName: '朗丽兹',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/palace-os/icons/icon-192x192.png',
  },

  // 星座厨房
  starkitchen: {
    agentInfo: {
      title: '星小厨',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/starkitchen-os/icons/icon-agent.png',
    },
    companyName: '星座厨房',
    customAgentInfo: {
      avator:
        'https://registry.npmmirror.com/@lobehub/fluent-emoji-3d/latest/files/assets/1f389.webp',
      title: '星厨百科',
      url: 'https://workflow.syngents.cn/chat/3RLIbRp8cGELaLAe',
    },
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/starkitchen-os/icons/icon-192x192.png',
  },

  // 易宝
  yeepay: {
    agentInfo: {
      title: '易小宝',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/yeepay-os/icons/icon-agent.png',
    },
    companyName: '易宝',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/yeepay-os/icons/icon-192x192.png',
  },

  // 悠家
  ucharm: {
    agentInfo: {
      title: '小悠',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/ucharm-os/icons/icon-agent.png',
    },
    companyName: '悠家',
    customAgentInfo: {
      avator:
        'https://registry.npmmirror.com/@lobehub/fluent-emoji-3d/latest/files/assets/1f389.webp',
      title: '易宝百科',
      url: 'https://workflow.syngents.cn/chat/J1jVcjUTyEfkNbTP',
    },
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/ucharm-os/icons/icon-192x192.png',
  },

  // 陆运帮
  sxlyb: {
    agentInfo: {
      title: '陆小帮',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/sxlyb-os/icons/icon-agent.png',
    },
    companyName: '陆运帮',
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/sxlyb-os/icons/icon-192x192.png',
  },

  // 必诚
  bicheng: {
    agentInfo: {
      title: '必小诚',
      url: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/bicheng-os/icons/icon-agent.png',
    },
    companyName: '山东必诚',
    customAgentInfo: {
      avator:
        'https://registry.npmmirror.com/@lobehub/fluent-emoji-3d/latest/files/assets/1f389.webp',
      title: '必诚百科',
      url: 'https://workflow.syngents.cn/chat/J1jVcjUTyEfkNbTP',
    },
    logo: 'https://lobe-1321707147.cos.ap-beijing.myqcloud.com/tanent/bicheng-os/icons/icon-192x192.png',
  },

};

// 定义 COMPANY_INFO 键的类型
type CompanyKeys = keyof typeof COMPANY_INFO;

export const getCompanyInfo = () => {
  let currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  if (
    currentUrl &&
    (currentUrl.includes('os.syngents.cn') ||
      currentUrl.includes('localhost') ||
      currentUrl.includes('lobedemo.syngents.cn'))
  ) {
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
