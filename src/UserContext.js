

import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState('');

  const setUser = (data) => {
    console.log(data);
    setUserInfo(data);
  };

  return (
    <UserContext.Provider value={{ userInfo, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
