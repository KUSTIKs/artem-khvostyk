import type { ReactNode } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

type Props = {
  children: ReactNode;
};

const AppSkeletonThemeProvider = ({ children }: Props) => {
  return <SkeletonTheme>{children}</SkeletonTheme>;
};

export { AppSkeletonThemeProvider };
