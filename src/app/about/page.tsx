import Link from 'next/link';

import { Button } from '#src/components/core/button/button';
import { contactLink } from '#src/constants/links';
import { getAboutPageContent } from '#src/services/sanity/about-page-content';

import { StyledPortableText } from '#src/components/common/styled-portable-text/styled-portable-text';
import classes from './about.module.scss';

const AboutPage = async () => {
  const { content } = await getAboutPageContent();

  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.title}>About</h1>
        <div className={classes.content}>
          <StyledPortableText value={content} />
        </div>
        <div className={classes.actions}>
          <Button variant="outlined" asChild>
            <Link href={contactLink}>Get in touch</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
