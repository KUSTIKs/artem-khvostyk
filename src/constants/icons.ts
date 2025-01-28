import * as icons from '@remixicon/react';

const tagIconsMap: { [key: string]: icons.RemixiconComponentType } = {
  development: icons.RiToolsLine,
  design: icons.RiBrushLine,
  react: icons.RiReactjsLine,
  'next-js': icons.RiNextjsLine,
  'node-js': icons.RiNodejsLine,
};

const resourceIconsMap: { [key: string]: icons.RemixiconComponentType } = {
  github: icons.RiGithubFill,
  website: icons.RiGlobalLine,
};

export { tagIconsMap, resourceIconsMap };
