import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { RiCloseLine } from '@remixicon/react';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { Button } from '#src/components/core/button/button';
import { contactLink, navLinks } from '#src/constants/links';

import { Separator } from '#src/components/core/separator/separator';
import classes from './sidebar.module.scss';

type Props = {
  children: ReactNode;
};

const Sidebar = ({ children }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.overlay} />
        <Dialog.Content className={classes.content}>
          <VisuallyHidden asChild>
            <Dialog.Title>Sidebar navigation</Dialog.Title>
          </VisuallyHidden>
          <div className={classes.sidebar}>
            <div className={classes.header}>
              <Dialog.Close asChild>
                <Button
                  variant="outlined"
                  size="sm"
                  className={classes.closeButton}
                >
                  <RiCloseLine />
                </Button>
              </Dialog.Close>
            </div>
            <nav className={classes.nav}>
              <ul className={classes.navList}>
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Button variant="ghost" asChild>
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  </li>
                ))}
              </ul>
              <Separator />
              <Button asChild>
                <Link href={contactLink}>Contact</Link>
              </Button>
            </nav>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { Sidebar };
