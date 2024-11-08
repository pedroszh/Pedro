import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Se houver estilos globais
import App from './App';  // O componente principal

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Aqui o React será montado
);
