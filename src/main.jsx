import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Explore from './assets/Explore.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  </BrowserRouter>
);
