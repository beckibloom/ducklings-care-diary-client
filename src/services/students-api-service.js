import config from '../config';
import TokenService from './token-service';

const StudentsApiService = {
  getStudentByParent() {
    return fetch(`${config.API_BASE_URL}/students`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e=>Promise.reject(e))
          : res.json()
      });
  },

  getStudentsByTeacher(teacher_id) {
    return fetch(`${config.API_BASE_URL}/students/${teacher_id}`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        //having trouble getting response data to be read after GET request is completed, but the response shows up in the Network tab.
        console.log(res);
        (!res.ok)
          ? res.json().then(e=>Promise.reject(e))
          : res.json()
      })
  },
};

export default StudentsApiService;