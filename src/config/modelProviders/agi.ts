import { ModelProviderCard } from '@/types/llm';

// ref: https://platform.moonshot.cn/docs/intro#模型列表
const Agi: ModelProviderCard = {
  chatModels: [
    // [wy] agi 4o
    {
      contextWindowTokens: 128_000,
      description:
        'agi 4o',
      displayName: 'Agi 4o',
      enabled: true,
      functionCall: true,
      id: 'agi-4o',
    },
  ],
  checkModel: 'agi-4o',
  description:
    'agi 4o',
  id: 'agi',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://syngents.cn',
  name: 'Moonshot',
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
