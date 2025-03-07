import { PropsWithChildren } from 'react';

import UserWatcher from '@/components/UserWatcher';
import { authEnv } from '@/config/auth';

import Clerk from './Clerk';
import NextAuth from './NextAuth';
import NoAuth from './NoAuth';

const AuthProvider = ({ children }: PropsWithChildren) => {
  if (authEnv.NEXT_PUBLIC_ENABLE_CLERK_AUTH)
    return (
      <>
        <Clerk>{children}</Clerk>
        <UserWatcher />
      </>
    );

  if (authEnv.NEXT_PUBLIC_ENABLE_NEXT_AUTH)
    return (
      <>
        <NextAuth>{children}</NextAuth>
        <UserWatcher />
      </>
    );

  return (
    <>
      <NoAuth>{children}</NoAuth>
      <UserWatcher />
    </>
  );
};

export default AuthProvider;
