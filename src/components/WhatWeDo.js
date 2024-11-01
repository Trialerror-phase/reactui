// src/components/WhatWeDo.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const WhatWeDo = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('whatWeDo')}</h1>
      <p>We provide financial assistance for school fees to ensure children in Kisumu have access to education.</p>
    </div>
  );
};

export default WhatWeDo;
