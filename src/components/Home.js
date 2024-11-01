// src/components/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home')}</h1>
      <p>Welcome to our organization helping provide school funding in Kisumu.</p>
    </div>
  );
};

export default Home;
