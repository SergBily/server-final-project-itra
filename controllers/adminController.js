import adminService from '../services/adminService.js';

class AdminController {
  async getAllUsers(_request, response, next) {
    try {
      const users = await adminService.getAllUsers();
      return response.json(users);
    } catch (e) {
      next(e);
    }
  }

  async deleteUsers(request, response, next) {
    try {
      const { id } = request.params;
      await adminService.deleteUsers(id);
      return response.send('deleted');
    } catch (e) {
      next(e);
    }
  }

  async blockAndUnblockUsers(request, response, next) {
    try {
      const { id } = request.params;
      const { status } = request.body;
      await adminService.blockAndUnblockUsers(id, status);
      return response.send('successfully');
    } catch (e) {
      next(e);
    }
  }

  async changeRoleUsers(request, response, next) {
    try {
      const { id } = request.params;
      const { role } = request.body;
      console.log(id, role, 1);
      await adminService.changeRoleUsers(id, role);
      return response.send('successfully');
    } catch (e) {
      next(e);
    }
  }
}

const adminController = new AdminController();
export default adminController;
