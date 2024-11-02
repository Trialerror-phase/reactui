// src/components/ApplyForSupport.js
import React from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';

const ApplyForSupport = () => {
  const { t } = useTranslation();

  return (
    <div>
       <Header title="Apply for Support" />
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
