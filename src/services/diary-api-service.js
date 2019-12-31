import config from '../config';
import TokenService from './token-service';

const DiaryApiService = {
  postNote(note) {
    return fetch(`${config.API_BASE_URL}/diary/${note.student_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(note),
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e=>Promise.reject(e))
          : res.json()
      });
  },

  getNotesByStudentId(student_id) {
    return fetch(`${config.API_BASE_URL}/diary/${student_id}`, {
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

  deleteEntry(student_id, entry_id) {
    return fetch(`${config.API_BASE_URL}/diary/${student_id}/${entry_id}`, {
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
      });
  },
};

export default DiaryApiService;