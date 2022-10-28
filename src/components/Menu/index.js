import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo Pricipal NandoFlix" />
      </Link>
      <Link className="ButtonLink" to="/adicionar/video">
        Add New Video
      </Link>
    </nav>
  );
}
