import React, { useState } from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import './ApplyForSupport.css'; // Optional: For additional styling

const ApplyForSupport = () => {
  const { t } = useTranslation();

  // State to manage which form is visible
  const [selectedForm, setSelectedForm] = useState('none');

  const renderForm = () => {
    switch (selectedForm) {
      case 'higherEducation':
        return (
          <form className="application-form">
            <h2>Higher Education Application</h2>
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
              Institution:
              <input type="text" name="institution" />
            </label>
            <br />
            <label>
              Reason for Applying:
              <textarea name="reason"></textarea>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        );
      case 'secondaryEducation':
        return (
          <form className="application-form">
            <h2>Secondary Education Application</h2>
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
              School:
              <input type="text" name="school" />
            </label>
            <br />
            <label>
              Reason for Applying:
              <textarea name="reason"></textarea>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        );
      case 'businessSupport':
        return (
          <form className="application-form">
            <h2>Business Support Application</h2>
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
              Business Idea:
              <textarea name="businessIdea"></textarea>
            </label>
            <br />
            <label>
              Reason for Applying:
              <textarea name="reason"></textarea>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        );
      default:
        return <p>Please select an application form to get started.</p>;
    }
  };

  return (
    <div>
      <Header title="Apply for Support" />
      <h1>Eligibility Criteria</h1>
      <p>
        Before you start working on an application, please check the eligibility criteria to see whether the applicant and the application are eligible.
      </p>
      <h2>Select the Application Type</h2>
      <div className="button-container">
        <button onClick={() => setSelectedForm('higherEducation')}>Higher Education</button>
        <button onClick={() => setSelectedForm('secondaryEducation')}>Secondary Education</button>
        <button onClick={() => setSelectedForm('businessSupport')}>Business Support</button>
      </div>
      <div className="form-container">{renderForm()}</div>
    </div>
  );
};

export default ApplyForSupport;
