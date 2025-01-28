import { RiGithubFill, RiGlobalLine } from '@remixicon/react';
import clsx from 'clsx';

import { Tag } from '#src/components/common/tag/tag';
import { Button } from '#src/components/core/button/button';
import { Separator } from '#src/components/core/separator/separator';
import { tagIconsMap } from '#src/constants/tag-icons';

import classes from './project.module.scss';

const ProjectPage = () => {
  return (
    <main>
      <div className={classes.thumbnailContainer}>
        <img
          src="https://cuberto.com/assets/projects/flipaclip/cover.jpg"
          alt="thumbnail"
          className={classes.thumbnail}
        />
      </div>
      <div className={classes.container}>
        <section>
          <h1 className={classes.title}>Snap Link</h1>
          <p className={classes.description}>
            SnapLink makes it effortless to share files, links, and documents
            across multiple devices. With a user-friendly interface, you can
            quickly send and receive content without the hassle of complicated
            setups.
          </p>
          <p className={classes.caption}>Tags:</p>
          <ul className={classes.tags}>
            <li>
              <Tag name="Node JS" icon={tagIconsMap['node-js']} />
            </li>
            <li>
              <Tag name="React" icon={tagIconsMap.react} />
            </li>
            <li>
              <Tag name="Development" icon={tagIconsMap.development} />
            </li>
          </ul>
          <p className={classes.caption}>Links:</p>
          <ul className={classes.links}>
            <li>
              <Button variant="outlined">
                <RiGlobalLine />
                Website
              </Button>
            </li>
            <li>
              <Button variant="outlined">
                <RiGithubFill />
                GitHub Repo
              </Button>
            </li>
          </ul>
        </section>
        <Separator className={classes.separator} />
        <section className={clsx(classes.content, 'rich-text')}>
          <h2>Introduction</h2>
          <p>
            SnapLink makes it effortless to share files, links, and documents
            across multiple devices. With a user-friendly interface, you can
            quickly send and receive content without the hassle of complicated
            setups.
          </p>
          <img
            src="https://cuberto.com/assets/projects/flipaclip/cover.jpg"
            alt=""
          />
          <h2>The challenge</h2>
          <p>
            File sharing tools often involve complicated setups, compatibility
            issues, or require users to navigate through clunky interfaces.
            These challenges inspired the creation of SnapLink, a solution that
            makes file sharing:
          </p>
          <p>
            Quick and hassle-free. Intuitive and accessible for users of all
            tech proficiency levels. Cross-platform, allowing smooth integration
            across devices and operating systems.
          </p>
          <h2>Designing</h2>
          <p>
            The design process began with a deep understanding of the
            user&apos;s pain points and expectations. Key design principles
            included:
          </p>
          <h3>1. Simplicity</h3>
          <p>
            The user interface (UI) was crafted to be minimalistic and
            intuitive. The goal was to ensure users could share files and links
            in just a few clicks.
          </p>
          <img
            src="https://cuberto.com/assets/projects/flipaclip/cover.jpg"
            alt=""
          />
          <p>
            A clean dashboard showing recent transfers. Drag-and-drop
            functionality for uploading files. Clearly labeled buttons for
            sending and receiving content.
          </p>
          <h3>2. Accessibility</h3>
          <p>
            SnapLink&apos;s design prioritized inclusivity, ensuring it was easy
            to navigate for users with varying levels of technical expertise.
            Features like large icons, responsive layouts, and guided tooltips
            were integrated for clarity.
          </p>
          <h3>3. Visual Feedback</h3>
          <p>
            To enhance the user experience, we included real-time visual cues,
            such as progress bars during file transfers, confirmation
            notifications, and error messages when issues arise.
          </p>
        </section>
      </div>
    </main>
  );
};

export default ProjectPage;
