import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

const UserInfo = () => {
  const { userInfo } = useContext(UserContext);
console.log(userInfo);
  return (
    
    <div>
      <h2>User Information</h2>
      {userInfo && (
        <div>
          <p>Username: {userInfo.username}</p>
          <p>Password: {userInfo.password}</p>
        </div>
      )}
    </div>
  );
};
export default UserInfo;