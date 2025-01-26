import { RiGithubFill } from '@remixicon/react';

import * as Alert from '#src/components/core/alert/alert';
import { Button } from '#src/components/core/button/button';

import { SignInButton } from '@clerk/nextjs';

const ConnectGithubAlert = () => {
  return (
    <Alert.Root>
      <div>
        <Alert.Title>Add your drawing</Alert.Title>
        <Alert.Description>
          To add a drawing you first need to connect GitHub
        </Alert.Description>
      </div>

      <Alert.Action>
        <SignInButton>
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
