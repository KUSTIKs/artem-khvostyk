const getPaginationRange = (pageIndex: number, pageSize: number) => {
  const from = pageSize * pageIndex;
  const to = from + pageSize - 1;

  return { from, to };
};

export { getPaginationRange };
