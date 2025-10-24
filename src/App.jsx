import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import WhatsAppButton from './components/WhatsAppButton';
import { models } from './data';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      <WhatsAppButton number={models[0].whatsapp} />
    </div>
  );
}

export default App;
