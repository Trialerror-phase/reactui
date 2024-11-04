// src/components/ApplyForSupport.js
import React from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';

const ApplyForSupport = () => {
  const { t } = useTranslation();

  return (
    <div>
       <Header title="Apply for Support" />
       <h1>Eligibility criteria</h1>
       <p>Before you start working on an application, please check the eligibility criteria to see whether the applicant and the application is eligible. </p>
       <p>An applicant is eligible for secondary or higher education support, if they meet all of the following criteria:</p>
       <ul>
        <li>they live in (western) Kenya;</li>
        <li>they are between:
          <ol>
            <li>14-25 years for secondary support or </li>
            <li>18-30years for higher education support</li>
          </ol>
        </li>
        <li>they have obtained the:
          <ol>
            <li>KCPE</li>
            <li>KCSE</li>
          </ol>
        </li>
        <li>their parents or caregivers or they themselves:  have insufficient  financial means to attend and complete secondary or higher education; but  are committed to contribute financially or in-kind to the education of the applicant; </li>
        <li>the applicationincludes a motivational letter</li>
        <li>the school of preference is officially registered as a government school</li>
        <li>they include at least one support letter from school teacher or community leader</li>
        <li>the do not qualify for busaries and sponsorships from the Kenyan government</li>
       </ul>

       <p>An applicant is eligible for income generation support, if they meet all of the following criteria:</p>
       <ul>
        <li></li>
       </ul>
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
