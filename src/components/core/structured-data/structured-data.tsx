type Props = {
  data: unknown;
};

const StructuredData = ({ data }: Props) => {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: data must be safe
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
};

export { StructuredData };
