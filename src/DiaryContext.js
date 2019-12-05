import React from 'react';

const DiaryContext = React.createContext({
  admin: false,
  users: [],
  students: [],
  notes: [],
  setAdminStatus: () => {},
  addStudentToContext: () => {},
  addUserToContext: () => {},
  addNewNote: () => {},
  setStore: () => {},
});

export default DiaryContext;