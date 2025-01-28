import type { PortableTextBlock } from '@portabletext/react';
import type { Image } from '@sanity/types';

type ProjectTag = {
  _id: string;
  name: string;
  value: string;
};

type Project = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  tags: Pick<ProjectTag, '_id' | 'name' | 'value'>[];
  thumbnail: Image;
  content: PortableTextBlock;
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
