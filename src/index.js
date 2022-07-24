import React from 'react'; 
//es como crear: let react = import ./carperta llamada de algun lugar en toda mi carpeta que se llame react. 

import ReactDOM from 'react-dom/client';
import App from './components/App'; //carga la app que hice
import './components/estilos.css'; //carga el css 
import 'bootstrap/dist/css/bootstrap.min.css'; //esto carga bootstrap

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />) //lo muestra en el render
;

