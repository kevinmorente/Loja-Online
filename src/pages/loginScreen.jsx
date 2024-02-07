// AppLogin.jsx
import React, { useState } from 'react';
import Login from './login';
import Register from './register';
import './loginScreenStyle.css'; // Importando o arquivo CSS

export const AppLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="app-login"> {/* Aplicando a classe "app-login" */}
      {isLogin ? <Login /> : <Register />}
      <p className='par'>
        {isLogin ? "Não está registrado? ➡️" : 'Já tem uma conta? ➡️'}
        <button className='btnres' onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'REGISTRAR' : 'ENTRAR'}
        </button>
      </p>
      <main className='hero'></main>
    </div>
  );
};
