// src/components/ApplyForSupport.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const ApplyForSupport = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('applyForSupport')}</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" />
        </label>
        <br />
        <label>
          Reason for Applying:
          <textarea name="reason"></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplyForSupport;
