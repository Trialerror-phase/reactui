// src/components/Home.js
import React from 'react';
import Header from './Header';
import './Header.css';



import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="about" >
    <Header title="With education
to the next level"  />
    <div className="container">
      <p>
      <b>Karibu!</b> <br />
      Ya Juu Foundation supports young people in need to attain secondary and higher education.<br />
      Ya Juu Foundation also supports young people in need to obtain the skills or opportunities to generate income. We focus on (Western) Kenya.

      </p>
      <p>test</p>
      <img
          src="src\assets\secondary-1170x536.jpg" // Replace with the URL or path to your image
          alt="Our mission"
          className="home-image"
        />
    </div>
  </div>
  );
};

export default Home;
