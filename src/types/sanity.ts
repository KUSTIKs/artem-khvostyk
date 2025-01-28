import type { PortableTextBlock } from '@portabletext/react';
import type { Image } from '@sanity/types';

type ProjectTag = {
  _id: string;
  name: string;
  value: string;
};

type ProjectLink = {
  _key: string;
  label: string;
  href: string;
  resource: string;
};

type Project = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  tags: ProjectTag[];
  links: ProjectLink[] | null;
  thumbnail: Image;
  content: PortableTextBlock | null;
};

type HomePageContent = {
  title: string;
  highlights: Pick<
    Project,
    '_id' | 'title' | 'description' | 'thumbnail' | 'slug'
  >[];
  mainVideo: { url: string };
  selectedWork: Pick<
    Project,
    '_id' | 'title' | 'description' | 'thumbnail' | 'slug' | 'tags'
  >[];
};

export type { HomePageContent, Project, ProjectTag };
