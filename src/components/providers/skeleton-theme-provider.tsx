import type { ReactNode } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

type Props = {
  children: ReactNode;
};

const AppSkeletonThemeProvider = ({ children }: Props) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      {children}
    </SkeletonTheme>
  );
};

export { AppSkeletonThemeProvider };
