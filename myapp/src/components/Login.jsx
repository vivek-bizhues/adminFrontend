import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        username,
        password,
      });
      console.log(response);
      // Assuming the server response includes a 'role' property
      const { role } = response.data.user;

      // Save the role to localStorage
      localStorage.setItem('role', role);
      if(role==="user"){
          navigate("/")
      }else{
          navigate("/adminhome");
        }

      // You may also want to redirect the user to another page upon successful login
      // For example, you can use react-router-dom for this purpose
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
