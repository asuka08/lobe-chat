'use client';

import { Avatar, Form, Icon, ItemGroup, Tooltip } from '@lobehub/ui';
import { Button, Empty, Space, Switch, Tag, Typography } from 'antd';
import isEqual from 'fast-deep-equal';
import { LucideTrash2, Store } from 'lucide-react';
import { memo, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import { FORM_STYLE } from '@/const/layoutTokens';
import PluginStore from '@/features/PluginStore';
import { useFetchInstalledPlugins } from '@/hooks/useFetchInstalledPlugins';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import { pluginHelpers, useToolStore } from '@/store/tool';
import { toolSelectors } from '@/store/tool/selectors';

import { useStore } from '../store';
import AddPluginButton from './AddPluginButton';
import LoadingList from './LoadingList';
import LocalPluginItem from './LocalPluginItem';
import PluginAction from './PluginAction';

const AgentPlugin = memo(() => {
  const { t } = useTranslation('setting');

  const [showStore, setShowStore] = useState(false);

  const [userEnabledPlugins, toggleAgentPlugin] = useStore((s) => [
    s.config.plugins || [],
    s.toggleAgentPlugin,
  ]);

  const { showDalle } = useServerConfigStore(featureFlagsSelectors);
  const installedPlugins = useToolStore(toolSelectors.metaList(showDalle), isEqual);

  const { isLoading } = useFetchInstalledPlugins();

  const isEmpty = installedPlugins.length === 0 && userEnabledPlugins.length === 0;

  //  =========== Plugin List =========== //

  const list = installedPlugins.map(({ identifier, type, meta, author }) => {
    const isCustomPlugin = type === 'customPlugin';
    // console.log('identifier============', identifier, type, meta, author);
    return {
      avatar: <Avatar avatar={pluginHelpers.getPluginAvatar(meta)} style={{ flex: 'none' }} />,
      children: isCustomPlugin ? (
        <LocalPluginItem id={identifier} />
      ) : (
        <PluginAction identifier={identifier} />
      ),
      desc: pluginHelpers.getPluginDesc(meta),
      label: (
        <Flexbox align={'center'} gap={8} horizontal>
          {pluginHelpers.getPluginTitle(meta)}
          {/* TODO: 隐藏作者 */}
          {/* <PluginTag author={author} type={type} /> */}
        </Flexbox>
      ),
      minWidth: undefined,
    };
  });

  //  =========== Deprecated Plugin List =========== //

  // 检查出不在 installedPlugins 中的插件
  const deprecatedList = userEnabledPlugins
    .filter((pluginId) => !installedPlugins.some((p) => p.identifier === pluginId))
    .map((id) => ({
      avatar: <Avatar avatar={'♻️'} />,
      children: (
        <Switch
          checked={true}
          onChange={() => {
            toggleAgentPlugin(id);
          }}
        />
      ),
      label: (
        <Flexbox align={'center'} gap={8} horizontal>
          {id}
          <Tag bordered={false} color={'red'}>
            {t('plugin.installStatus.deprecated')}
          </Tag>
        </Flexbox>
      ),
      minWidth: undefined,
      tag: id,
    }));

  const hasDeprecated = deprecatedList.length > 0;

  const loadingSkeleton = LoadingList();

  const extra = (
    <Space.Compact style={{ width: 'auto' }}>
      <AddPluginButton />
      {hasDeprecated ? (
        <Tooltip title={t('plugin.clearDeprecated')}>
          <Button
            icon={<Icon icon={LucideTrash2} />}
            onClick={(e) => {
              e.stopPropagation();
              for (const i of deprecatedList) {
                toggleAgentPlugin(i.tag as string);
              }
            }}
            size={'small'}
          />
        </Tooltip>
      ) : null}
      <Tooltip title={t('plugin.store')}>
        <Button
          icon={<Icon icon={Store} />}
          onClick={(e) => {
            e.stopPropagation();
            setShowStore(true);
          }}
          size={'small'}
        />
      </Tooltip>
    </Space.Compact>
  );

  const empty = (
    <Center padding={40}>
      <Empty
        description={
          <Trans i18nKey={'plugin.empty'} ns={'setting'}>
            暂无安装插件，
            <Typography.Link
              href={'/'}
              onClick={(e) => {
                e.preventDefault();
                setShowStore(true);
              }}
            >
              前往插件市场
            </Typography.Link>
            安装
          </Trans>
        }
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
    </Center>
  );

  const plugin: ItemGroup = {
    children: isLoading ? loadingSkeleton : isEmpty ? empty : [...deprecatedList, ...list],
    extra,
    title: t('settingPlugin.title'),
  };

  return (
    <>
      <PluginStore open={showStore} setOpen={setShowStore} />
      <Form items={[plugin]} itemsType={'group'} variant={'pure'} {...FORM_STYLE} />
    </>
  );
});

export default AgentPlugin;
