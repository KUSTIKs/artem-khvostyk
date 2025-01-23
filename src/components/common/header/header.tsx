import Link from 'next/link';

import { Button } from '#src/components/core/button/button';

import classes from './header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link href="/" className={classes.logo}>
          Artem Khvostyk
        </Link>
        <nav>
          <ul className={classes.navList}>
            <li>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/projects">Projects</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/about">About</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/thoughts">Thoughts</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/guestbook">Guestbook</Link>
              </Button>
            </li>
          </ul>
        </nav>
        <div className={classes.rightContainer}>
          <Button size="sm" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
