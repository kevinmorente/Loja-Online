import React, { useState } from 'react';
import './loginStyle.css';
import { Header } from '../components/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementar lógica de login aqui
    console.log('Login:', email, password);
  };

  return (
    <div className='topMain'>
      <Header/>
      <div className='main'>
        <div className='subMain'>
          <h2 className='login-heading'>LOGIN</h2>
          <label className='login-label'>Email:</label>
          <input type="email" className='login-input' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label className='login-label'>Senha:</label>
          <input type="password" className='login-input' value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button className='login-button' onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
