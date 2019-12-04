import React from 'react';

const DiaryContext = React.createContext({
  admin: false,
  setAdmin: () => {},
});

export default DiaryContext;