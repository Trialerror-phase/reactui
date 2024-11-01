// src/components/SupportUs.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const SupportUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('supportUs')}</h1>
      <p>Your support can help us reach more children in need. Join us in making education accessible.</p>
      <button>Donate Now</button>
    </div>
  );
};

export default SupportUs;
