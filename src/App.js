// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import GrupoMentoria from './pages/GrupoMentoria';
import ChatIA from './pages/chatIA'
import ChatPrivado from './pages/ChatPrivado'
import * as C from './styles/app';

function App() {

  return (
    <C.Container>
      <Router>
        <Routes>
          <Route exact path='/' element= {<ChatIA/>} />
          <Route exact path='/cadastro' element={<Cadastro />}/>
          <Route exact path='/grupoMentoria' element={<GrupoMentoria />}/>
        </Routes>
      </Router>
    </C.Container>
  );
}

export default App;
