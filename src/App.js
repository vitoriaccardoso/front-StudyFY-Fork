// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroAluno from './pages/CadastroAluno'
import CadastroProfessor from './pages/CadastroProfessor';
import LoginAluno from './pages/Login'
import GrupoMentoria from './pages/GrupoMentoria';
import * as C from './styles/app'

function App() {
  console.log('oiioiiiioo');
  
  return (
    <C.Container>
      <Router>
        <Routes>
          <Route exact path='/' element={<CadastroAluno />} />
          <Route exact path="/login" element={<LoginAluno />} />
          <Route path='/cadastroProfessor' element={<CadastroProfessor />} />
          <Route path='/cadastroAluno' element={<CadastroAluno />} />
        </Routes>
      </Router>
    </C.Container>
  );
}

export default App;
