import React from 'react';

const DiaryContext = React.createContext({
  admin: false,
  users: [],
  students: [],
  notes: [],
  teacherId: '',
  setAdminStatus: () => {},
  addStudentToContext: () => {},
  addUserToContext: () => {},
  addNewNote: () => {},
  setStore: () => {},
  updateTeacherId: () => {},
  updateStudentInContext: () => {},
});

export default DiaryContext;