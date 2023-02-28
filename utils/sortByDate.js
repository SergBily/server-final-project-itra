export const sortByDateDown = (c) => c.sort(
  (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt),
);

export const sortByDateUp = (c) => c.sort(
  (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt),
);
