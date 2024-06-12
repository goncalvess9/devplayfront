import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LandingPage from './pages/LandingPage';
import Contato from './pages/Contato';
import Produtos from './pages/Produtos';
import Login from './pages/Login';
import Menu from './pages/Menu';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/Contato" element={<Contato />} />
  <Route path="/Produtos" element={<Produtos />} />
  <Route path='/Login' element={<Login />} />
  <Route path='/Menu' element={<Menu/>} />
  </Routes>
  </BrowserRouter>
);

