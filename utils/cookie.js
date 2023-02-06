export const setRefreshTokenCookie = (r, t) => {
  const maxAge = 30 * 24 * 60 * 60 * 1000;
  r.cookie('refreshToken', t, { maxAge, httpOnly: true });
};

export default setRefreshTokenCookie;
