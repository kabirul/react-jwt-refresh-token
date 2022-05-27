import api from './api';

class UserService {
  getPublicContent() {
    return api.get('/users/all');
  }

  getUserBoard() {
    return api.get('/users/user');
  }

  getModeratorBoard() {
    return api.get('/users/mod');
  }

  getAdminBoard() {
    return api.get('/users/admin');
  }
}

export default new UserService();
