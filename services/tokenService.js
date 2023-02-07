import jsonwebtoken from 'jsonwebtoken';
import TokenModel from '../models/tokenMdel.js';

class TokenService {
  generateTokens(payload) {
    const accessToken = jsonwebtoken.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
    const refreshToken = jsonwebtoken.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(user, refreshToken) {
    const tokenData = await TokenModel.findOne({ user });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    await TokenModel.create({ user, refreshToken });
  }

  async removeToken(refreshToken) {
    const tokenData = await TokenModel.deleteOne({ refreshToken });
    return tokenData;
  }

  validateRefreshToken(token) {
    try {
      const userData = jsonwebtoken.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async findToken(refreshToken) {
    const tokenData = await TokenModel.findOne({ refreshToken });
    return tokenData;
  }
}

const tokenService = new TokenService();
export default tokenService;
