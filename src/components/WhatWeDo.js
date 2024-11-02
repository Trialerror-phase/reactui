// src/components/WhatWeDo.js
import React from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';

const WhatWeDo = () => {
  const { t } = useTranslation();

  return (
    <div>
       <Header title="What we Do" />
      <p>We provide financial assistance for school fees to ensure children in Kisumu have access to education.</p>
    </div>
  );
};

export default WhatWeDo;
