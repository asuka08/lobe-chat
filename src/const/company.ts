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

// export const fetchSession = async () => {
//   const response = await fetch('/api/auth/session', {
//     headers: {
//       'Accept': '*/*',
//       'Accept-Language': 'zh,zh-CN;q=0.9',
//       'Connection': 'keep-alive',
//       'Content-Type': 'application/json',
//       'Cookie': 'uxsclient=1722485795417.j3wbiblb; _ga=GA1.1.1306721546.1722485796; poll_session_seen=[]; uxs_first_session=tjImDM1I; token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQxNTkxMjA4LCJpYXQiOjE3Mzg5OTkyMDgsImp0aSI6IjNjNDI3NDdkMmI0YjQ2ZjliMGJlYzBmMmM2MTk1MmE1IiwidXNlcl9pZCI6NTExfQ.J9DVr0-Ab1nTOkjH2Zu4odFQHbHomFdZQEsXu6WLDP4; __Host-authjs.csrf-token=a919fcf3d1e8d0e7fe34f438fd6fc6e02c1e55eeb2a74f434fee745967509276%7C806b5579ca8741e8809013948774c8eedfc03f284808796874e6977cff9bf456; uxssession=1740465617392.r0r34pw; uxsniff_session=2C2lHCEY; uxs_pageview=1; uxs_unique_session=41; uxs_created_at=1740465619038; _ga_F0L39G936J=GS1.1.1740465617.61.0.1740465625.0.0.0; __Secure-authjs.callback-url=https%3A%2F%2Fos.syngents.cn%2Fchat; __Secure-authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQnNWNTJmVW5fRDFpTmI1c25NU3o2ZkNqQ1R4dmVxV3oyM1JfbGZ1b203UFM5OWxvcml4dVlWdm1mSzFQdXFId05DQTRlVUtxY0FYbHhNYUlfX1o1RVEifQ..Dl7aj3Ykn_3lLf4VdO2ZOg.T2EhaqtUXrNGcgTh6Bi4L87LNNyktg8FTnMwqnqaq3b6uvJnm-bLMpMbCWr-KpopWZuiTXaEiLBFHUIcttVXc_xZXTvfqr249_mW-hFlran-NchOYJ2e5HkeFWTu-SB6CG3Cyizo7eQUNM_s61AfnKjD8ArV6pxU6D2qpiWokSKWnhTbudpSsqU8tTQqOQmA7G9mCooA59fDABn4779kTzyPQ9TdMOpCaQAhbjYh6qEypwiTRxWqyvGaj556HMJ4Rxw-uaSQ9gf466X4P7iIx41zBWnbkwTnx9bdGW91YoGQxUDNqiTmwQWl2JVJiLd5t6DdfSrCJPIEmh6MXrFVW071m00y5bYem7uRYyNQYYGou2KbxV3klkI6ckOM-PQM08IehuvTe5_XgA1WMvdBUClGRKESB5rNzlrn1kFuQn-U2Xp324EA3G-Q8EIg1uzJyoh4DOR7OM-UnhhxhNbX8Q.2e0gtecC-KQGRMZBlV_3Fg_Hnk3ZYzBIv63i9vQJAiY',
//       'Referer': '/chat',
//       'Sec-Fetch-Dest': 'empty',
//       'Sec-Fetch-Mode': 'cors',
//       'Sec-Fetch-Site': 'same-origin',
//       'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
//       'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
//       'sec-ch-ua-mobile': '?0',
//       'sec-ch-ua-platform': '"macOS"'
//     },
//     method: 'GET',
//   });
//   console.log('response111========', response)
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   console.log('response========', response, '===:', response.json());
//   return response.json();
// };

export const getCompanyInfo = () => {
  // fetchSession();
  // const baseUrl = 'https://os.syngents.cn';
  let currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  // 提取子域名
  const match = currentUrl.match(/^https:\/\/(.*?)-os\.syngents\.cn/);
  // 将 companyKey 的类型指定为 CompanyKeys
  const companyKey: CompanyKeys = (match ? match[1] : 'default') as CompanyKeys;
  // 返回对应的公司信息
  return COMPANY_INFO[companyKey] || COMPANY_INFO['default'];
};



