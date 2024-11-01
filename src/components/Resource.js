// src/components/Resource.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Resource = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('resource')}</h1>
      <p>Find helpful information, guides, and resources to support students and parents.</p>
      <ul>
        <li>Scholarship Opportunities</li>
        <li>Local Education Programs</li>
        <li>Guides for Parents and Guardians</li>
      </ul>
    </div>
  );
};

export default Resource;
