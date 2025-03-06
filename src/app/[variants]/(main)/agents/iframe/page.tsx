'use client';

import { createStyles } from 'antd-style';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const useStyles = createStyles(({ css, token }) => ({
  back: css`
    color: ${token.colorText};
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  container: css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  header: css`
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
    background-color: ${token.colorBgContainer};
    border-bottom: 1px solid ${token.colorBorder};
  `,
  iframe: css`
    flex: 1;
    border: none;
  `,
}));

const IframePage = () => {
  const { cx, styles } = useStyles();

  const searchParams = useSearchParams();
  const url = searchParams.get('url');
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.header)}>
        <Link className={cx(styles.back)} href="/agents">
          <ArrowLeft size={16} />
          返回
        </Link>
      </div>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={cx(styles.iframe)}
        src={decodeURIComponent(url || '')}
      />
    </div>
  );
};

export default IframePage;
