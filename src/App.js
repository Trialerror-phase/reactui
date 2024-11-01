// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import ApplyForSupport from './components/ApplyForSupport';
import SupportUs from './components/SupportUs';
import Resource from './components/Resource';
import LanguageSwitcher from './components/LanguageSwitcher';
import Navbar from './components/NavBar'; // Import Navbar
import './i18n';

function App() {
  return (
    <Router>
      <LanguageSwitcher />
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/apply-for-support" element={<ApplyForSupport />} />
        <Route path="/support-us" element={<SupportUs />} />
        <Route path="/resource" element={<Resource />} />
      </Routes>
    </Router>
  );
}

export default App;
