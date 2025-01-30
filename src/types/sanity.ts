import type { PortableTextBlock } from '@portabletext/react';

type ProjectTagSchema = {
  _id: string;
  name: string;
  value: string;
};

type ProjectLinkSchema = {
  _key: string;
  label: string;
  href: string;
  resource: string;
};

type ImageMediaFileSchema = {
  type: 'image';
  image: {
    src: string;
    alt: string;
  };
};

type VideoMediaFileSchema = {
  type: 'video';
  video: {
    src: string;
    alt?: string | null;
    thumbnail?: {
      src: string;
    } | null;
  };
};

type MediaFileSchema = ImageMediaFileSchema | VideoMediaFileSchema;

type ProjectSchema = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  tags: ProjectTagSchema[];
  links: ProjectLinkSchema[] | null;
  preview: MediaFileSchema | null;
  content: PortableTextBlock | null;
};

type HomePageContentSchema = {
  title: string;
  highlights: Pick<
    ProjectSchema,
    '_id' | 'title' | 'description' | 'preview' | 'slug'
  >[];
  mainVideo: { url: string };
  selectedWork: Pick<
    ProjectSchema,
    '_id' | 'title' | 'description' | 'preview' | 'slug' | 'tags'
  >[];
};

type AboutPageContentSchema = {
  content: PortableTextBlock;
};

export type {
  HomePageContentSchema,
  ProjectSchema,
  ProjectTagSchema,
  AboutPageContentSchema,
  MediaFileSchema,
};
