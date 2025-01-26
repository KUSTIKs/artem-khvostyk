const base64ToBlob = async (base64: string) => {
  const response = await fetch(base64);
  const blob = await response.blob();
  return blob;
};

export { base64ToBlob };
