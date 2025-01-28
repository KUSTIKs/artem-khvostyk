import type { Project } from '#src/types/sanity';
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
    thumbnail,
    content
  }`;

  const project = await sanityClient.fetch<Project>(query, {
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
    thumbnail,
    content
  }`;

  const projects = await sanityClient.fetch<Project[]>(query);
  return projects;
};

export { getProject, getProjects };
