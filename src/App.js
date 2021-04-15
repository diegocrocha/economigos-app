import React from 'react';
import Institucional from './pages/Institucional/index.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {UserStorage} from './UserContext'
 
import GlobalStyle from './styles/global.js';
import NotFound from './pages/NotFound/NotFound.jsx';
import Login from './pages/Login/index.jsx';
import Cadastro from './pages/Cadastro/index.jsx';
import Appi from './pages/App/Appi.jsx';
// import Dashboard from './pages/Dashboard/index.jsx';
// import Painel from './pages/Painel/index.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <UserStorage>
      <GlobalStyle />
      <Routes>
        <Route path="/" exact element={<Institucional />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/cadastro" exact element={<Cadastro />} />
        <Route path="/app/*" element={<Appi />} />
        <Route path="/test" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </UserStorage>
    </BrowserRouter>
    </>
  );
}

export default App;
