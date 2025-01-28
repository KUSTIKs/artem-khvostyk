import type { HomePageContent } from '#src/types/sanity';
import { sanityClient } from '#src/utils/sanity';

const getHomePageContent = async () => {
  const query = `*[_type == "homePageContent"][0]{
    title,
    highlights[]->{
      _id,
      title,
      slug,
      description,
      thumbnail
    },
    mainVideo{ 'url':asset->url },
    selectedWork[]->{
      _id,
      title,
      slug,
      description,
      thumbnail
    }
  }`;

  const homePageContent = await sanityClient.fetch<HomePageContent>(query);
  return homePageContent;
};

export { getHomePageContent };
