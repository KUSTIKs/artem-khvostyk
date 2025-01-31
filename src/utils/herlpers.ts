const pluralize = (word: string, count: number) => {
  const isOne = count % 10 === 1;
  return isOne ? word : `${word}s`;
};

export { pluralize };
