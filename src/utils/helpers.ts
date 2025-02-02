const pluralize = (word: string, count: number) => {
  const isOne = count % 10 === 1;
  return isOne ? word : `${word}s`;
};

const base64ToBlob = async (base64: string) => {
  const response = await fetch(base64);
  const blob = await response.blob();
  return blob;
};

const getPaginationRange = (pageIndex: number, pageSize: number) => {
  const from = pageSize * pageIndex;
  const to = from + pageSize - 1;

  return { from, to };
};

const validateHexColor = (color: string) => {
  const isValidFormat = color.startsWith('#') && color.length === 7;
  const colorValue = Number(`0x${color.slice(1)}`);

  return isValidFormat && !Number.isNaN(colorValue);
};

export { pluralize, base64ToBlob, getPaginationRange, validateHexColor };
