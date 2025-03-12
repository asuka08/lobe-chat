import { AIChatModelCard } from '@/types/aiModel';

const agiChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'agi general',
    displayName: 'agi-general',
    enabled: true,
    id: 'agi-general',
    pricing: {
      currency: 'CNY',
      input: 12,
      output: 12,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'agi 4o mini',
    displayName: 'agi-4o-mini',
    enabled: true,
    id: 'agi-4o-mini',
    pricing: {
      currency: 'CNY',
      input: 12,
      output: 12,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'agi sonnet 3.5',
    displayName: 'agi-sonnet-3-5',
    enabled: true,
    id: 'agi-sonnet-3-5',
    pricing: {
      currency: 'CNY',
      input: 12,
      output: 12,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Agi pro',
    displayName: 'agi-pro',
    enabled: true,
    id: 'agi-pro',
    pricing: {
      currency: 'CNY',
      input: 12,
      output: 12,
    },
    type: 'chat',
  },
  {
    abilities: {
      // functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      'agi deepseek v3',
    displayName: 'agi-deepseek-v3',
    enabled: true,
    id: 'agi-deepseek-v3',
    pricing: {
      currency: 'CNY',
      input: 12,
      output: 12,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 128_000,
    description:
      'agi deepseek r1',
    displayName: 'agi-deepseek-r1',
    enabled: true,
    id: 'agi-deepseek-r1',
    pricing: {
      currency: 'CNY',
      input: 12,
      output: 12,
    },
    type: 'chat',
  },
];

export const allModels = [...agiChatModels];

export default allModels;
