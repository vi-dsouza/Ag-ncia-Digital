import { useState } from 'react'
import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import Inicio from './Pages/Inicio/Inicio.jsx';
import Servicos from './Pages/Serviços/Servicos.jsx';
import Sobre from './Pages/Sobre/Sobre.jsx';
import Integrantes from './Pages/Integrantes/Integrantes.jsx';
import Contato from './Pages/Contato/Contato.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {

  return (
      <div>
        <div id='header'><Header/></div>
        <div id='inicio'><Inicio/></div>
        <div id='banner'><Banner/></div>
        <div id='servicos'><Servicos/></div>
        <div id='sobre'><Sobre/></div>
        <div id='integrantes'><Integrantes/></div>
        <div id='contato'><Contato/></div>
        <div id='footer'><Footer/></div>
      </div>
  )
}

export default App
