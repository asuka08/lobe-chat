import { Grid } from '@lobehub/ui';

import type { DiscoverAssistantItem } from '@/types/discover';

import AssistantCard from '../../discover/(list)/assistants/features/Card';

interface Agent {
  author: string;
  created_at: string;
  description: string;
  dify_url: string;
  id: number;
  name: string;
  tags: string[];
  topic: string;
  updated_at: string;
  yn: boolean;
}

const AgentCard = ({ data }: { data: Agent }) => {
  // 构建符合 DiscoverAssistantItem 的数据结构
  const assistantData: Partial<DiscoverAssistantItem> = {
    author: data.author,
    config: {
      chatConfig: {
        autoCreateTopicThreshold: 0,
      },
      model: 'gpt-3.5-turbo',
      params: {},
      systemRole: '',
      tts: {
        // showAllLocales: false,
        sttLocale: 'auto',
        ttsService: 'openai',
        // voice: 'alloy',
      } as any,
    },
    createdAt: data.created_at,
    examples: [],
    homepage: data.dify_url,
    identifier: String(data.id),
    meta: {
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${data.id}`,
      category: data.topic as any,
      description: data.description,
      tags: data.tags,
      title: data.name,
    },
    schemaVersion: 1,
  };

  return (
    <AssistantCard
      {...(assistantData as DiscoverAssistantItem)}
      href={`/agents/iframe?url=${encodeURIComponent(data.dify_url)}`}
      showAuthorAvatar={false}
      showCategory={false}
      tagNoClick={true}
    />
  );
};

const AgentsCards = ({ agentsList }: { agentsList: Agent[] }) => {
  return (
    <Grid flex={1} gap={16} height={'fit-content'} maxItemWidth={300} padding={20} rows={4}>
      {agentsList.map((item) => (
        <AgentCard data={item} key={item.id} />
      ))}
    </Grid>
  );
};

export default AgentsCards;
