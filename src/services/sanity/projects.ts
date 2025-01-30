import type { ProjectSchema } from '#src/types/sanity';
import { sanityClient } from '#src/utils/sanity';

const getProject = async (params: { slug: string }) => {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    description,
    'slug': slug.current,
    tags[]->{
      _id,
      name,
      'value': value.current,
    },
    links[]{
      _key,
      label,
      href,
      resource,
    },
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
    content[] {
      _type == 'block' => @,
      _type == 'mediaFile' => {
        _type,
        type,
        image {
          "src": asset->url,
          alt
        },
        video {
          "src": asset->url,
          thumbnail {
            "src": asset->url
          },
          alt
        }
      }
    },
  }`;

  const project = await sanityClient.fetch<ProjectSchema>(query, {
    slug: params.slug,
  });
  return project;
};

const getProjects = async () => {
  const query = `*[_type == "project"]{
    _id,
    title,
    description,
    'slug': slug.current,
    tags[]->{
      _id,
      name,
      'value': value.current,
    },
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
  }`;

  const projects = await sanityClient.fetch<ProjectSchema[]>(query);
  return projects;
};

export { getProject, getProjects };
