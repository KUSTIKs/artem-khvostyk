import Image from 'next/image';

import classes from './footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={classes.container}>
        <Image
          height={20}
          width={98}
          src="/signature.svg"
          alt="signature"
          className={classes.signature}
        />
        <small className={classes.copytext}>All rights reserved</small>
      </div>
    </footer>
  );
};

export { Footer };
