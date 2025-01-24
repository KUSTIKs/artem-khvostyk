import { ConnectGithubAlert } from './_components/connect-github-alert/connect-github-alert';

import classes from './guestbook.module.scss';

const GuestbookPage = () => {
  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.title}>Guestbook</h1>
        <ConnectGithubAlert />
        <div className={classes.content}>
          <p className={classes.message}>No guests were here</p>
        </div>
      </div>
    </main>
  );
};

export default GuestbookPage;
