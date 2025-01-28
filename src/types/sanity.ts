import type { Image, Slug } from '@sanity/types';

type Project = {
  _id: string;
  title: string;
  description: string;
  slug: Slug;
  thumbnail: Image;
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
    '_id' | 'title' | 'description' | 'thumbnail' | 'slug'
  >[];
};

export type { HomePageContent };
