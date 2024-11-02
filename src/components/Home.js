// src/components/Home.js
import React from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
    <Header title="Home" backgroundImage="src\assets\secondary-1170x536.jpg" />
    <div className="container">
      <p>Welcome to our non-profit organization website!</p>
    </div>
  </div>
  );
};

export default Home;
