// src/components/About.js
import React from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
       <Header title="About" />
      <p>Our organization is dedicated to helping underprivileged students by funding their education in Kisumu, Kenya.</p>
    </div>
  );
};

export default About;
