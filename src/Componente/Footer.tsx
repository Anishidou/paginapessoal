import React from 'react';
import '../style/Header.css';
import {Link} from 'react-router-dom'
import { SiLinkedin, SiGithub} from 'react-icons/si';
import { MdOutlineEmail} from 'react-icons/md';

function Footer() {
  return (
    <header className='footer'>
      <a href="mailto:gilbertoluisguedessilva@hotmail.com"><MdOutlineEmail className='icon'/></a>
      <a href="https://github.com/Anishidou"><SiGithub className='icon'/></a>
      <a href="https://www.linkedin.com/in/gilberto-lu%C3%ADs-47aa48165/"><SiLinkedin className='icon'/></a>
    </header>
  )
}

export default Footer