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
        return (!res.ok)
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
        return (!res.ok)
          ? res.json().then(e=>Promise.reject(e))
          : res.json()
      })
  },

  getStudentById(student_id) {
    return fetch(`${config.API_BASE_URL}/students/id/${student_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e=>Promise.reject(e))
          : res.json()
      });
  },

  addStudent(student) {
    return fetch(`${config.API_BASE_URL}/students/${student.teacher_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(student),
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e=>{throw e})
        }
      })
  },

  putStudent(student) {
    return fetch(`${config.API_BASE_URL}/students/id/${student.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(student),
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e=>{throw e})
        }
      });
  },

  deleteStudent(id) {
    return fetch(`${config.API_BASE_URL}/students/id/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e=>{throw e})
        }
      })
  },
};

export default StudentsApiService;