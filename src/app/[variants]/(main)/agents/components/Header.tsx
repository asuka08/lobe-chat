'use client';

import { createStyles } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const Header = () => {
  const useStyles = createStyles(({ css, token }) => ({
    container: css`
      padding: 10px;
      border-bottom: 1px solid ${token.colorBorder};
      height: 63px;
      font-size: 23px;
      font-weight: 300;
      white-space: nowrap;
      padding-left: 30px;
    `,
    desc: css`
      font-size: 14px;
      font-weight: 300;
      white-space: nowrap;
      margin-left: 10px;
    `,
  }));
  const { styles, cx } = useStyles();

  return (
    <Flexbox
      align={'center'}
      className={cx(styles.container)}
      direction={'horizontal'}
      width={'100%'}
    >
      企业专区
      {/* <div className={cx(styles.desc)}>为您提供超级无敌的agents助手, 帮您解决工作中的问题</div> */}
    </Flexbox>
  );
};

export default Header;
