import { DrawingCardPreview } from '#src/components/common/drawing-card-placeholder/drawing-card-placeholder';
import { DrawingCard } from '#src/components/common/drawing-card/drawing-card';

import classes from './preview-step-content.module.scss';

const PreviewStepContent = () => {
  return (
    <div className={classes.frame}>
      <div className={classes.drawings}>
        <DrawingCardPreview />
        <DrawingCard
          drawingSrc="/"
          title="My masterpiece"
          author="KUSTIKs"
          date={new Date()}
        />
        <DrawingCardPreview />
      </div>
    </div>
  );
};

export { PreviewStepContent };
