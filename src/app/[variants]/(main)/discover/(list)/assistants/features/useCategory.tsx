import { Icon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import {
  BriefcaseIcon,
  FileTextIcon,
  GlobeIcon,
  GraduationCapIcon,
  ImageIcon,
  LayoutPanelTop,
  LightbulbIcon,
  MegaphoneIcon,
  ScaleIcon,
  SettingsIcon,
  UsersIcon,
  VideoIcon,
  WalletIcon,
  WrenchIcon,
} from 'lucide-react';

import { AssistantCategory } from '@/types/discover';

import { ICON_SIZE } from '../../../components/CategoryMenu';

export const useCategory = (fontsize?: number) => {
  const theme = useTheme();
  const size = fontsize ? { fontSize: fontsize } : ICON_SIZE;

  return [
    {
      icon: <Icon color={theme.colorTextSecondary} icon={LayoutPanelTop} size={size} />,
      key: AssistantCategory.All,
      label: '全部',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={GlobeIcon} size={size} />,
      key: AssistantCategory.General,
      label: '通用',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={FileTextIcon} size={size} />,
      key: AssistantCategory.CopyWriting,
      label: '文案',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={LightbulbIcon} size={size} />,
      key: AssistantCategory.Strategy,
      label: '战略',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={MegaphoneIcon} size={size} />,
      key: AssistantCategory.Marketing,
      label: '市场',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={MegaphoneIcon} size={size} />,
      key: AssistantCategory.Advertising,
      label: '营销',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={UsersIcon} size={size} />,
      key: AssistantCategory.Personnel,
      label: '人力',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={SettingsIcon} size={size} />,
      key: AssistantCategory.Administration,
      label: '行政',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={WalletIcon} size={size} />,
      key: AssistantCategory.Finance,
      label: '财务',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={ScaleIcon} size={size} />,
      key: AssistantCategory.Legal,
      label: '法务',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={WrenchIcon} size={size} />,
      key: AssistantCategory.Operations,
      label: '运营',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={BriefcaseIcon} size={size} />,
      key: AssistantCategory.Technology,
      label: '技术',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={GraduationCapIcon} size={size} />,
      key: AssistantCategory.Education,
      label: '教育',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={ImageIcon} size={size} />,
      key: AssistantCategory.Images,
      label: '图片',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={VideoIcon} size={size} />,
      key: AssistantCategory.Videos,
      label: '视频',
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={MegaphoneIcon} size={size} />,
      key: AssistantCategory.Entertainment,
      label: '娱乐',
    },
  ];
};

export const useCategoryItem = (key?: AssistantCategory, fontsize?: number) => {
  const items = useCategory(fontsize);
  if (!key) return;
  return items.find((item) => item.key === key);
};
