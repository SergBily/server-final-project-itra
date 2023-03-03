import UserModel from '../models/userModel.js';
import UserDto from '../dtos/userDto.js';
import TokenModel from '../models/tokenMdel.js';

class AdminService {
  async getAllUsers() {
    const users = await UserModel.find();
    return users.map((u) => new UserDto(u));
  }

  async deleteUsers(id) {
    await TokenModel.deleteOne({ user: id });
    return UserModel.deleteOne({ _id: id });
  }

  blockAndUnblockUsers(_id, status) {
    return UserModel.updateOne({ _id }, { $set: { status } });
  }

  changeRoleUsers(_id, role) {
    console.log(_id, role, 2);
    return UserModel.updateOne({ _id }, { $set: { role } });
  }
}

const adminService = new AdminService();
export default adminService;
