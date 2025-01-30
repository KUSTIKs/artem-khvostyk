import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react';
import clsx from 'clsx';
import type { ComponentPropsWithRef } from 'react';

import { MediaFile } from '#src/components/core/media-file/media-file';
import type { MediaFileSchema } from '#src/types/sanity';

import classes from './styled-portable-text.module.scss';

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <h1 className={clsx(classes.heading, classes.heading_1)}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className={clsx(classes.heading, classes.heading_2)}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className={clsx(classes.heading, classes.heading_3)}>{children}</h3>
    ),
    normal: ({ children }) => <p className={classes.parapraph}>{children}</p>,
  },
  types: {
    mediaFile: ({ value }: { value: MediaFileSchema }) => (
      <MediaFile
        file={value}
        className={classes.mediaFile}
        videoProps={{
          muted: true,
          autoPlay: true,
          controls: true,
          loop: true,
        }}
      />
    ),
  },
};

type Props = Omit<ComponentPropsWithRef<typeof PortableText>, 'components'>;

const StyledPortableText = (props: Props) => {
  return <PortableText {...props} components={components} />;
};

export { StyledPortableText };
