import type { HomePageContentSchema } from '#src/types/sanity';
import { sanityClient } from '#src/utils/sanity';

const getHomePageContent = async () => {
  const query = `*[_type == "homePageContent"][0]{
    title,
    highlights[]->{
      _id,
      title,
      'slug': slug.current,
      description,
      thumbnail,
      preview {
        type,
        image {
          'src': asset->url,
          alt
        },
        video {
          'src': asset->url,
          alt,
          thumbnail {
            'src': asset->url
          }
        }
      },
    },
    mainVideo{ 'url': asset->url },
    selectedWork[]->{
      _id,
      title,
      'slug': slug.current,
      description,
      preview {
        type,
        image {
          'src': asset->url,
          alt
        },
        video {
          'src': asset->url,
          alt,
          thumbnail {
            'src': asset->url
          }
        }
      },
      tags[]->{
        _id,
        name,
        'value': value.current,
      }
    }
  }`;

  const homePageContent =
    await sanityClient.fetch<HomePageContentSchema>(query);
  return homePageContent;
};

export { getHomePageContent };
