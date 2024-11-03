// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
      <li className="navbar-item">
          <Link to="/">{t('ngo')}</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">{t('home')}</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">{t('about')}</Link>
        </li>
        <li className="navbar-item">
          <Link to="/what-we-do">{t('whatWeDo')}</Link>
        </li>
        <li className="navbar-item">
          <Link to="/apply-for-support">{t('applyForSupport')}</Link>
        </li>
        <li className="navbar-item">
          <Link to="/support-us">{t('supportUs')}</Link>
        </li>
        <li className="navbar-item">
          <Link to="/resource">{t('resource')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
