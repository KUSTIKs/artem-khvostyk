import * as Toggle from '@radix-ui/react-toggle';
import { RiEraserLine } from '@remixicon/react';
import { useAtom } from 'jotai';

import { Button } from '#src/components/core/button/button';
import { isEraserActiveAtom } from '../../utils/store';

const EraserToggle = () => {
  const [isEraserActive, setIsEraserActive] = useAtom(isEraserActiveAtom);

  return (
    <Toggle.Root
      pressed={isEraserActive}
      onPressedChange={setIsEraserActive}
      aria-label="toggle eraser"
      asChild
    >
      <Button variant={isEraserActive ? 'primary' : 'outlined'}>
        <RiEraserLine />
      </Button>
    </Toggle.Root>
  );
};

export { EraserToggle };
