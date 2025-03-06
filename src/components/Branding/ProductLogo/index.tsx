import { Avatar } from '@lobehub/ui';
import { LobeChat, LobeChatProps } from '@lobehub/ui/brand';
import { memo } from 'react';

import { getCompanyInfo } from '@/const/company';
import { isCustomBranding } from '@/const/version';

import CustomLogo from './Custom';

export const ProductLogo = memo<LobeChatProps>((props) => {
  if (isCustomBranding) {
    return <CustomLogo {...props} />;
  }
  // const extra = () => {
  //   return <Avatar
  //     avatar={`/icons/icon-192x192.maskable.png`}
  //     background={""}
  //     size={40}
  //     title={"333"}
  //   />
  // }

  const AvatarNode = () => (
    <Avatar avatar={getCompanyInfo().logo} background="" size={40} title="" />
  );

  return <LobeChat {...props} />;
});
