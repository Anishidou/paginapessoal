import React from 'react';
import Header from './Componente/Header';
import Footer from './Componente/Footer';
import './style/App.css';
import {useEffect} from 'react';

function Lista(props: any) {
  return  <tr>
            <th>
              {props.proj.Nome}
            </th>
            <th>
              <a href={"https://"+ props.proj.Codigo}>{props.proj.Codigo}</a>
            </th>
            <th>
              <a href={"https://"+ props.proj.Link}>{props.proj.Link}</a>
            </th>
          </tr>
  
}

function Projetos() {
  const projs = [
    {
      'Nome': 'CoreTemp',
      'Codigo': 'github.com/Anishidou/CoreTemp',
      'Link': ''
    },
    {
      'Nome': 'Site Pessoal',
      'Codigo': 'github.com/Anishidou/paginapessoal',
      'Link': 'anishidou.github.io/paginapessoal/'
    },
  ];
  useEffect(()=>{
    document.title='Gilberto Luis | Projetos';
  });
  return (
    <div className="App">
      <Header/>
        <div className='Container'>
	      <h1>Projetos Pessoais</h1>
	        <table>
            <thead>
              <tr>
                <th>
                  Nome
                </th>
                <th>
                  Código
                </th>
                <th>
                  Exemplo
                </th>
              </tr>
            </thead>
            <tbody>
            {projs.map((proj) => <Lista proj={proj} />)}
            </tbody>
          </table>
        </div>
      <Footer/>
    </div>
  );
}

export default Projetos;