'use client';

import { SignOutButton, useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

import * as Alert from '#src/components/core/alert/alert';
import { Button } from '#src/components/core/button/button';

const SignOutAlert = () => {
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <Alert.Root>
      <div>
        <Alert.Title>You are connected</Alert.Title>
        <Alert.Description>
          Signed in with GitHub as {user?.username}
        </Alert.Description>
      </div>

      <Alert.Action>
        <SignOutButton redirectUrl={pathname}>
          <Button variant="ghost">Sign out</Button>
        </SignOutButton>
      </Alert.Action>
    </Alert.Root>
  );
};

export { SignOutAlert };
