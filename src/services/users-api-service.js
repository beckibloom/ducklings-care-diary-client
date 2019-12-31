import config from '../config';
import TokenService from './token-service';

const UsersApiService = {
  postUser(newUser) {
    return fetch(`${config.API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e=>Promise.reject(e))
          : res.json()
      });
  },

  getUserData(cb) {
    return fetch(`${config.API_BASE_URL}/users/data`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e=>Promise.reject(e))
          : cb(res.json());
      });
  },
};

export default UsersApiService;