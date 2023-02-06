import tokenService from '../services/tokenService.js';

const saveRefreshToken = (u, t) => {
  tokenService.saveToken(u, t);
};

const getTokens = (u) => {
  const t = tokenService.generateTokens({ ...u });
  saveRefreshToken(u.id, t.refreshToken);
  return t;
};

export default getTokens;
