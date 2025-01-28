import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

import { envConfig } from '#src/utils/config';

const sanityClient = createClient({
  projectId: envConfig.sanityProjectId,
  dataset: envConfig.sanityDataset,
  apiVersion: envConfig.sanityApiVersion,
  useCdn: false,
});

const sanityImageUrlBuilder = imageUrlBuilder(sanityClient);

export { sanityClient, sanityImageUrlBuilder };
