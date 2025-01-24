const contactLink = 'https://bento.me/artem-khvostyk';

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/thoughts', label: 'Thoughts' },
  { href: '/guestbook', label: 'Guestbook' },
];

export { contactLink, navLinks };
export type { NavLink };
