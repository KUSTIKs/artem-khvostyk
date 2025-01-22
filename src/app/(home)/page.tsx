import { Separator } from '#src/components/core/separator/separator';
import { HeroSection } from './_components/hero-section/hero-section';
import { PreviewSection } from './_components/preview-section/preview-section';
import { SelectedWorkSection } from './_components/selected-work-section/selected-work-section';

import classes from './home.module.scss';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <div className={classes.section}>
        <Separator />
      </div>
      <PreviewSection />
      <div className={classes.section}>
        <Separator />
      </div>
      <SelectedWorkSection />
    </main>
  );
};

export default HomePage;
