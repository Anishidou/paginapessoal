import React from 'react';
import Header from './Componente/Header';
import './style/App.css';
import {useEffect} from 'react';
import Footer from './Componente/Footer';
import ProgressBar from "@ramonak/react-progress-bar";


function App() {
  useEffect(()=>{
    document.title='Gilberto Luis | Sobre';
  });

  let data_I = new Date('06/01/2021');
  let data_M = new Date();
  let data_F = new Date('06/01/2025');

  function diasAte(dt1: Date, dt2: Date){
    let diferenca = dt1.getTime() - dt2.getTime();
    return Math.ceil(diferenca / (1000 * 3600 * 24));
  }
  const diasTotais = diasAte(data_F, data_I);
  const diasProgresso = diasAte(data_M, data_I);
  const diaFinal = diasAte(data_F, data_M);
  

  return (
    <div className="App">
      <Header/>
        <div className='Container'>
          <p className='paragrafo'>
            Meu nome é Gilberto Luis aluno do curso de Sistemas de Informação da {}
            <a href="https://www.aedb.br/">Associação Educacional Dom Bosco</a>.
          </p>
          <p>
            Dias até graduação {diaFinal}
          </p>
          <ProgressBar completed={diasProgresso} maxCompleted={diasTotais} customLabel=' '/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;