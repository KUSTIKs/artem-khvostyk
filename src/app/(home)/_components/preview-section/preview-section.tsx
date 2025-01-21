import classes from './preview-section.module.scss';

const PreviewSection = () => {
  return (
    <section className={classes.section}>
      <video muted autoPlay loop playsInline className={classes.video}>
        <source src="https://cuberto.com/assets/showreel/short.mp4" />
      </video>
    </section>
  );
};

export { PreviewSection };
