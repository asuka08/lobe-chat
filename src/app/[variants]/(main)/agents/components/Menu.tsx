import { createStyles } from 'antd-style';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Flexbox } from 'react-layout-kit';

import CategoryMenu from '../../discover/components/CategoryMenu';

interface TopicItem {
  children?: TopicItem[];
  icon?: React.ReactNode;
  key: string;
  label: string;
}

interface MenuItemType {
  children?: MenuItemType[];
  icon?: React.ReactNode;
  key: string;
  label: React.ReactNode;
}

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 250px;
    flex: 0 0 150px;
    border-right: 1px solid #f0f0f0;
    min-height: 100vh;
  `,
}));

const Menu = ({ topicList, selectedKey }: { selectedKey: string; topicList: TopicItem[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { styles, cx } = useStyles();

  const handleSelect = ({ key }: { key: string }) => {
    if (key === 'all') {
      router.push(pathname);
      return;
    }

    // 查找选中的菜单项
    const findMenuItem = (items: TopicItem[]): TopicItem | undefined => {
      for (const item of items) {
        if (item.key === key) return item;
        if (item.children) {
          const found = findMenuItem(item.children);
          if (found) return found;
        }
      }
      return undefined;
    };

    const selectedItem = findMenuItem(topicList);

    if (selectedItem) {
      // 如果点击的是父级菜单且有子菜单，跳转到第一个子菜单
      if (selectedItem.children?.length) {
        const firstChild = selectedItem.children[0];
        router.push(`${pathname}?topic=${encodeURIComponent(firstChild.key)}`);
      } else {
        // 如果是子菜单或没有子菜单的一级菜单，直接跳转
        router.push(`${pathname}?topic=${encodeURIComponent(key)}`);
      }
    }
  };

  const renderMenuItems = (items: TopicItem[]): MenuItemType[] => {
    return items.map((item) => {
      if (item.children && item.children.length > 0) {
        return {
          ...item,
          children: renderMenuItems(item.children),
        };
      }
      return {
        ...item,
        label: (
          <Link
            href={{
              pathname: '/agents',
              query: item.key === 'all' ? undefined : { topic: item.key },
            }}
          >
            {item.label}
          </Link>
        ),
      };
    });
  };

  return (
    <Flexbox className={cx(styles.container)} padding={'10px'} width={'150px'}>
      <CategoryMenu
        items={renderMenuItems(topicList)}
        onOpenChange={(openKeys) => {
          // 获取最后打开的菜单项
          const lastOpenKey = openKeys.at(-1);
          if (!lastOpenKey) return;

          // 查找打开的菜单项
          const findMenuItem = (items: TopicItem[]): TopicItem | undefined => {
            for (const item of items) {
              if (item.key === lastOpenKey) return item;
              if (item.children) {
                const found = findMenuItem(item.children);
                if (found) return found;
              }
            }
            return undefined;
          };

          const openedItem = findMenuItem(topicList);
          if (openedItem?.children?.length) {
            // 如果展开的是父级菜单且有子菜单，跳转到第一个子菜单
            const firstChild = openedItem.children[0];
            router.push(`${pathname}?topic=${encodeURIComponent(firstChild.key)}`);
          }
        }}
        onSelect={handleSelect}
        selectedKeys={[selectedKey || 'all']}
      />
    </Flexbox>
  );
};

export default Menu;
