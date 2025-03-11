import { ModelProviderCard } from '@/types/llm';

// ref: https://platform.moonshot.cn/docs/intro#模型列表
const Agi: ModelProviderCard = {
  chatModels: [
    // [wy] agi 4o
    {
      contextWindowTokens: 128_000,
      description:
        'agi general',
      displayName: 'agi-general',
      enabled: true,
      functionCall: true,
      id: 'agi-general',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'agi 4o mini',
      displayName: 'Agi-4o-mini',
      enabled: true,
      functionCall: true,
      id: 'agi-4o-mini',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'agi sonnet 3.5',
      displayName: 'agi-sonnet-3-5',
      enabled: true,
      functionCall: true,
      id: 'agi-sonnet-3-5',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'agi sonnet 3.7',
      displayName: 'agi-sonnet-3-7',
      enabled: true,
      functionCall: true,
      id: 'agi-sonnet-3-7',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'agi deepseek v3',
      displayName: 'agi-deepseek-v3',
      enabled: true,
      // functionCall: true,
      id: 'agi-deepseek-v3',
    },
    {
      contextWindowTokens: 128_000,
      description:
        'agi deepseek r1',
      displayName: 'agi-deepseek-r1',
      enabled: true,
      id: 'agi-deepseek-r1',
    },
  ],
  checkModel: 'agi-general',
  description:
    'agi general',
  id: 'agi',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://syngents.cn',
  name: 'Agi',
  proxyUrl: {
    placeholder: 'https://oneapi.zhiji.ai/v1',
  },
  settings: {
    proxyUrl: {
      placeholder: 'https://oneapi.zhiji.ai/v1',
    },
    sdkType: 'openai',
    showModelFetcher: true,
    smoothing: {
      speed: 2,
      text: true,
    },
  },
  smoothing: {
    speed: 2,
    text: true,
  },
  url: 'https://syngents.cn',
};

export default Agi;
