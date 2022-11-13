import React from 'react';
import { useState} from 'react'
import '../style/Header.css';
import {Link} from 'react-router-dom';
import { useRef } from "react";
import { FiMenu } from 'react-icons/fi'

function Header(props: any) {  
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <header className='header'>
      <Link to={`/`}><button>Gilberto</button></Link>
      <button onClick={() => {try{props.onClick(isNavExpanded)}catch{}; setIsNavExpanded(!isNavExpanded)}} className='hamburguer'><FiMenu/></button>
      <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <ul>
          <li>
            <Link to={`/`}><button>Sobre</button></Link> 
          </li>
          <li>
            <Link to={`/Curriculo`}><button>Currículo</button></Link> 
          </li>
          <li>
            <Link to={`/Projetos`}><button>Projetos</button></Link> 
          </li>
          <li>
            <Link to={`/Contato`}><button>Contato</button></Link> 
          </li>
        </ul>
      </div>
  </header>
  )
}

export default Header