'use client';

import { RiGithubFill } from '@remixicon/react';
import { useEffect, useMemo, useState } from 'react';

import { SignInButton } from '#src/components/auth/auth';
import * as Alert from '#src/components/core/alert/alert';
import { Button } from '#src/components/core/button/button';

const ConnectGithubAlert = () => {
  // dealing with next.js
  const [href, setHref] = useState('');

  useEffect(() => setHref(window.location.href), []);

  return (
    <Alert.Root>
      <div>
        <Alert.Title>Add your drawing</Alert.Title>
        <Alert.Description>
          To add a drawing you first need to connect GitHub
        </Alert.Description>
      </div>

      <Alert.Action>
        <SignInButton redirectTo={href}>
          <Button>
            <RiGithubFill />
            Connect GitHub
          </Button>
        </SignInButton>
      </Alert.Action>
    </Alert.Root>
  );
};

export { ConnectGithubAlert };
