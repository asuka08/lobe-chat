import {
  Bot,
  Brain,
  Code,
  Database,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Home,
  Image,
  Laptop,
  Lightbulb,
  LucideIcon,
  MessageSquare,
  Music,
  Palette,
  Rocket,
  Search,
  Settings,
  ShoppingCart,
  Star,
  Terminal,
  User,
  Users,
  Video,
  Wallet,
} from 'lucide-react';

// 所有可用的图标列表
const iconList: LucideIcon[] = [
  Bot,
  Brain,
  Code,
  Database,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Home,
  Image,
  Laptop,
  Lightbulb,
  MessageSquare,
  Music,
  Palette,
  Rocket,
  Search,
  Settings,
  ShoppingCart,
  Star,
  Terminal,
  User,
  Users,
  Video,
  Wallet,
];

// 计算字符串的哈希值
const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
};

export const getIconByKey = (key: string): LucideIcon => {
  // 使用字符串的哈希值来选择图标
  const hash = hashString(key);
  const index = hash % iconList.length;
  return iconList[index];
};
