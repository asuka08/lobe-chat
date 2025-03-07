import { createStyles } from 'antd-style';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Flexbox } from 'react-layout-kit';

import CategoryMenu from '../../discover/components/CategoryMenu';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 150px;
    flex: 0 0 150px;
    border-right: 1px solid #f0f0f0;
    min-height: 100vh;
  `,
}));

const Menu = ({ topicList, selectedKey }: { selectedKey: string; topicList: any[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { styles, cx } = useStyles();
  const handleSelect = ({ key }: { key: string }) => {
    if (key === 'all') {
      router.push(pathname); // 直接跳转到基础路径，清除所有查询参数
    } else {
      router.push(`${pathname}?topic=${encodeURIComponent(key)}`); // 确保对中文等特殊字符进行编码
    }
  };

  return (
    <Flexbox className={cx(styles.container)} padding={'10px'} width={'150px'}>
      <CategoryMenu
        items={topicList.map((item: any) => ({
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
        }))}
        onSelect={handleSelect}
        selectedKeys={[selectedKey || 'all']}
      />
    </Flexbox>
  );
};

export default Menu;
