import type { ComponentPropsWithRef } from 'react';

import type { MediaFileSchema } from '#src/types/sanity';

type Props = {
  file: MediaFileSchema;
  className?: string;
  imgProps?: ComponentPropsWithRef<'img'>;
  videoProps?: ComponentPropsWithRef<'video'>;
};

const MediaFile = ({ file, imgProps, videoProps, className }: Props) => {
  if (file.type === 'image') {
    return (
      <img
        {...imgProps}
        src={file.image.src}
        alt={file.image.alt}
        className={className}
      />
    );
  }

  return (
    <video
      {...videoProps}
      className={className}
      poster={file.video.thumbnail?.src}
      src={file.video.src}
    />
  );
};

export { MediaFile };
