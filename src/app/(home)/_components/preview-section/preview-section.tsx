import { HighlightCard } from '#src/components/common/highlight-card/highlight-card';

import classes from './preview-section.module.scss';

const PreviewSection = () => {
  return (
    <section className={classes.section}>
      <div className={classes.highlights}>
        <HighlightCard
          title="Nextra: Docs Starter Kit Simple, powerful and flexible markdown-powered docs site. Built with Next.js."
          topic="project"
          imageSrc="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F5RZetTd7rd1mQtoZt2fajA%2F747eabb89b6378ecfc0ef433f5e47a01%2FCleanShot_2022-12-02_at_12.07.44.png&w=640&q=75"
          href="/"
        />
        <HighlightCard
          title="Admin Dashboard Template Tailwind CSS, Postgres, and Auth set up."
          topic="project"
          imageSrc="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2Ffmmsa0AREAIvMGl9PzGew%2F672c15e2995c5a9d217fbf1997ee6eb4%2FCleanShot_2024-04-13_at_21.27.16_2x.png&w=640&q=75"
          href="/"
        />
        <HighlightCard
          title="Next.js Commerce Starter kit for high-performance commerce with Shopify."
          topic="thought"
          imageSrc="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F1RzhtOHEvW7xyn9qAsdr5E%2F85331c32482b7d022585c39ddb3ae9f2%2FCleanShot_2023-07-24_at_21.37.15_2x.png&w=640&q=75"
          href="/"
        />
        <HighlightCard
          title="Portfolio Starter Kit Easily create a portfolio with Next.js and Markdown."
          topic="project"
          imageSrc="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F2QHjwNHn9NzlflFlEqcwJv%2F1f7b5363a4a4591c4a85d106c868da71%2FCleanShot_2022-08-08_at_15.58.48.png&w=640&q=75"
          href="/"
        />
      </div>
      <video muted autoPlay loop playsInline className={classes.video}>
        <source src="https://cuberto.com/assets/showreel/short.mp4" />
      </video>
    </section>
  );
};

export { PreviewSection };
