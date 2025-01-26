import { AuthLoading, SignedIn, SignedOut } from '#src/components/auth/auth';
import { AlertSkeleton } from '#src/components/core/alert/alert-skeleton';
import { ConnectGithubAlert } from '../connect-github-alert/connect-github-alert';
import { SignOutAlert } from '../sign-out-alert/sign-out-alert';

const AuthAlert = () => {
  return (
    <>
      <SignedOut>
        <ConnectGithubAlert />
      </SignedOut>
      <SignedIn>
        <SignOutAlert />
      </SignedIn>
      <AuthLoading>
        <AlertSkeleton />
      </AuthLoading>
    </>
  );
};

export { AuthAlert };
