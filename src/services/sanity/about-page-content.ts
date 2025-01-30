import type { AboutPageContentSchema } from '#src/types/sanity';
import { sanityClient } from '#src/utils/sanity';

const getAboutPageContent = async () => {
  const query = `*[_type == "aboutPageContent"][0]{
    content
  }`;

  const aboutPageContent =
    await sanityClient.fetch<AboutPageContentSchema>(query);
  return aboutPageContent;
};

export { getAboutPageContent };
