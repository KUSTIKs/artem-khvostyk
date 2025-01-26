'use client';

import { SignOutButton } from '#src/components/auth/auth';
import * as Alert from '#src/components/core/alert/alert';
import { Button } from '#src/components/core/button/button';
import { useUser } from '#src/hooks/auth';

const SignOutAlert = () => {
  const { publicUser } = useUser();

  return (
    <Alert.Root>
      <div>
        <Alert.Title>You are connected</Alert.Title>
        <Alert.Description>
          Signed in with GitHub as {publicUser?.github_username}
        </Alert.Description>
      </div>

      <Alert.Action>
        <SignOutButton>
          <Button variant="ghost">Sign out</Button>
        </SignOutButton>
      </Alert.Action>
    </Alert.Root>
  );
};

export { SignOutAlert };
