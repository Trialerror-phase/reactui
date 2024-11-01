// src/components/About.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('about')}</h1>
      <p>Our organization is dedicated to helping underprivileged students by funding their education in Kisumu, Kenya.</p>
    </div>
  );
};

export default About;
