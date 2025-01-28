import { Separator } from '#src/components/core/separator/separator';
import { getHomePageContent } from '#src/services/sanity/home-page-content';
import { HeroSection } from './_components/hero-section/hero-section';
import { PreviewSection } from './_components/preview-section/preview-section';
import { SelectedWorkSection } from './_components/selected-work-section/selected-work-section';

import classes from './home.module.scss';

const HomePage = async () => {
  const content = await getHomePageContent();

  return (
    <main>
      <HeroSection title={content.title} />
      <div className={classes.section}>
        <Separator />
      </div>
      <PreviewSection
        highlights={content.highlights}
        mainVideo={content.mainVideo}
      />
      <div className={classes.section}>
        <Separator />
      </div>
      <SelectedWorkSection selectedWork={content.selectedWork} />
    </main>
  );
};

export default HomePage;
