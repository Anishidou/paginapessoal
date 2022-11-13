import React from 'react';
import Header from './Componente/Header';
import Footer from './Componente/Footer';
import './style/App.css';
import {useEffect, useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import designpdf from './design.pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css';

function Curriculo() {
  useEffect(()=>{
    document.title='Gilberto Luis | Currículo';
  });
  const [isNavExpanded, setIsNavExpanded] = useState(true)

  return (
    <div className="App">
      <Header onClick={(value: any) => setIsNavExpanded(value)} />
        <div className='Container'>
          <Document file={designpdf} className={isNavExpanded ? "pdf" : "pdf expanded"}>
            <Page pageNumber={1}  renderAnnotationLayer={false}/>
          </Document>          
        </div>
      <Footer/>
    </div>
  );
}

export default Curriculo;