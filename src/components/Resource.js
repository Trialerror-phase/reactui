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

      <h2>test</h2>
      <p>“I am proud to be the first in my family to graduate from a university with a degree. It made me a role model for my younger siblings and cousins who have worked very hard to also join university after me. It has been quite a journey for me. I studied for a Bachelor of Arts with IT at the Maseno University. After my graduation I got at the same university a post graduate diploma in Education which enabled me to become a qualified high school teacher. 

It was hard to find employment after I finished with my studies in 2013. It took a while before I got a permanent job even at institutions where the pay is very little. But I persevered. Now I have a full time position and teach Kiswahili and Religious Studies at the Rae Girls High School in Nyakach sub-county. Having gone through the education system and being a teacher gave me a broader view of life. Read Less

I am now independent and able to make ends meet for my family which consists of my husband and three sons. I support my siblings too. Like I was supported by Anja. She not only gave me financial support but also encouragement to get me through my education. 

My mum, who worked for Anja, always prioritized education. It hurts me that my mum died even before she could see where I had reached in my career and before tasting my money after all what she did for me.

 </p>
    </div>
  );
};

export default Resource;
