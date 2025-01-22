import type { RemixiconComponentType } from '@remixicon/react';
import * as icons from '@remixicon/react';

const services = {
  Development: 'Development',
  Design: 'Design',
} as const;

type ServiceType = (typeof services)[keyof typeof services];

const serviceIcons: { [key in ServiceType]: RemixiconComponentType } = {
  Development: icons.RiGlobeLine,
  Design: icons.RiBrushLine,
};

export { services, serviceIcons };
export type { ServiceType };
