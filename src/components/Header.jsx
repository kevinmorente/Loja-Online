import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './headerStyle.css';


export const Header = () => {

  const [Nav, setNav] = useState(false);

  const Click = () => {
    setNav(!Nav);
  };


  return (
    <header className='header'>
        <nav className="nav">
            <a className='logo' href='/'>👜</a>
            <button className={Nav ? 'hamburger-active' : 'hamburger'} onClick={Click}></button>
            <ul className={Nav ? 'list-active' : 'list'}>
                <li><Link to="/">INICIO ↩️</Link></li>
                <li><Link to="/applogin">LOGIN 🙋‍♂️</Link></li>
                <li><Link to="/cart">ACESSORIOS 👛</Link></li>
                <li><Link to="/cart">SEU CARRINHO 🛒</Link></li>
            </ul> 
        </nav>
    </header>
    
  )
}
