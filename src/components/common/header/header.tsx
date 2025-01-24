import { RiMenuLine } from '@remixicon/react';
import Link from 'next/link';

import { Button } from '#src/components/core/button/button';
import { contactLink, navLinks } from '#src/constants/links';
import { Sidebar } from '../sidebar/sidebar';

import classes from './header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link href="/" className={classes.logo}>
          Artem Khvostyk
        </Link>
        <nav className={classes.nav}>
          <ul className={classes.navList}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.rightContainer}>
          <Button size="sm" asChild>
            <Link href={contactLink}>Contact</Link>
          </Button>
          <Sidebar>
            <Button
              variant="outlined"
              size="sm"
              className={classes.sidebarMenuButton}
            >
              <RiMenuLine />
            </Button>
          </Sidebar>
        </div>
      </div>
    </header>
  );
};

export { Header };
