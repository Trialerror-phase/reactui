// src/components/Resource.js
import React from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';

const Resource = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header title="Resounces" />

      <h1>Important Documents </h1>

      <h1>Testimonials </h1>
      <h2>test</h2>
      <p>“Anja paid my school fees which enabled me to study Hospitality and Tourism management. I am an orphan and lived with my grandmother who could not afford the fees. Other relatives were also not able to help me with my education. They have children of their own who are their priority. I chose my field of study because Kenya is a tourist destination and the sector offers opportunities. I worked hard. After I got my degree I expected to get a job immediately. But that was the year the Corona pandemic hit the world. It really affected the tourism industry. Hotels and Lodges closed, and many employees lost their jobs.Read Less

        Now tourists are back but hotels took on mainly former staff. For new staff positions, companies often demand at least five years of experience. I only did an attachment of 1.5 years at a hotel. The competition for a job is stiff as unemployment is very high. To secure a job, one is often asked to bribe or even to sleep with the boss.

        In the meantime, I have a baby girl and provide an income by baking cakes. I love to do that and have made quite a few cakes for birthdays, graduations and other festivities. I also bake cakes which I cut into slices and go around the market with my daughter selling them.

        I am still looking for a job opportunity in tourism because I very much like the industry which gives the opportunity to meet people from many places and learn about different cultures. I had the chance to study and I want to put it to use.”</p>

      <h2></h2>
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
