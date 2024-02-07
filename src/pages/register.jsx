import React, { useState } from 'react';
import { Header } from '../components/Header';
import './registerStyle.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Implementar lógica de registro aqui
    console.log('Register:', fullName, email, address, cpf, password, confirmPassword);
  };

  return (
    <div>
    <Header />
    <div className='main-register' >
    <div className='register-container'>
      <h2 className='register-heading'>REGISTRAR</h2>
      <label className='register-label'>Nome Completo:</label>
      <input type="text" className='register-input' value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <br />
      <label className='register-label'>Email:</label>
      <input type="email" className='register-input' value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label className='register-label'>Endereço:</label>
      <input type="text" className='register-input' value={address} onChange={(e) => setAddress(e.target.value)} />
      <br />
      <label className='register-label'>CPF:</label>
      <input type="text" className='register-input' value={cpf} onChange={(e) => setCpf(e.target.value)} />
      <br />
      <label className='register-label'>Senha:</label>
      <input type="password" className='register-input' value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <label className='register-label'>Confirmação de Senha:</label>
      <input
        type="password"
        className='register-input'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button className='register-button' onClick={handleRegister}>Register</button>
    </div>
    </div>
    </div>
  );
};

export default Register;
