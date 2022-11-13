import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import Curriculo from './Curriculo';
import Projetos from './Projetos';
import Contato from './Contato';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./style/index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    // errorElement: <Erro/>
  },
  {
    path: "/Curriculo",
    element: <Curriculo/>,
    // errorElement: <Erro/>
  },
  {
    path: "/Projetos",
    element: <Projetos/>,
    // errorElement: <Erro/>
  },
  {
    path: "/Contato",
    element: <Contato/>,
    // errorElement: <Erro/>
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);