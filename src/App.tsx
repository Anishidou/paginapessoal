import React from 'react';
import Header from './Componente/Header';
import './style/App.css';
import {useEffect} from 'react';
import Footer from './Componente/Footer';


function App() {
  useEffect(()=>{
    document.title='Gilberto Luis | Sobre';
  });

  return (
    <div className="App">
      <Header/>
        <div className='Container'>
          <p className='paragrafo'>
            Meu nome é Gilberto Luis aluno do curso de Sistemas de Informação da {}
            <a href="https://www.aedb.br/">Associação Educacional Dom Bosco</a>, tenho grande interesse em desafios de lógica e programação.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus. Enim tortor at auctor urna. Odio pellentesque diam volutpat commodo sed egestas egestas. Augue lacus viverra vitae congue eu. Maecenas ultricies mi eget mauris pharetra. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Porta non pulvinar neque laoreet suspendisse interdum. At volutpat diam ut venenatis tellus in metus vulputate. Mauris pellentesque pulvinar pellentesque habitant morbi. Neque egestas congue quisque egestas diam in. Orci a scelerisque purus semper eget duis at. Maecenas ultricies mi eget mauris pharetra et. Tortor dignissim convallis aenean et tortor at risus.
          </p>
        </div>
      <Footer/>
    </div>
  );
}

export default App;