import { RiGithubFill } from '@remixicon/react';

import { Button } from '#src/components/core/button/button';

import classes from './connect-github-alert.module.scss';

const ConnectGithubAlert = () => {
  return (
    <div className={classes.alert}>
      <div>
        <p className={classes.title}>Add your drawing</p>
        <p className={classes.description}>
          To add a drawing you first need to connect GitHub
        </p>
      </div>
      <Button>
        <RiGithubFill />
        Connect GitHub
      </Button>
    </div>
  );
};

export { ConnectGithubAlert };
