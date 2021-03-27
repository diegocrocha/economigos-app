import React from 'react';
import Institucional from './pages/Institucional/index.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import GlobalStyle from './styles/global.js';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" exact element={<Institucional />} />
        {/* <Route path="/login" exact element={<Login />} /> */}
        {/* <Route path="/cadastro" exact element={<Cadastro />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
