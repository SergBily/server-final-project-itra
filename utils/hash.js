import bcrypt from 'bcrypt';

export const getHashPassword = async (p) => {
  const salt = 3;
  return bcrypt.hash(p, salt);
};

export const comparePassword = async (p, u) => bcrypt.compare(p, u);
