import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home.jsx';
import Explore from './assets/Explore.jsx';

const rootElement = createRoot(document.getElementById('root'));
rootElement.render(
  <div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />,
      <Route path="/explore" element={<Explore />} />
    </Routes>
  </BrowserRouter>
  </div>
);
