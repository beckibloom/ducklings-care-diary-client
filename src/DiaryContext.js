import React from 'react';

const DiaryContext = React.createContext({
  admin: null,
  users: [],
  students: [],
  notes: [],
  teacherId: '',
  studentNotes: [],
  parentEmail: '',
  setAdminStatus: () => {},
  addStudentToContext: () => {},
  addUserToContext: () => {},
  addNewNote: () => {},
  setStore: () => {},
  updateTeacherId: () => {},
  updateStudentInContext: () => {},
  filterNotesByStudent: () => {},
  updateParentEmail: () => {},
  setError: () => {},
});

export default DiaryContext;