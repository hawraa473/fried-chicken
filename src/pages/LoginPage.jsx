// LoginPage.js

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext'; 

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {


    const userData = { username, password };
    setUser(userData);
    console.log(userData);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label htmlFor="username"> Username </label>
        <input
          type="text"
          id='username'
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
         <br />
        <label htmlFor="password"> password </label>
        <input
          type="password"
          id='password'
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />  
        <br />
        {}
        <Link to="/userInfo">
          <button type="button" onClick={handleLogin}>Login</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;


