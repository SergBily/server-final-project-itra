const sortLargestCollections = (collectionsId, allItems) => {
  const size = allItems.map((i) => i.length);
  return collectionsId
    .map((p, index) => [p, size[index]])
    .sort((a, b) => b[1] - a[1]);
};

export default sortLargestCollections;
