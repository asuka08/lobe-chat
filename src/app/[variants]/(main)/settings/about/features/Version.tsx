import { Button, Tag } from 'antd';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';
import { BRANDING_NAME } from '@/const/branding';
import { CHANGELOG_URL, MANUAL_UPGRADE_URL } from '@/const/url';
import { CURRENT_VERSION } from '@/const/version';
import { useNewVersion } from '@/features/User/UserPanel/useNewVersion';
import { useGlobalStore } from '@/store/global';
import Image from 'next/image';

const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    overflow: hidden;
    border-radius: ${token.borderRadiusLG * 2}px;
    background: ${token.colorBgContainer};
    box-shadow: 0 0 0 1px ${token.colorFillSecondary} inset;
  `,
}));

const Version = memo<{ mobile?: boolean }>(({ mobile }) => {
  const hasNewVersion = useNewVersion();
  const [latestVersion] = useGlobalStore((s) => [s.latestVersion]);
  const { t } = useTranslation('common');
  const { styles, theme } = useStyles();

  return (
    <Flexbox
      align={mobile ? 'stretch' : 'center'}
      gap={16}
      horizontal={!mobile}
      justify={'space-between'}
      width={'100%'}
    >
      <Flexbox align={'center'} flex={'none'} gap={16} horizontal>
        {/* 隐藏头像跳转到lobehub */}
        {/* <Link href={OFFICIAL_SITE} target={'_blank'}>
          <Center className={styles.logo} height={64} width={64}>
            <ProductLogo size={52} />
          </Center>
        </Link> */}
        <Center className={styles.logo} height={64} width={64}>
          <Image 
            alt={BRANDING_NAME}
            height={52}
            src="/icons/icon-192x192.maskable.png"
            style={{ objectFit: 'contain' }}
            width={52}
          />
        </Center>

        <Flexbox>
          <div style={{ fontSize: 18, fontWeight: 'bolder' }}>{BRANDING_NAME}</div>
          <div>
            <Tag color={theme.colorFillSecondary} style={{ color: theme.colorTextSecondary }}>
              v{CURRENT_VERSION}
            </Tag>
            {hasNewVersion && (
              <Tag
                bordered={false}
                style={{
                  background: theme.colorInfoBgHover,
                  color: theme.colorInfo,
                }}
              >
                {t('upgradeVersion.newVersion', { version: `v${latestVersion}` })}
              </Tag>
            )}
          </div>
        </Flexbox>
      </Flexbox>
      <Flexbox flex={mobile ? 1 : undefined} gap={8} horizontal>
        <Link href={CHANGELOG_URL} style={{ flex: 1 }} target={'_blank'}>
          <Button block={mobile}>{t('changelog')}</Button>
        </Link>
        {hasNewVersion && (
          <Link href={MANUAL_UPGRADE_URL} style={{ flex: 1 }} target={'_blank'}>
            <Button block={mobile} type={'primary'}>
              {t('upgradeVersion.action')}
            </Button>
          </Link>
        )}
      </Flexbox>
    </Flexbox>
  );
});

export default Version;
