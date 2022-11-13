import React from 'react';
import Header from './Componente/Header';
import Footer from './Componente/Footer';
import './style/App.css';
import {useEffect} from 'react';
import { SiLinkedin, SiGithub} from 'react-icons/si';
import { MdOutlineEmail} from 'react-icons/md';


function Contato() {
  useEffect(()=>{
    document.title='Gilberto Luis | Contato';
  });
  return (
    <div className="App">
      <Header/>
        <div className='Container'>
          <h1>Contato</h1>
          <table className='tbContato'>
              <tr>
                <th>
                  <MdOutlineEmail/> {}
                  Email:
                </th>
                <th>
                <a href="mailto:gilbertoluisguedessilva@hotmail.com">gilbertoluisguedessilva@hotmail.com</a>
                </th>
              </tr>
              <tr>
                <th>
                  <SiGithub/> {}
                  Github:
                </th>
                <th>
                  <a href="https://github.com/Anishidou">https://github.com/Anishidou</a>
                </th>
              </tr>
              <tr>
                <th>
                  <SiLinkedin/> {}
                  Linkedin:
                </th>
                <th>
                  <a href="https://www.linkedin.com/in/gilberto-lu%C3%ADs-47aa48165/">https://www.linkedin.com/in/gilberto-lu%C3%ADs-47aa48165/</a>
                </th>
              </tr>
          </table>
        </div>
      <Footer/>
    </div>
  );
}

export default Contato;