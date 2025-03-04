import { AIChatModelCard } from '@/types/aiModel';

const agiChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      'agi 4o',
    displayName: 'agi-4o',
    enabled: true,
    id: 'agi-4o',
    pricing: {
      currency: 'CNY',
      input: 12,
      output: 12,
    },
    type: 'chat',
  }
];

export const allModels = [...agiChatModels];

export default allModels;
