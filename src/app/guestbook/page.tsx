import classes from './guestbook.module.scss';

const GuestbookPage = () => {
  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.title}>Guestbook</h1>
        <p className={classes.message}>Ne guests were here</p>
      </div>
    </main>
  );
};

export default GuestbookPage;
