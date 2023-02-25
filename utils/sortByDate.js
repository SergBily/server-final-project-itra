const sortByDate = (c) => c.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

export default sortByDate;
