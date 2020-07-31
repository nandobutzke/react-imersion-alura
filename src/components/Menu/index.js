import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo Pricipal NandoFlix" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/adicionar/video">
        Add New Video
      </Button>
    </nav>
  )
}

export default Menu;